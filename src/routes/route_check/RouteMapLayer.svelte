<script lang="ts">
  import { isLine, isPoint, isPolygon } from "scheme-sketcher-lib/maplibre";
  import { CircleLayer, FillLayer, GeoJSON, LineLayer } from "svelte-maplibre";
  import { state } from "./data";

  export let show = true;
  export let id: string;
</script>

<GeoJSON data={$state.summary.networkMap}>
  <CircleLayer
    id={`${id}-points`}
    paint={{ "circle-color": "blue", "circle-radius": 10 }}
    filter={["all", isPoint]}
    layout={{ visibility: show ? "visible" : "none" }}
  />
  <FillLayer
    id={`${id}-polygon-fill`}
    paint={{ "fill-color": "red", "fill-opacity": 0.2 }}
    filter={["all", isPolygon]}
    layout={{ visibility: show ? "visible" : "none" }}
  />
  <LineLayer
    id={`${id}-polygon-outlines`}
    paint={{ "line-color": "black", "line-width": 2 }}
    filter={["all", isPolygon]}
    layout={{ visibility: show ? "visible" : "none" }}
  />
  <LineLayer
    id={`${id}-lines`}
    paint={{ "line-color": "cyan", "line-width": 5 }}
    filter={["all", isLine]}
    layout={{ visibility: show ? "visible" : "none" }}
  />
</GeoJSON>
