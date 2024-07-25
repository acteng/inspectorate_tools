<script lang="ts">
  import { GeoJSON, LineLayer } from "svelte-maplibre";
  import type { Map } from "maplibre-gl";
  import type { Feature, Polygon } from "geojson";
  import DrawRoute from "./DrawRoute.svelte";
  import { state } from "../data";
  import { bbox, MapLibreMap } from "$lib/map";
  import { RouteSnapperLayer } from "scheme-sketcher-lib/draw/route";

  let cfg = {
    layerZorder: [
      // Bluesky
      "raster-basemap",

      // The route tool
      "route-points",
      "route-lines",
      "route-polygons",

      // Streets
      "road_label",
      // Zoomstack
      "Road labels",
    ],
  };

  let map: Map;

  let drawingRoute = false;
  let routeAuthority: Feature<Polygon, { name: string; level: string }> | null =
    null;

  function initiallyZoom(map: Map) {
    if (!map || $state.summary.networkMap.features.length == 0) {
      return;
    }
    map.fitBounds(bbox($state.summary.networkMap), {
      padding: 20,
      animate: false,
    });
  }
  $: initiallyZoom(map);
</script>

<div style="display: flex; height: 80vh">
  <div
    style="width: 30%; overflow-y: scroll; padding: 10px; border: 1px solid black;"
  >
    {#if map}
      <DrawRoute
        {map}
        bind:routeGj={$state.summary.networkMap}
        bind:routeAuthority
        bind:drawingRoute
      />
    {/if}
  </div>
  <div style="position: relative; width: 70%;">
    <MapLibreMap bind:map>
      {#if routeAuthority}
        <GeoJSON data={routeAuthority}>
          <LineLayer paint={{ "line-color": "black", "line-width": 5 }} />
        </GeoJSON>
      {/if}

      <GeoJSON data={$state.summary.networkMap}>
        <LineLayer paint={{ "line-color": "cyan", "line-width": 5 }} />
      </GeoJSON>

      <RouteSnapperLayer {cfg} />
    </MapLibreMap>
  </div>
</div>
