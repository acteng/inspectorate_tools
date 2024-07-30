<script lang="ts">
  import { DecimalInput } from "govuk-svelte";
  import { state } from "../data";
  import turfLength from "@turf/length";
  import { GeoJSON, LineLayer } from "svelte-maplibre";
  import type { Map } from "maplibre-gl";
  import type { FeatureCollection, Feature, Polygon } from "geojson";
  import DrawRoute from "./DrawRoute.svelte";
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

  $: lengthHint = getLengthHint($state.summary.networkMap);
  function getLengthHint(gj: FeatureCollection): number | null {
    let sum = 0;
    for (let f of gj.features) {
      if (f.geometry.type == "LineString") {
        sum += turfLength(f, { units: "kilometers" });
      }
    }
    return sum > 0 ? sum : null;
  }
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

    {#if lengthHint}
      <p>
        LineStrings in the Network Map cover a total of <b>
          {lengthHint.toFixed(2)}
        </b>
        kilometers. Depending what that map represents, you can use this value directly,
        or hover on a piece of route on the map to see its individual length.
      </p>
    {/if}

    <DecimalInput
      label="Route length assessed here (km)"
      bind:value={$state.summary.assessedRouteLengthKm}
      width={6}
      min={0}
    />
    <DecimalInput
      label="Total route length (km)"
      bind:value={$state.summary.totalRouteLengthKm}
      width={6}
      min={0}
    />
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
