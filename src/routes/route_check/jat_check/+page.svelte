<script lang="ts">
  import { pairs } from "$lib";
  import { backgroundAndFontCombinations } from "$lib/colors";
  import type { FeatureCollection, Position } from "geojson";
  import { Radio } from "govuk-svelte";
  import { onMount, onDestroy } from "svelte";
  import { DraggablePin } from "$lib/map";
  import { MapLibreMap } from "$lib/map";
  import { GeoJSON, LineLayer } from "svelte-maplibre";
  import type { MapMouseEvent, LngLat, Map } from "maplibre-gl";

  let map: Map;

  interface Arrow {
    point1: Position;
    point2: Position;
    kind: "vehicle-straight" | "vehicle-turn" | "pedestrian";
    color: "green" | "amber" | "red" | "critical";
  }
  let arrows: Arrow[] = [];
  let currentKind: "vehicle-straight" | "vehicle-turn" | "pedestrian" =
    "vehicle-straight";
  let currentColor: "green" | "amber" | "red" | "critical" = "green";

  function onMapClick(e: MapMouseEvent) {
    arrows = [
      ...arrows,
      {
        point1: e.lngLat.toArray(),
        // TODO offset a bit
        point2: e.lngLat.toArray(),
        kind: currentKind,
        color: currentColor,
      },
    ];
  }

  // TODO Wait for loaded
  onMount(() => {
    map.on("click", onMapClick);
  });
  onDestroy(() => {
    map.off("click", onMapClick);
  });

  // TODO Arrows will have to be an extra symbol at endpoints. Or... just generate a polygon.
  function toGj(arrows: Arrow[]): FeatureCollection {
    return {
      type: "FeatureCollection",
      features: arrows.map((arrow) => {
        return {
          type: "Feature",
          properties: {
            kind: arrow.kind,
            color: backgroundAndFontCombinations[arrow.color].background,
          },
          geometry: {
            type: "LineString",
            coordinates: [arrow.point1, arrow.point2],
          },
        };
      }),
    };
  }
</script>

<Radio
  legend="Kind"
  choices={pairs(["vehicle-straight", "vehicle-turn", "pedestrian"])}
  inlineSmall
  bind:value={currentKind}
/>
<Radio
  legend="Color"
  choices={pairs(["green", "amber", "red", "critical"])}
  inlineSmall
  bind:value={currentColor}
/>

<div style="position: relative; width: 100%; height: 600px;">
  <MapLibreMap bind:map>
    {#each arrows as arrow}
      <DraggablePin {map} bind:position={arrow.point1} />
      <DraggablePin {map} bind:position={arrow.point2} />
    {/each}
    <GeoJSON data={toGj(arrows)}>
      <LineLayer
        paint={{
          "line-width": 6,
          "line-color": ["get", "color"],
        }}
      />
    </GeoJSON>
  </MapLibreMap>
</div>
