<script lang="ts">
  import { MapLibre } from "svelte-maplibre";
  import { Geocoder } from "$lib";
</script>

<div style="position: relative; width: 100%; height: 300px;">
  <MapLibre
    style={`https://api.maptiler.com/maps/uk-openzoomstack-light/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`}
    standardControls
    on:error={(e) => {
      // @ts-expect-error Not exported
      console.log(e.detail.error);
    }}
    let:map
  >
    <Geocoder {map} />
  </MapLibre>
</div>
