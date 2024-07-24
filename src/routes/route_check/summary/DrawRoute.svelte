<script lang="ts">
  import { loadAuthorities, getBestMatch } from "./match_area";
  import { writable, type Writable } from "svelte/store";
  import type {
    FeatureCollection,
    LineString,
    Feature,
    Polygon,
  } from "geojson";
  import { routeToolGj, snapMode, undoLength } from "./sketch/stores";
  import { init, RouteTool } from "route-snapper-ts";
  import RouteSnapperControls from "./sketch/RouteSnapperControls.svelte";
  import { onMount } from "svelte";
  import { type Map } from "svelte-maplibre";
  import { SecondaryButton } from "govuk-svelte";

  onMount(async () => {
    await init();
    await loadAuthorities();
  });

  export let map: Map;
  export let routeGj: FeatureCollection<LineString>;
  export let routeAuthority: Feature<
    Polygon,
    { name: string; level: string }
  > | null;

  let routeTool: Writable<RouteTool | null> = writable(null);
  export let drawingRoute = false;

  async function getRouteSnapper() {
    routeAuthority = getBestMatch(map);
    let authority = `${routeAuthority.properties.level}_${routeAuthority.properties.name}`;
    let url = `https://atip.uk/route-snappers/v3/${authority}.bin.gz`;
    let resp = await fetch(url);
    let bytes = await resp.arrayBuffer();

    routeTool.set(
      new RouteTool(
        map,
        new Uint8Array(bytes),
        routeToolGj,
        snapMode,
        undoLength,
      ),
    );
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

<div>
  <SecondaryButton on:click={getRouteSnapper}>
    Get route snapper
    {#if routeAuthority}(currently {routeAuthority.properties.name} ({routeAuthority
        .properties.level})){/if}
  </SecondaryButton>
</div>
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
  <RouteSnapperControls route_tool={$routeTool} />
{/if}
