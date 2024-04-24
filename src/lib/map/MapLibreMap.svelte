<script lang="ts">
  import { MapLibre, GeoJSON, FillLayer, type Map } from "svelte-maplibre";
  import Geocoder from "./Geocoder.svelte";

  // TODO Is it worth trying to preserve the map while navigating to other pages?
  export let map: Map | null = null;
</script>

<MapLibre
  style={`https://api.maptiler.com/maps/uk-openzoomstack-light/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`}
  standardControls
  on:error={(e) => {
    // @ts-expect-error Not exported
    console.log(e.detail.error);
  }}
  let:map
  bind:map
>
  <Geocoder {map} />
  <slot />
</MapLibre>
