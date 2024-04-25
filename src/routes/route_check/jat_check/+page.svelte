<script lang="ts">
  import { pairs } from "$lib";
  import { backgroundAndFontCombinations } from "$lib/colors";
  import type { FeatureCollection, Position } from "geojson";
  import {
    Radio,
    TextInput,
    Select,
    SecondaryButton,
    WarningButton,
  } from "govuk-svelte";
  import { onMount, onDestroy } from "svelte";
  import { DraggablePin } from "$lib/map";
  import { bbox, MapLibreMap } from "$lib/map";
  import { GeoJSON, LineLayer } from "svelte-maplibre";
  import type { MapMouseEvent, LngLat, Map } from "maplibre-gl";
  import { state, type Movement } from "../data";

  let map: Map;

  let currentKind: "cycling-straight" | "cycling-turn" | "pedestrian" =
    "cycling-straight";
  let currentColor: "green" | "amber" | "red" | "critical" = "green";

  let kinds = pairs(["cycling-straight", "cycling-turn", "pedestrian"]);
  let colors = pairs(["green", "amber", "red", "critical"]);

  function onMapClick(e: MapMouseEvent) {
    $state.jat.movements = [
      ...$state.jat.movements,
      {
        point1: e.lngLat.toArray(),
        // TODO offset a bit
        point2: e.lngLat.toArray(),
        kind: currentKind,
        color: currentColor,
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
            color: backgroundAndFontCombinations[movement.color].background,
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

<Radio legend="Kind" choices={kinds} inlineSmall bind:value={currentKind} />
<Radio legend="Color" choices={colors} inlineSmall bind:value={currentColor} />

<SecondaryButton on:click={zoom}>Zoom to fit</SecondaryButton>

<div style="position: relative; width: 100%; height: 600px;">
  <MapLibreMap bind:map>
    {#each $state.jat.movements as movement}
      <DraggablePin {map} bind:position={movement.point1} />
      <DraggablePin {map} bind:position={movement.point2} />
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
      <Select label="Color" choices={colors} bind:value={movement.color} />
      <WarningButton on:click={() => deleteMovement(idx)}>Delete</WarningButton>
    </li>
  {/each}
</ol>
