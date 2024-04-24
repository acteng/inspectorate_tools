<script lang="ts">
  import { Marker, LngLat, type Map } from "maplibre-gl";
  import type { Position } from "geojson";
  import { createEventDispatcher, onDestroy, onMount } from "svelte";

  let dispatch = createEventDispatcher<{
    click: void;
    dragEnd: void;
  }>();

  // TODO Consider the svelte-maplibre Marker, but add cursor styles
  export let map: Map;

  // TODO Not reactive
  export let position: Position;

  let marker: Marker | null = null;

  onMount(() => {
    marker = new Marker({ draggable: true })
      .setLngLat(new LngLat(position[0], position[1]))
      .addTo(map);
    marker.on("dragstart", () => {
      map.getCanvas().style.cursor = "grabbing";
    });
    marker.on("drag", () => {
      position = marker!.getLngLat().toArray();
    });
    marker.on("dragend", () => {
      map.getCanvas().style.cursor = "inherit";
      dispatch("dragEnd");
    });
    marker.getElement().addEventListener("click", (e) => {
      e.stopPropagation();
      dispatch("click");
    });
  });

  onDestroy(() => {
    marker?.remove();
  });
</script>
