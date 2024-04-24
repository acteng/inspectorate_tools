<script lang="ts">
  import type { Feature, Position } from "geojson";
  import Form from "./Form.svelte";
  import { DefaultButton, WarningButton } from "govuk-svelte";
  import { onMount, onDestroy } from "svelte";
  import { DraggablePin } from "$lib/map";
  import { MapLibreMap } from "$lib/map";
  import { GeoJSON, CircleLayer } from "svelte-maplibre";
  import type { MapMouseEvent, LngLat, Map } from "maplibre-gl";
  import { state } from "../data";

  let map: Map;

  let editing: number | null = null;

  function select(idx: number) {
    editing = idx;
  }

  function onMapClick(e: MapMouseEvent) {
    $state.criticalIssues = [
      ...$state.criticalIssues,
      {
        id: "TODO",
        criticalIssue: "",
        stage: "",
        point: e.lngLat.toArray(),
        locationName: "",
        resolved: "",
        notes: "",
      },
    ];
    editing = $state.criticalIssues.length - 1;
  }

  // TODO Wait for loaded
  onMount(() => {
    map.on("click", onMapClick);
  });
  onDestroy(() => {
    map.off("click", onMapClick);
  });

  function deleteCritical() {
    // TODO Modal
    if (!window.confirm("Delete this entry?")) {
      return;
    }
    $state.criticalIssues.splice(editing!, 1);
    $state.criticalIssues = $state.criticalIssues;
    editing = null;
  }

  function pointFeature(coordinates: Position): Feature {
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates,
      },
    };
  }
</script>

<div style="display: flex">
  <div style="width: 30%;">
    {#if editing == null}
      <p>Click the map to add a pin, or click a pin to fill out data</p>
    {:else}
      <p>Editing {editing}</p>
      <DefaultButton on:click={() => (editing = null)}>Save</DefaultButton>
      <WarningButton on:click={deleteCritical}>Delete</WarningButton>
      <Form idx={editing} />
    {/if}
  </div>
  <div style="position: relative; width: 70%; height: 600px;">
    {#if editing != null}
      <div class="block-map" />
    {/if}
    <MapLibreMap bind:map>
      {#each $state.criticalIssues as issue, idx}
        <DraggablePin
          {map}
          bind:position={issue.point}
          on:click={() => select(idx)}
          on:dragEnd={() => select(idx)}
        />
      {/each}

      {#if editing != null}
        <GeoJSON data={pointFeature($state.criticalIssues[editing].point)}>
          <CircleLayer
            paint={{ "circle-radius": 10, "circle-color": "yellow" }}
          />
        </GeoJSON>
      {/if}
    </MapLibreMap>
  </div>
</div>

<style>
  .block-map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
</style>
