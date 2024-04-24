<script lang="ts">
  import Form from "./Form.svelte";
  import { DefaultButton, WarningButton } from "govuk-svelte";
  import { onMount, onDestroy } from "svelte";
  import { DraggablePin } from "$lib/map";
  import { MapLibreMap } from "$lib/map";
  import type { MapMouseEvent, LngLat, Map } from "maplibre-gl";
  import { state } from "../data";

  let map: Map;

  let editing: number | null = null;
  // TODO while editing, emphasize that pin and disable all map interactions

  function onMarkerClick(idx: number) {
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
    $state.criticalIssues.splice(editing!, 1);
    $state.criticalIssues = $state.criticalIssues;
    editing = null;
  }
</script>

<div style="display: flex">
  <div style="width: 30%;">
    {#if editing == null}
      <p>Click the map to add a pin, or click a pin to fill out data</p>
    {:else}
      <p>Editing {editing}</p>
      <Form idx={editing} />
      <DefaultButton on:click={() => (editing = null)}>Save</DefaultButton>
      <WarningButton on:click={deleteCritical}>Delete</WarningButton>
    {/if}
  </div>
  <div style="position: relative; width: 70%; height: 300px;">
    <MapLibreMap bind:map>
      {#each $state.criticalIssues as issue, idx}
        <DraggablePin
          {map}
          bind:position={issue.point}
          on:click={() => onMarkerClick(idx)}
        />
      {/each}
    </MapLibreMap>
  </div>
</div>
