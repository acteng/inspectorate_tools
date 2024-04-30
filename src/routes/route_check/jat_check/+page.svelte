<script lang="ts">
  import destination from "@turf/destination";
  import bearing from "@turf/bearing";
  import { pairs } from "$lib";
  import { colors } from "$lib/colors";
  import type { FeatureCollection } from "geojson";
  import {
    TextInput,
    Select,
    SecondaryButton,
    WarningButton,
  } from "govuk-svelte";
  import { onMount, onDestroy } from "svelte";
  import { bbox, MapLibreMap, BlueskyKey } from "$lib/map";
  import { GeoreferenceControls, GeoreferenceLayer } from "$lib/map/georef";
  import { Marker, GeoJSON, LineLayer } from "svelte-maplibre";
  import type { MapMouseEvent, Map } from "maplibre-gl";
  import { state, type Movement, type Position } from "../data";
  import Arrow from "./Arrow.svelte";

  let map: Map;

  let kinds = pairs(["cycling-straight", "cycling-turn", "pedestrian"]);
  let colorChoices = pairs(["green", "amber", "red", "critical"]);

  function onMapClick(e: MapMouseEvent) {
    $state.jat.movements = [
      ...$state.jat.movements,
      {
        point1: e.lngLat.toArray() as Position,
        // Offset 10 meters to the north
        point2: destination(e.lngLat.toArray(), 0.01, 0).geometry
          .coordinates as Position,
        kind: "cycling-straight",
        color: "green",
        name: "",
        notes: "",
      },
    ];
  }

  // TODO Wait for loaded
  onMount(() => {
    map.on("click", onMapClick);
    zoom(false);
  });
  onDestroy(() => {
    map.off("click", onMapClick);
  });

  // TODO Arrows will have to be an extra symbol at endpoints. Or... just generate a polygon.
  function toGj(movements: Movement[]): FeatureCollection {
    return {
      type: "FeatureCollection",
      features: movements.map((movement) => {
        return {
          type: "Feature",
          properties: {
            kind: movement.kind,
            color: colors[movement.color].background,
          },
          geometry: {
            type: "LineString",
            coordinates: [movement.point1, movement.point2],
          },
        };
      }),
    };
  }

  function deleteMovement(idx: number) {
    $state.jat.movements.splice(idx, 1);
    $state.jat.movements = $state.jat.movements;
  }

  function zoom(animate: boolean) {
    if ($state.jat.movements.length > 0) {
      map.fitBounds(bbox(toGj($state.jat.movements)), {
        padding: 20,
        animate,
      });
    }
  }
</script>

<div style="display: flex; height: 600px">
  <div style="width: 30%; overflow-y: scroll; padding: 10px">
    <SecondaryButton on:click={() => zoom(true)}>Zoom to fit</SecondaryButton>
    <BlueskyKey />
    <GeoreferenceControls />

    <ol>
      {#each $state.jat.movements as movement, idx}
        <li>
          <TextInput label="Name" bind:value={movement.name} />
          <Select label="Kind" choices={kinds} bind:value={movement.kind} />
          <Select
            label="Color"
            choices={colorChoices}
            bind:value={movement.color}
          />
          <WarningButton on:click={() => deleteMovement(idx)}>
            Delete
          </WarningButton>
        </li>
      {/each}
    </ol>
  </div>
  <div style="position: relative; width: 100%">
    <MapLibreMap bind:map>
      {#each $state.jat.movements as movement}
        <Marker draggable bind:lngLat={movement.point1}>
          <span
            class="dot"
            style={`background-color: ${colors[movement.color].background}`}
          />
        </Marker>
        <Marker draggable bind:lngLat={movement.point2}>
          {#if movement.kind == "pedestrian"}
            <span
              class="dot"
              style={`background-color: ${colors[movement.color].background}`}
            />
          {:else}
            <Arrow
              color={colors[movement.color].background}
              angle={bearing(movement.point1, movement.point2)}
            />
          {/if}
        </Marker>
      {/each}

      <GeoJSON data={toGj($state.jat.movements)}>
        <!-- TODO Two layers due to https://github.com/maplibre/maplibre-gl-js/issues/1235 -->
        <LineLayer
          paint={{
            "line-width": 6,
            "line-color": ["get", "color"],
          }}
          filter={["!=", ["get", "kind"], "pedestrian"]}
        />
        <LineLayer
          paint={{
            "line-width": 6,
            "line-color": ["get", "color"],
            "line-dasharray": [3, 2],
          }}
          filter={["==", ["get", "kind"], "pedestrian"]}
        />
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
