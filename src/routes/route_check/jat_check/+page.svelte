<script lang="ts">
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
  import { bbox, MapLibreMap } from "$lib/map";
  import { Marker, GeoJSON, LineLayer } from "svelte-maplibre";
  import type { MapMouseEvent, Map } from "maplibre-gl";
  import { state, type Movement } from "../data";
  import Arrow from "./Arrow.svelte";

  let map: Map;

  let kinds = pairs(["cycling-straight", "cycling-turn", "pedestrian"]);
  let colorChoices = pairs(["green", "amber", "red", "critical"]);

  function onMapClick(e: MapMouseEvent) {
    $state.jat.movements = [
      ...$state.jat.movements,
      {
        point1: e.lngLat.toArray(),
        // TODO offset a bit
        point2: e.lngLat.toArray(),
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
    if ($state.jat.movements.length > 0) {
      map.fitBounds(bbox(toGj($state.jat.movements)), {
        padding: 20,
        animate: false,
      });
    }
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

  function zoom() {
    if ($state.jat.movements.length > 0) {
      map.fitBounds(bbox(toGj($state.jat.movements)), {
        padding: 20,
        animate: true,
      });
    }
  }
</script>

<SecondaryButton on:click={zoom}>Zoom to fit</SecondaryButton>

<div style="position: relative; width: 100%; height: 600px;">
  <MapLibreMap bind:map>
    {#each $state.jat.movements as movement}
      <Marker draggable bind:lngLat={movement.point1}>
        <span class="dot" style={`background-color: ${movement.color}`} />
      </Marker>
      <Marker draggable bind:lngLat={movement.point2}>
        <Arrow color={movement.color} />
      </Marker>
    {/each}
    <GeoJSON data={toGj($state.jat.movements)}>
      <LineLayer
        paint={{
          "line-width": 6,
          "line-color": ["get", "color"],
        }}
      />
    </GeoJSON>
  </MapLibreMap>
</div>

<ol>
  {#each $state.jat.movements as movement, idx}
    <li style="display: flex; justify-content: space-evenly">
      <TextInput label="Name" bind:value={movement.name} />
      <Select label="Kind" choices={kinds} bind:value={movement.kind} />
      <Select
        label="Color"
        choices={colorChoices}
        bind:value={movement.color}
      />
      <WarningButton on:click={() => deleteMovement(idx)}>Delete</WarningButton>
    </li>
  {/each}
</ol>

<style>
  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
  }

  .dot:hover {
    border: 1px solid black;
    cursor: pointer;
  }
</style>
