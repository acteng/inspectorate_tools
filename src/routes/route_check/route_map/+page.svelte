<script lang="ts">
  import { SecondaryButton, DecimalInput } from "govuk-svelte";
  import { state } from "../data";
  import turfLength from "@turf/length";
  import { GeoJSON, LineLayer } from "svelte-maplibre";
  import type { Map } from "maplibre-gl";
  import { bbox, Basemap, MapLibreMap } from "$lib/map";
  import { loadAuthorities, getBestMatch } from "./match_area";
  import { writable } from "svelte/store";
  import type {
    FeatureCollection,
    LineString,
    Feature,
    Polygon,
  } from "geojson";
  import { map } from "scheme-sketcher-lib/config";
  import { BoundaryLayer } from "scheme-sketcher-lib/draw";
  import {
    RouteControls,
    RouteSnapperLayer,
    RouteSnapperLoader,
  } from "scheme-sketcher-lib/draw/route";
  import { routeTool } from "scheme-sketcher-lib/draw/stores";
  import { onMount } from "svelte";

  onMount(async () => {
    await loadAuthorities();
  });

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

      // Draw the inverted boundary fade on top of basemap labels
      "boundary",
    ],
  };

  let drawingRoute = false;
  let routeAuthority: Feature<Polygon, { name: string; level: string }> | null =
    null;
  let url = "";

  function getRouteSnapper() {
    routeAuthority = getBestMatch($map!);
    let authority = `${routeAuthority.properties.level}_${routeAuthority.properties.name}`;
    url = `https://atip.uk/route-snappers/v3/${authority}.bin.gz`;
  }

  function initiallyZoom(map: Map | null) {
    if (!map || $state.summary.networkMap.features.length == 0) {
      return;
    }
    map.fitBounds(bbox($state.summary.networkMap), {
      padding: 20,
      animate: false,
    });
  }
  $: initiallyZoom($map);

  function getLengthHint(gj: FeatureCollection): number | null {
    let sum = 0;
    for (let f of gj.features) {
      if (f.geometry.type == "LineString") {
        sum += turfLength(f, { units: "kilometers" });
      }
    }
    return sum > 0 ? sum : null;
  }
  $: lengthHint = getLengthHint($state.summary.networkMap);

  function startDrawing(edit: boolean) {
    let copy = JSON.parse(JSON.stringify($state.summary.networkMap));
    $state.summary.networkMap.features = [];
    drawingRoute = true;

    $routeTool!.addEventListenerSuccess((feature) => {
      $state.summary.networkMap.features = [feature as Feature<LineString>];
      drawingRoute = false;
      $routeTool!.clearEventListeners();
    });
    $routeTool!.addEventListenerFailure(() => {
      $state.summary.networkMap.features = copy.features;
      drawingRoute = false;
      $routeTool!.clearEventListeners();
    });

    if (edit) {
      $routeTool!.editExistingRoute(copy.features[0]);
    } else {
      $routeTool!.startRoute();
    }
  }
</script>

<div style="display: flex; height: 80vh">
  <div
    style="width: 30%; overflow-y: scroll; padding: 10px; border: 1px solid black;"
  >
    {#if $map}
      {#key url}
        {#if url}
          <RouteSnapperLoader map={$map} {url} />
        {/if}
      {/key}

      {#if drawingRoute}
        <RouteControls
          maptilerApiKey={import.meta.env.VITE_MAPTILER_API_KEY}
          extendRoute={false}
        />
      {:else}
        <div>
          <SecondaryButton on:click={getRouteSnapper}>
            Set up drawing for the area shown on the map
          </SecondaryButton>
        </div>

        {#if routeAuthority}
          <p>
            Currently drawing a route in {routeAuthority.properties.name} ({routeAuthority
              .properties.level}))
          </p>
        {/if}

        <hr />

        {#if $routeTool}
          <div>
            <SecondaryButton on:click={() => startDrawing(false)}>
              Draw a new route
            </SecondaryButton>
            <SecondaryButton
              on:click={() => startDrawing(true)}
              disabled={$state.summary.networkMap.features.length == 0}
            >
              Edit this route
            </SecondaryButton>
          </div>
        {/if}

        {#if lengthHint}
          <p>
            LineStrings in the Network Map cover a total of <b>
              {lengthHint.toFixed(2)}
            </b>
            kilometers
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

        <Basemap />
      {/if}
    {/if}
  </div>
  <div style="position: relative; width: 70%;">
    <MapLibreMap bind:map={$map}>
      {#if routeAuthority}
        <BoundaryLayer {cfg} boundaryGeojson={routeAuthority} />
      {/if}

      <GeoJSON data={$state.summary.networkMap}>
        <LineLayer paint={{ "line-color": "cyan", "line-width": 5 }} />
      </GeoJSON>

      <RouteSnapperLayer {cfg} />
    </MapLibreMap>
  </div>
</div>
