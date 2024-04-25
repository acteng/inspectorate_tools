<script lang="ts">
  import { MapLibre, type Map } from "svelte-maplibre";
  import Geocoder from "./Geocoder.svelte";

  // TODO Is it worth trying to preserve the map while navigating to other pages?
  export let map: Map | null = null;

  let style = "hybrid";
  //let style = "uk-openzoomstack-light";
</script>

<MapLibre
  style={`https://api.maptiler.com/maps/${style}/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`}
  standardControls
  on:error={(e) => {
    // @ts-expect-error Not exported
    console.log(e.detail.error);
  }}
  let:map
  bind:map
  bounds={[-5.96, 49.89, 2.31, 55.94]}
>
  <Geocoder {map} />
  <slot />
</MapLibre>
