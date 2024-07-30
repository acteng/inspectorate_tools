<script lang="ts">
  import { loadAuthorities, getBestMatch } from "./match_area";
  import { writable, type Writable } from "svelte/store";
  import type {
    FeatureCollection,
    LineString,
    Feature,
    Polygon,
  } from "geojson";
  import {
    RouteControls,
    RouteSnapperLoader,
  } from "scheme-sketcher-lib/draw/route";
  import { routeTool } from "scheme-sketcher-lib/draw/stores";
  import { onMount } from "svelte";
  import { type Map } from "svelte-maplibre";
  import { SecondaryButton } from "govuk-svelte";

  onMount(async () => {
    await loadAuthorities();
  });

  export let map: Map;
  export let routeGj: FeatureCollection<LineString>;
  export let routeAuthority: Feature<
    Polygon,
    { name: string; level: string }
  > | null;
  export let drawingRoute = false;

  let url = "";

  function getRouteSnapper() {
    routeAuthority = getBestMatch(map);
    let authority = `${routeAuthority.properties.level}_${routeAuthority.properties.name}`;
    url = `https://atip.uk/route-snappers/v3/${authority}.bin.gz`;
  }

  function startDrawing(edit: boolean) {
    let copy = JSON.parse(JSON.stringify(routeGj));
    routeGj.features = [];
    drawingRoute = true;

    $routeTool!.addEventListenerSuccess((feature) => {
      routeGj.features = [feature as Feature<LineString>];
      drawingRoute = false;
      $routeTool!.clearEventListeners();
    });
    $routeTool!.addEventListenerFailure(() => {
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

{#if routeAuthority}
  <p>
    Currently drawing a route in {routeAuthority.properties.name} ({routeAuthority
      .properties.level}))
  </p>
{/if}

{#key url}
  {#if url}
    <RouteSnapperLoader {map} {url} />
  {/if}
{/key}

<div>
  <SecondaryButton on:click={getRouteSnapper}>
    Get route snapper
  </SecondaryButton>
</div>

<hr />

<div>
  <SecondaryButton
    on:click={() => startDrawing(false)}
    disabled={drawingRoute || $routeTool == null}
  >
    Draw a route
  </SecondaryButton>
  <SecondaryButton
    on:click={() => startDrawing(true)}
    disabled={drawingRoute ||
      $routeTool == null ||
      routeGj.features.length == 0}
  >
    Edit this route
  </SecondaryButton>
</div>
{#if drawingRoute && $routeTool}
  <RouteControls
    maptilerApiKey={import.meta.env.VITE_MAPTILER_API_KEY}
    extendRoute
  />
{/if}
