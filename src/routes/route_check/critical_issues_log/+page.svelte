<script lang="ts">
  import type { Feature, Position, FeatureCollection } from "geojson";
  import Form from "./Form.svelte";
  import { DefaultButton, SecondaryButton, WarningButton } from "govuk-svelte";
  import { onMount, onDestroy } from "svelte";
  import { bbox } from "$lib/map";
  import { BlueskyKey, MapLibreMap } from "$lib/map";
  import { GeoreferenceControls, GeoreferenceLayer } from "$lib/map/georef";
  import { Marker, GeoJSON, CircleLayer } from "svelte-maplibre";
  import type { MapMouseEvent, Map } from "maplibre-gl";
  import { state, type CriticalIssue } from "../data";

  let map: Map;

  let editing: number | null = null;
  let hoveringSidebar: number | null = null;

  $: hoverGj = getHoverData($state.criticalIssues, editing, hoveringSidebar);

  function getHoverData(
    list: CriticalIssue[],
    editing: number | null,
    hoveringSidebar: number | null,
  ): FeatureCollection {
    let idx = editing ?? hoveringSidebar;
    let gj: FeatureCollection = {
      type: "FeatureCollection" as const,
      features: [],
    };
    if (idx != null) {
      gj.features.push(pointFeature(list[idx].point));
    }
    return gj;
  }

  function select(idx: number) {
    editing = idx;
    hoveringSidebar = null;
  }

  function onMapClick(e: MapMouseEvent) {
    // Deselect something
    if (editing != null) {
      editing = null;
      return;
    }

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
    hoveringSidebar = null;
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

  function labelIssue(issue: CriticalIssue): string {
    return `${issue.criticalIssue || "Unknown critical"}: ${issue.locationName || "???"}`;
  }

  function onKeyDown(e: KeyboardEvent) {
    if (editing != null && e.key == "Escape") {
      e.stopPropagation();
      editing = null;
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<div style="display: flex; height: 600px">
  <div style="width: 30%; overflow-y: scroll; padding: 10px">
    {#if editing == null}
      <SecondaryButton on:click={() => zoom(true)}>Zoom to fit</SecondaryButton>
      <BlueskyKey />
      <GeoreferenceControls />

      <p>
        Click the map to add a critical, or select a critical to fill out data
      </p>

      <ol>
        {#each $state.criticalIssues as issue, idx}
          <li>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a
              href="#"
              on:click={() => select(idx)}
              on:mouseenter={() => (hoveringSidebar = idx)}
              on:mouseleave={() => (hoveringSidebar = null)}
            >
              {labelIssue(issue)}
            </a>
          </li>
        {/each}
      </ol>
    {:else}
      <DefaultButton on:click={() => (editing = null)}>Save</DefaultButton>
      <WarningButton on:click={deleteCritical}>Delete</WarningButton>
      <Form idx={editing} />
    {/if}
  </div>
  <div style="position: relative; width: 70%;">
    <MapLibreMap bind:map>
      {#each $state.criticalIssues as issue, idx}
        <Marker
          draggable
          bind:lngLat={issue.point}
          on:click={() => select(idx)}
          on:dragend={() => select(idx)}
        >
          <span class="dot">C{issue.criticalIssue}</span>
        </Marker>
      {/each}

      <GeoJSON data={hoverGj}>
        <CircleLayer
          paint={{ "circle-radius": 30, "circle-color": "yellow" }}
        />
      </GeoJSON>

      <GeoreferenceLayer {map} />
    </MapLibreMap>
  </div>
</div>

<style>
  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;

    color: white;
    background-color: black;
    border: 3px solid white;
    text-align: center;
    /* TODO Weird way to vertically align */
    line-height: 250%;
  }

  .dot:hover {
    border: 6px solid white;
    cursor: pointer;
  }
</style>
