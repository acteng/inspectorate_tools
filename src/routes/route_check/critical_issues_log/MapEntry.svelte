<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { DraggablePin } from "$lib/map";
  import { MapLibreMap } from "$lib/map";
  import type { MapMouseEvent, LngLat, Map } from "maplibre-gl";

  let map: Map;

  let positions: LngLat[] = [];

  function onMarkerClick(idx: number) {
    window.alert(`Clicked ${idx}`);
  }

  function onMapClick(e: MapMouseEvent) {
    positions = [...positions, e.lngLat];
  }

  // TODO Wait for loaded
  onMount(() => {
    map.on("click", onMapClick);
  });
  onDestroy(() => {
    map.off("click", onMapClick);
  });
</script>

<pre>{JSON.stringify(positions)}</pre>

<div style="position: relative; width: 100%; height: 300px;">
  <MapLibreMap bind:map>
    {#each positions as position, idx}
      <DraggablePin {map} bind:position on:click={() => onMarkerClick(idx)} />
    {/each}
  </MapLibreMap>
</div>
