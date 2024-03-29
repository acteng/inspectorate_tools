<script lang="ts">
  import { state } from "../data";
  import area from "@turf/area";
  import { onDestroy } from "svelte";
  import { WarningButton, DefaultButton, SecondaryButton } from "govuk-svelte";
  import {
    undoLength,
    PolygonTool,
    PolygonToolLayer,
  } from "maplibre-draw-polygon";
  import { MapLibre, GeoJSON, FillLayer, type Map } from "svelte-maplibre";
  import { Geocoder } from "$lib";

  // TODO Is it worth trying to preserve the map while navigating to other pages?
  let map: Map | null = null;

  $: gj = $state.summary.polygon ?? {
    type: "FeatureCollection" as const,
    features: [],
  };

  let draw: PolygonTool | null = null;

  // TODO HMR is not working correctly
  onDestroy(() => {
    draw?.tearDown();
  });

  // Auto-start the tool
  $: if (map) {
    start();
  }

  function start() {
    if (!map) {
      return;
    }
    draw = new PolygonTool(map);
    if ($state.summary.polygon) {
      draw.editExisting($state.summary.polygon);
    } else {
      draw.startNew();
    }
    draw.addEventListenerSuccess(async (f) => {
      draw = null;
      $state.summary.polygon = f;
    });
    draw.addEventListenerFailure(() => {
      draw = null;
      // Leave previous polygon alone
    });
  }

  function reset() {
    $state.summary.polygon = null;
    start();
  }
</script>

{#if draw}
  <div style="display: flex; justify-content: space-between;">
    <SecondaryButton on:click={() => draw?.finish()}>Finish</SecondaryButton>
    <SecondaryButton on:click={() => draw?.cancel()}>Cancel</SecondaryButton>
    <SecondaryButton disabled={$undoLength == 0} on:click={() => draw?.undo()}>
      {#if $undoLength == 0}
        Undo
      {:else}
        Undo ({$undoLength})
      {/if}
    </SecondaryButton>
  </div>
{:else if map}
  <DefaultButton on:click={start}>Edit polygon</DefaultButton>
  {#if $state.summary.polygon}
    <WarningButton on:click={reset}>Delete and start over</WarningButton>
    <p>Polygon area: {area($state.summary.polygon).toFixed(1)} square meters</p>
  {/if}
{:else}
  <p>Map loading...</p>
{/if}

<div style="position: relative; width: 100%; height: 300px;">
  <MapLibre
    style={`https://api.maptiler.com/maps/uk-openzoomstack-light/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`}
    standardControls
    on:error={(e) => {
      // @ts-expect-error Not exported
      console.log(e.detail.error);
    }}
    let:map
    bind:map
  >
    <Geocoder {map} />
    <PolygonToolLayer />
    <GeoJSON data={gj}>
      <FillLayer
        layout={{
          visibility: draw ? "none" : "visible",
        }}
        paint={{
          "fill-color": "red",
          "fill-opacity": 0.8,
        }}
      />
    </GeoJSON>
  </MapLibre>
</div>
