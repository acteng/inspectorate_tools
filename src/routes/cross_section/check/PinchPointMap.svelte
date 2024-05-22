<script lang="ts">
  import PinchPointCard from "./PinchPointCard.svelte";
  import ClickableCard from "../../../lib/clickable_cards/ClickableCard.svelte";
  import SectionsPossible from "./SectionsPossible.svelte";
  import { getSectionsPossibleHtml } from "./get_sections_possible";
  import {
    Checkbox,
    SecondaryButton,
    DefaultButton,
    WarningButton,
    CollapsibleCard,
  } from "govuk-svelte";
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
  let editing: number | null;
  let hoveringSidebar: number | null;

  // TODO Wait for loaded
  onMount(() => {
    zoom(false);
  });

  function select(id: number) {
    editing = id;
    hoveringSidebar = null;
  }

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

    // Deselect something
    if (editing != null) {
      editing = null;
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
    select($state.checks.pinchPoints.length - 1);
  }

  function deletePinchPoint() {
    $state.checks.pinchPoints.splice(editing!, 1);
    $state.checks.pinchPoints = $state.checks.pinchPoints;
    editing = null;
  }

  function onKeyDown(e: KeyboardEvent) {
    if (editing != null && e.key == "Escape") {
      e.stopPropagation();
      editing = null;
    } else if (editing != null && e.key == "Delete") {
      // Let the delete key work in forms
      let tag = (e.target as HTMLElement).tagName;
      if (tag == "INPUT" || tag == "TEXTAREA") {
        return;
      }
      e.stopPropagation();
      deletePinchPoint();
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<div style="display: flex; height: 80vh">
  <div
    style="width: 30%; overflow-y: scroll; padding: 10px; border: 1px solid black;"
  >
    {#if editing == null}
      <CollapsibleCard label="Tools">
        <SecondaryButton on:click={() => zoom(true)}>
          Zoom to fit
        </SecondaryButton>
        <Basemap />
        <GeoreferenceControls />
        {#if map}
          <StreetView {map} bind:enabled={streetviewOn} />
        {/if}
        <Checkbox bind:checked={showContext}>Show scheme context</Checkbox>
      </CollapsibleCard>

      {#each $state.checks.pinchPoints as pinch, i}
        <ClickableCard
            name={`Pinch point ${i + 1}`},
            onClick={() => {select(i);}}
        >
          <SectionsPossible
            available={pinch.availableWidth}
            {preferredTotals}
            {compromisedTotals}
          />
        </ClickableCard>
      {/each}
    {:else}
      <h2>Pinch point {editing + 1}</h2>
      <DefaultButton on:click={() => (editing = null)}>Save</DefaultButton>
      <WarningButton on:click={() => deletePinchPoint()}>Delete</WarningButton>

      <PinchPointCard i={editing} {preferredTotals} {compromisedTotals} />
    {/if}
  </div>
  <div style="position: relative; width: 100%">
    <MapLibreMap bind:map>
      <MapEvents on:click={onMapClick} />

      <ContextualMap gj={$state.summary.networkMap} show={showContext} />

      {#each $state.checks.pinchPoints as p, i}
        <Marker draggable bind:lngLat={p.location} on:click={() => select(i)}>
          <span
            class="dot"
            class:highlight={i == editing || i == hoveringSidebar}
          >
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

  .highlight {
    background: cyan;
  }
</style>
