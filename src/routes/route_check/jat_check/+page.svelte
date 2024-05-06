<script lang="ts">
  import destination from "@turf/destination";
  import bearing from "@turf/bearing";
  import { colors } from "$lib/colors";
  import type { FeatureCollection, Feature } from "geojson";
  import { SecondaryButton, WarningButton, DefaultButton } from "govuk-svelte";
  import { onMount, onDestroy } from "svelte";
  import { bbox, StreetView, MapLibreMap, BlueskyKey, Popup } from "$lib/map";
  import { GeoreferenceControls, GeoreferenceLayer } from "$lib/map/georef";
  import {
    Marker,
    GeoJSON,
    LineLayer,
    hoverStateFilter,
    type LayerClickInfo,
    SymbolLayer,
  } from "svelte-maplibre";
  import type { MapMouseEvent, Map } from "maplibre-gl";
  import { state, type Movement, type Position, type State } from "../data";
  import Form from "./Form.svelte";

  let map: Map;

  let editing: number | null = null;
  let hoveringSidebar: number | null = null;
  let streetviewOn = false;

  $: hoverGj = getHoverData($state, editing, hoveringSidebar);

  let scoreColors = {
    0: colors.red.background,
    1: colors.amber.background,
    2: colors.green.background,
    X: colors.critical.background,
  };

  function getHoverData(
    state: State,
    editing: number | null,
    hoveringSidebar: number | null,
  ): FeatureCollection {
    let gj: FeatureCollection = {
      type: "FeatureCollection" as const,
      features: [],
    };
    let id = editing ?? hoveringSidebar;
    if (id != null) {
      gj.features.push(lineFeature(state.jat.movements[id], id));
    }
    return gj;
  }

  function select(id: number) {
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

    $state.jat.movements = [
      ...$state.jat.movements,
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
    editing = $state.jat.movements.length - 1;
    hoveringSidebar = null;
  }

  function onFeatureClick(e: CustomEvent<LayerClickInfo>) {
    select(e.detail.features[0].id as number);
  }

  // TODO Wait for loaded
  onMount(() => {
    map.on("click", onMapClick);
    zoom(false);
  });
  onDestroy(() => {
    map.off("click", onMapClick);
  });

  function toGj(movements: Movement[]): FeatureCollection {
    let gj = {
      type: "FeatureCollection" as const,
      features: movements.map((movement, idx) => lineFeature(movement, idx)),
    };
    for (let m of movements) {
      gj.features.push(arrowFeature(m, gj.features.length));
      // Arrows at both ends
      if (m.kind == "pedestrian") {
        let opposite = { ...m, point1: m.point2, point2: m.point1 };
        gj.features.push(arrowFeature(opposite, gj.features.length));
      }
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

  function deleteMovement() {
    // TODO Modal
    if (!window.confirm("Delete this movement?")) {
      return;
    }
    $state.jat.movements.splice(editing!, 1);
    $state.jat.movements = $state.jat.movements;
    editing = null;
  }

  function zoom(animate: boolean) {
    if ($state.jat.movements.length > 0) {
      map.fitBounds(bbox(toGj($state.jat.movements)), {
        padding: 20,
        animate,
      });
    }
  }

  function onKeyDown(e: KeyboardEvent) {
    if (editing != null && e.key == "Escape") {
      e.stopPropagation();
      editing = null;
    } else if (editing != null && e.key == "Delete") {
      deleteMovement();
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<div style="display: flex; height: 80vh">
  <div style="width: 30%; overflow-y: scroll; padding: 10px">
    {#if editing == null}
      <SecondaryButton on:click={() => zoom(true)}>Zoom to fit</SecondaryButton>
      <BlueskyKey />
      <GeoreferenceControls />
      {#if map}
        <StreetView {map} bind:enabled={streetviewOn} />
      {/if}

      <h3>Movements</h3>
      <ol>
        {#each $state.jat.movements as movement, idx}
          <li>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a
              href="#"
              on:click={() => select(idx)}
              on:mouseenter={() => (hoveringSidebar = idx)}
              on:mouseleave={() => (hoveringSidebar = null)}
            >
              {movement.name || "Unnamed movement"}
            </a>
          </li>
        {/each}
      </ol>
    {:else}
      <DefaultButton on:click={() => (editing = null)}>Save</DefaultButton>
      <WarningButton on:click={deleteMovement}>Delete</WarningButton>
      <Form idx={editing} />
    {/if}
  </div>
  <div style="position: relative; width: 100%">
    <MapLibreMap bind:map>
      {#each $state.jat.movements as movement, idx}
        <Marker
          draggable
          bind:lngLat={movement.point1}
          on:dragend={() => select(idx)}
          on:click={() => select(idx)}
        >
          <span
            class="dot"
            style={`background-color: ${scoreColors[movement.score]}`}
            style:opacity={movement.kind == "pedestrian" ? "0%" : "100%"}
          />
        </Marker>
        <Marker
          draggable
          bind:lngLat={movement.point2}
          on:dragend={() => select(idx)}
          on:click={() => select(idx)}
        >
          <span
            class="dot"
            style:background-color={scoreColors[movement.score]}
            style:opacity="0%"
          />
        </Marker>
      {/each}

      <GeoJSON data={toGj($state.jat.movements)}>
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
        <LineLayer paint={{ "line-width": 15, "line-color": "yellow" }} />
      </GeoJSON>

      <GeoreferenceLayer {map} />
    </MapLibreMap>
  </div>
</div>

<style>
  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
  }

  .dot:hover {
    border: 3px solid black;
    cursor: pointer;
  }
</style>
