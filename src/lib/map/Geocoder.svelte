<script lang="ts">
  import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl";
  import GeocodingControl from "@maptiler/geocoding-control/svelte/GeocodingControl.svelte";
  import type { MapController } from "@maptiler/geocoding-control/types";
  import maplibregl from "maplibre-gl";
  import { onMount } from "svelte";

  export let map: maplibregl.Map;

  let mapController: MapController;

  // TODO HMR is broken
  onMount(() => {
    mapController = createMapLibreGlMapController(map, maplibregl);
  });

  // TODO Show markers
  // TODO Set the flyTo duration
</script>

{#if mapController}
  <div>
    <GeocodingControl
      {mapController}
      apiKey={import.meta.env.VITE_MAPTILER_API_KEY}
      country="gb"
    />
  </div>
{/if}

<style>
  div {
    position: absolute;
    top: 100px;
    left: 10px;
    z-index: 1;
  }
</style>
