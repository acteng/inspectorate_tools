<script lang="ts">
  import turfLength from "@turf/length";
  import { Basemap, bbox, MapLibreMap } from "$lib/map";
  import type {
    Feature,
    FeatureCollection,
    LineString,
    Polygon,
  } from "geojson";
  import {
    ButtonGroup,
    DecimalInput,
    DefaultButton,
    FileInput,
    SecondaryButton,
  } from "govuk-svelte";
  import type { Map } from "maplibre-gl";
  import { map as mapStore } from "scheme-sketcher-lib/config";
  import { BoundaryLayer, InterventionLayer } from "scheme-sketcher-lib/draw";
  import {
    RouteControls,
    RouteSnapperLayer,
    RouteSnapperLoader,
  } from "scheme-sketcher-lib/draw/route";
  import { routeTool } from "scheme-sketcher-lib/draw/stores";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { state } from "../data";
  import RouteMapLayer from "../RouteMapLayer.svelte";
  import { getBestMatch, loadAuthorities } from "./match_area";
    import ExternalLink from "$lib/ExternalLink.svelte";

  onMount(async () => {
    await loadAuthorities();
  });

  let cfg = {
    layerZorder: [
      // Google
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
  let extendRoute = true;

  let map: Map | undefined = undefined;
  const gjSchemes = writable($state.summary.networkMap);
  // TODO Can't bind directly to $map, because null vs undefined. Change ss-lib.
  $: if (map) {
    $mapStore = map;
  }

  function getRouteSnapper() {
    routeAuthority = getBestMatch($mapStore!);
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
  $: initiallyZoom($mapStore);

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
      $gjSchemes = $state.summary.networkMap;
      drawingRoute = false;
      $routeTool!.clearEventListeners();
    });

    if (edit) {
      $routeTool!.editExistingRoute(copy.features[0]);
    } else {
      $routeTool!.startRoute();
    }
  }

  function importSketchFile(rawFilename: string, contents: string) {
    try {
      let value = JSON.parse(contents);
      $state.summary.networkMap = value;
      $gjSchemes = value;
      initiallyZoom($mapStore)
    } catch (err) {
      window.alert(`Couldn't load ${rawFilename}: ${err}`);
    }
  }
</script>

<div style="display: flex; height: 80vh">
  <div
    style="width: 30%; overflow-y: scroll; padding: 10px; border: 1px solid black;"
  >
    {#if $mapStore}
      {#key url}
        {#if url}
          <RouteSnapperLoader map={$mapStore} {url} />
        {/if}
      {/key}

      {#if drawingRoute}
        <ButtonGroup>
          <DefaultButton on:click={() => $routeTool?.finish()}>
            Finish
          </DefaultButton>
          <SecondaryButton on:click={() => $routeTool?.cancel()}>
            Cancel
          </SecondaryButton>
        </ButtonGroup>

        <RouteControls
          maptilerApiKey={import.meta.env.VITE_MAPTILER_API_KEY}
          bind:extendRoute
        />
      {:else}
        <div>
          <SecondaryButton on:click={getRouteSnapper}>
            Set up drawing for the area shown on the map
          </SecondaryButton>
          <FileInput
            label={`Import existing Plan Your Active Travel Schemes Sketch`}
            onLoad={importSketchFile}
          />
          <ExternalLink href="https://plan.activetravelengland.gov.uk/choose_area.html">Sketch using PYATS</ExternalLink>
        </div>

        {#if routeAuthority}
          <p>
            Currently drawing a route in {routeAuthority.properties.name} ({routeAuthority
              .properties.level}))
          </p>
        {/if}

        <hr />

        {#if $routeTool}
          <p>Please sketch the route being assessed here.</p>

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
            The drawn route is <b>
              {lengthHint.toFixed(2)}
            </b>
            kilometers long
          </p>
        {/if}

        <DecimalInput
          label="Route length assessed here (km)"
          bind:value={$state.summary.assessedRouteLengthKm}
          width={6}
          min={0}
          hint={"Please provide 2 decimal places"}
        />
        <DecimalInput
          label="Total route length (km)"
          bind:value={$state.summary.totalRouteLengthKm}
          width={6}
          min={0}
          hint={"Please provide 2 decimal places"}
        />

        <Basemap />
      {/if}
    {/if}
  </div>
  <div style="position: relative; width: 70%;">
    <MapLibreMap bind:map>
      {#if routeAuthority}
        <BoundaryLayer {cfg} boundaryGeojson={routeAuthority} />
      {/if}

      <RouteMapLayer id="route-map" />

      <RouteSnapperLayer {cfg} />
    </MapLibreMap>
  </div>
</div>
