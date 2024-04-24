<script lang="ts">
  import { Marker, type LngLat, type Map } from "maplibre-gl";
  import { createEventDispatcher, onDestroy, onMount } from "svelte";

  let dispatch = createEventDispatcher<{
    click: void;
  }>();

  // TODO Consider the svelte-maplibre Marker, but add cursor styles
  export let map: Map;

  // TODO Not reactive
  export let position: LngLat;

  let marker: Marker | null = null;

  onMount(() => {
    marker = new Marker({ draggable: true }).setLngLat(position).addTo(map);
    marker.on("dragstart", () => {
      map.getCanvas().style.cursor = "grabbing";
    });
    marker.on("drag", () => {
      position = marker!.getLngLat();
    });
    marker.on("dragend", () => {
      map.getCanvas().style.cursor = "inherit";
    });
    marker.getElement().addEventListener("click", (e) => {
      dispatch("click");
      e.stopPropagation();
    });
  });

  onDestroy(() => {
    marker?.remove();
  });
</script>
