<script lang="ts">
  import type { Feature, Position } from "geojson";
  import Form from "./Form.svelte";
  import { DefaultButton, SecondaryButton, WarningButton } from "govuk-svelte";
  import { onMount, onDestroy } from "svelte";
  import { bbox, DraggablePin } from "$lib/map";
  import { BlueskyKey, MapLibreMap } from "$lib/map";
  import { GeoreferenceControls, GeoreferenceLayer } from "$lib/map/georef";
  import { GeoJSON, CircleLayer } from "svelte-maplibre";
  import type { MapMouseEvent, Map } from "maplibre-gl";
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
    zoom(false);
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

  function zoom(animate: boolean) {
    if ($state.criticalIssues.length > 0) {
      let gj = {
        type: "FeatureCollection" as const,
        features: $state.criticalIssues.map((i) => pointFeature(i.point)),
      };
      map.fitBounds(bbox(gj), {
        padding: 20,
        animate: true,
      });
    }
  }
</script>

<div style="display: flex; height: 600px">
  <div style="width: 30%; overflow-y: scroll; padding: 10px">
    {#if editing == null}
      <SecondaryButton on:click={() => zoom(true)}>Zoom to fit</SecondaryButton>
      <BlueskyKey />
      <GeoreferenceControls />

      <p>Click the map to add a pin, or click a pin to fill out data</p>

      <ol>
        {#each $state.criticalIssues as issue}
          <li>
            Critical issue: type={issue.criticalIssue}, stage={issue.stage}, at {issue.locationName}
          </li>
        {/each}
      </ol>
    {:else}
      <p>Editing {editing}</p>
      <DefaultButton on:click={() => (editing = null)}>Save</DefaultButton>
      <WarningButton on:click={deleteCritical}>Delete</WarningButton>
      <Form idx={editing} />
    {/if}
  </div>
  <div style="position: relative; width: 70%;">
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

      <GeoreferenceLayer {map} />
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
