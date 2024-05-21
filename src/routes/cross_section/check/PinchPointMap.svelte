<script lang="ts">
  import PinchPointCard from "./PinchPointCard.svelte";
  import { Checkbox, SecondaryButton, CollapsibleCard } from "govuk-svelte";
  import {
    bbox,
    MapLibreMap,
    Popup,
    ContextualMap,
    StreetView,
    Basemap,
    type Position,
  } from "$lib/map";
  import { GeoreferenceLayer, GeoreferenceControls } from "$lib/map/georef";
  import {
    Marker,
    GeoJSON,
    LineLayer,
    hoverStateFilter,
    type LayerClickInfo,
    SymbolLayer,
    CircleLayer,
    MapEvents,
  } from "svelte-maplibre";
  import type { MapMouseEvent, Map } from "maplibre-gl";
  import { state } from "../data";
  import { onMount } from "svelte";
  import type { FeatureCollection } from "geojson";

  export let preferredTotals: [number, number];
  export let compromisedTotals: [number, number];

  let map: Map;
  let streetviewOn = false;
  let showContext = true;

  // TODO Wait for loaded
  onMount(() => {
    zoom(false);
  });

  function zoom(animate: boolean) {
    let gj: FeatureCollection = {
      type: "FeatureCollection",
      features: $state.checks.pinchPoints.map((p) => {
        return {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: p.location,
          },
        };
      }),
    };

    for (let f of $state.summary.networkMap.features) {
      gj.features.push(f);
    }

    if (gj.features.length > 0) {
      map.fitBounds(bbox(gj), {
        padding: 20,
        animate,
      });
    }
  }

  function onMapClick(e: CustomEvent<MapMouseEvent>) {
    if (streetviewOn) {
      return;
    }

    $state.checks.pinchPoints = [
      ...$state.checks.pinchPoints,
      {
        location: e.detail.lngLat.toArray() as Position,
        availableWidth: 0.0,
        notes: "",
      },
    ];
  }

  function deletePinchPoint(i: number) {
    $state.checks.pinchPoints.splice(i, 1);
    $state.checks.pinchPoints = $state.checks.pinchPoints;
  }

  function selectPinchPoint(i: number) {
    // TODO Scroll into view
  }
</script>

<div style="display: flex; height: 80vh">
  <div
    style="width: 30%; overflow-y: scroll; padding: 10px; border: 1px solid black;"
  >
    <CollapsibleCard label="Tools">
      <SecondaryButton on:click={() => zoom(true)}>Zoom to fit</SecondaryButton>
      <Basemap />
      <GeoreferenceControls />
      {#if map}
        <StreetView {map} bind:enabled={streetviewOn} />
      {/if}
      <Checkbox bind:checked={showContext}>Show scheme context</Checkbox>
    </CollapsibleCard>

    {#each $state.checks.pinchPoints as _, i (i)}
      <PinchPointCard
        {i}
        on:delete={() => deletePinchPoint(i)}
        {preferredTotals}
        {compromisedTotals}
      />
    {/each}
  </div>
  <div style="position: relative; width: 100%">
    <MapLibreMap bind:map>
      <MapEvents on:click={onMapClick} />

      <ContextualMap gj={$state.summary.networkMap} show={showContext} />

      {#each $state.checks.pinchPoints as p, i}
        <Marker
          draggable
          bind:lngLat={p.location}
          on:click={() => selectPinchPoint(i)}
        >
          <span class="dot">
            {i + 1}
          </span>
        </Marker>
      {/each}
    </MapLibreMap>
  </div>
</div>

<style>
  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: black;

    font-size: 25px;
    font-weight: bold;
  }

  .dot:hover {
    border: 3px solid black;
    cursor: pointer;
  }
</style>
