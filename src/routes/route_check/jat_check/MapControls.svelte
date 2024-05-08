<script lang="ts">
  import destination from "@turf/destination";
  import bearing from "@turf/bearing";
  import { colors } from "$lib/colors";
  import type { FeatureCollection, Feature } from "geojson";
  import { onMount, onDestroy } from "svelte";
  import { bbox, MapLibreMap, Popup } from "$lib/map";
  import { GeoreferenceLayer } from "$lib/map/georef";
  import {
    Marker,
    GeoJSON,
    LineLayer,
    hoverStateFilter,
    type LayerClickInfo,
    SymbolLayer,
    CircleLayer,
  } from "svelte-maplibre";
  import type { MapMouseEvent, Map } from "maplibre-gl";
  import {
    state,
    type Arm,
    type Movement,
    type Position,
    type State,
  } from "../data";

  type Kind = "arm" | "movement";
  type ID = { kind: Kind; idx: number };

  export let junctionIdx: number;
  export let stage: "existing" | "proposed";
  export let newKind: Kind;
  export let editing: ID | null;
  export let hoveringSidebar: ID | null;
  export let streetviewOn: boolean;

  let map: Map;

  $: hoverGj = getHoverData($state, editing, hoveringSidebar);

  let scoreColors = {
    0: colors.red.background,
    1: colors.amber.background,
    2: colors.green.background,
    X: colors.critical.background,
  };

  function getHoverData(
    state: State,
    editing: ID | null,
    hoveringSidebar: ID | null,
  ): FeatureCollection {
    let gj: FeatureCollection = {
      type: "FeatureCollection" as const,
      features: [],
    };
    let id = editing ?? hoveringSidebar;
    if (id != null) {
      if (id.kind == "arm") {
        gj.features.push(
          armFeature(state.jat[junctionIdx][stage].arms[id.idx], id.idx),
        );
      } else {
        gj.features.push(
          lineFeature(state.jat[junctionIdx][stage].movements[id.idx], id.idx),
        );
      }
    }
    return gj;
  }

  function select(id: ID) {
    editing = id;
    hoveringSidebar = null;
  }

  function onMapClick(e: MapMouseEvent) {
    if (streetviewOn) {
      return;
    }

    // TODO Clicks on a LineLayer or Marker should stop the event from reaching here. Until then, use this hack
    for (let _ of map.queryRenderedFeatures(e.point, {
      layers: ["jat-cycling", "jat-pedestrian"],
    })) {
      return;
    }

    // Deselect something
    if (editing != null) {
      editing = null;
      return;
    }

    if (newKind == "arm") {
      $state.jat[junctionIdx][stage].arms = [
        ...$state.jat[junctionIdx][stage].arms,
        {
          point: e.lngLat.toArray() as Position,
          name: "",
        },
      ];
      editing = {
        kind: "arm",
        idx: $state.jat[junctionIdx][stage].arms.length - 1,
      };
    } else {
      $state.jat[junctionIdx][stage].movements = [
        ...$state.jat[junctionIdx][stage].movements,
        {
          point1: e.lngLat.toArray() as Position,
          // Offset 10 meters to the north
          point2: destination(e.lngLat.toArray(), 0.01, 0).geometry
            .coordinates as Position,
          kind: "cycling-straight",
          score: "X",
          name: "",
          notes: "",
        },
      ];
      editing = {
        kind: "movement",
        idx: $state.jat[junctionIdx][stage].movements.length - 1,
      };
    }
    hoveringSidebar = null;
  }

  function onFeatureClick(e: CustomEvent<LayerClickInfo>) {
    select({ kind: "movement", idx: e.detail.features[0].id as number });
  }

  // TODO Wait for loaded
  onMount(() => {
    map.on("click", onMapClick);
    zoom(false);
  });
  onDestroy(() => {
    map.off("click", onMapClick);
  });

  // This includes movements and arms for zooming. When rendered, arms aren't shown.
  function toGj(state: State): FeatureCollection {
    let gj = {
      type: "FeatureCollection" as const,
      features: state.jat[junctionIdx][stage].movements.map((movement, idx) =>
        lineFeature(movement, idx),
      ),
    };
    for (let m of state.jat[junctionIdx][stage].movements) {
      gj.features.push(arrowFeature(m, gj.features.length));
      // Arrows at both ends
      if (m.kind == "pedestrian") {
        let opposite = { ...m, point1: m.point2, point2: m.point1 };
        gj.features.push(arrowFeature(opposite, gj.features.length));
      }
    }

    for (let arm of state.jat[junctionIdx][stage].arms) {
      gj.features.push(armFeature(arm, gj.features.length));
    }

    return gj;
  }

  function lineFeature(movement: Movement, id: number): Feature {
    return {
      type: "Feature",
      id,
      properties: {
        name: movement.name,
        kind: movement.kind,
        color: scoreColors[movement.score],
      },
      geometry: {
        type: "LineString",
        coordinates: [movement.point1, movement.point2],
      },
    };
  }

  function arrowFeature(movement: Movement, id: number): Feature {
    return {
      type: "Feature",
      id,
      properties: {
        kind: movement.kind,
        color: scoreColors[movement.score],
        angle: bearing(movement.point1, movement.point2),
      },
      geometry: {
        type: "Point",
        coordinates: movement.point2,
      },
    };
  }
  function armFeature(arm: Arm, id: number): Feature {
    return {
      type: "Feature",
      id,
      properties: {
        kind: "arm",
      },
      geometry: {
        type: "Point",
        coordinates: arm.point,
      },
    };
  }

  function armLabel(idx: number): string {
    return String.fromCharCode(idx + "A".charCodeAt(0));
  }

  export function zoom(animate: boolean) {
    let gj = toGj($state);
    if (gj.features.length > 0) {
      map.fitBounds(bbox(gj), {
        padding: 20,
        animate,
      });
    }
  }

  // For plumbing to sidebar controls that need this
  export function getMap(): Map {
    return map;
  }
</script>

<MapLibreMap bind:map>
  {#each $state.jat[junctionIdx][stage].arms as arm, idx}
    <Marker
      draggable
      bind:lngLat={arm.point}
      on:dragend={() => select({ kind: "arm", idx })}
      on:click={() => select({ kind: "arm", idx })}
    >
      <span class="dot" style:color="#4472c4" style:background-color="white">
        {armLabel(idx)}
      </span>
    </Marker>
  {/each}

  {#each $state.jat[junctionIdx][stage].movements as movement, idx}
    <Marker
      draggable
      bind:lngLat={movement.point1}
      on:dragend={() => select({ kind: "movement", idx })}
      on:click={() => select({ kind: "movement", idx })}
    >
      <span
        class="dot"
        style:background-color={scoreColors[movement.score]}
        style:opacity={movement.kind == "pedestrian" ? "0%" : "100%"}
      />
    </Marker>
    <Marker
      draggable
      bind:lngLat={movement.point2}
      on:dragend={() => select({ kind: "movement", idx })}
      on:click={() => select({ kind: "movement", idx })}
    >
      <span
        class="dot"
        style:background-color={scoreColors[movement.score]}
        style:opacity="0%"
      />
    </Marker>
  {/each}

  <GeoJSON data={toGj($state)}>
    <!-- TODO Two layers due to https://github.com/maplibre/maplibre-gl-js/issues/1235 -->
    <LineLayer
      id="jat-cycling"
      manageHoverState
      paint={{
        "line-width": hoverStateFilter(6, 10),
        "line-color": ["get", "color"],
      }}
      filter={["!=", ["get", "kind"], "pedestrian"]}
      on:click={onFeatureClick}
    >
      <Popup let:props>{props.name || "Untitled movement"}</Popup>
    </LineLayer>
    <LineLayer
      id="jat-pedestrian"
      manageHoverState
      paint={{
        "line-width": hoverStateFilter(6, 8),
        "line-color": ["get", "color"],
        "line-dasharray": [3, 2],
      }}
      filter={["==", ["get", "kind"], "pedestrian"]}
      on:click={onFeatureClick}
    >
      <Popup let:props>{props.name || "Untitled movement"}</Popup>
    </LineLayer>

    <SymbolLayer
      id="jat-arrow"
      filter={["has", "angle"]}
      paint={{
        "text-color": ["get", "color"],
        "text-halo-color": "white",
        "text-halo-width": 3.0,
      }}
      layout={{
        "text-field": "⬆",
        "text-overlap": "always",
        "text-rotate": [
          "+",
          ["get", "angle"],
          [
            "match",
            ["get", "kind"],
            "cycling-left-turn",
            -90,
            "cycling-right-turn",
            90,
            0,
          ],
        ],
        "text-size": 70,
      }}
    />
  </GeoJSON>

  <GeoJSON data={hoverGj}>
    <LineLayer
      paint={{ "line-width": 5, "line-color": "yellow", "line-gap-width": 45 }}
    />

    <CircleLayer
      filter={["==", ["get", "kind"], "arm"]}
      paint={{
        "circle-radius": 20,
        "circle-opacity": 0,
        "circle-stroke-width": 5,
        "circle-stroke-color": "yellow",
      }}
    />
  </GeoJSON>

  <GeoreferenceLayer {map} />
</MapLibreMap>

<style>
  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }

  .dot:hover {
    border: 3px solid black;
    cursor: pointer;
  }
</style>
