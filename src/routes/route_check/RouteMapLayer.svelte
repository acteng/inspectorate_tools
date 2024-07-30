<script lang="ts">
  import { GeoJSON, LineLayer } from "svelte-maplibre";
  import { state } from "./data";

  export let show = true;
</script>

<GeoJSON data={$state.summary.networkMap}>
  <LineLayer
    paint={{ "line-color": "cyan", "line-width": 5 }}
    layout={{ visibility: show ? "visible" : "none" }}
  />
</GeoJSON>
