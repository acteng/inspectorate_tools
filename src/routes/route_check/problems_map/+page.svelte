<script lang="ts">
  import { colors, policyConflictColor } from "$lib/colors";
  import type { Feature, Position, FeatureCollection } from "geojson";
  import CriticalForm from "./CriticalForm.svelte";
  import ConflictForm from "./ConflictForm.svelte";
  import {
    DefaultButton,
    SecondaryButton,
    WarningButton,
    Radio,
  } from "govuk-svelte";
  import { onMount, onDestroy } from "svelte";
  import { bbox } from "$lib/map";
  import { BlueskyKey, MapLibreMap, StreetView } from "$lib/map";
  import { GeoreferenceControls, GeoreferenceLayer } from "$lib/map/georef";
  import { Marker, GeoJSON, CircleLayer } from "svelte-maplibre";
  import type { MapMouseEvent, Map } from "maplibre-gl";
  import {
    state,
    type State,
    type CriticalIssue,
    type PolicyConflict,
  } from "../data";

  let map: Map;

  type Kind = "critical" | "conflict";
  type ID = { kind: Kind; idx: number };

  let newKind: Kind = "critical";
  let editing: ID | null = null;
  let hoveringSidebar: ID | null = null;
  let streetviewOn = false;

  $: hoverGj = getHoverData($state, editing, hoveringSidebar);

  function getHoverData(
    state: State,
    editing: ID | null,
    hoveringSidebar: ID | null,
  ): FeatureCollection {
    let gj: FeatureCollection = {
      type: "FeatureCollection" as const,
      features: [],
    };
    let id = editing ?? hoveringSidebar;
    if (id != null) {
      let list =
        id.kind == "critical" ? state.criticalIssues : state.policyConflictLog;
      gj.features.push(pointFeature(list[id.idx].point));
    }
    return gj;
  }

  function select(id: ID) {
    editing = id;
    hoveringSidebar = null;
  }

  function onMapClick(e: MapMouseEvent) {
    if (streetviewOn) {
      return;
    }
    // Deselect something
    if (editing != null) {
      editing = null;
      return;
    }

    if (newKind == "critical") {
      $state.criticalIssues = [
        ...$state.criticalIssues,
        {
          criticalIssue: "",
          stage: "",
          point: e.lngLat.toArray(),
          locationName: "",
          resolved: "",
          notes: "",
        },
      ];
      editing = { kind: "critical", idx: $state.criticalIssues.length - 1 };
    } else {
      $state.policyConflictLog = [
        ...$state.policyConflictLog,
        {
          conflict: "",
          stage: "",
          point: e.lngLat.toArray(),
          locationName: "",
          resolved: "",
          notes: "",
        },
      ];
      editing = { kind: "conflict", idx: $state.policyConflictLog.length - 1 };
    }
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

  function deleteItem() {
    // TODO Modal
    if (!window.confirm("Delete this entry?")) {
      return;
    }
    if (editing!.kind == "critical") {
      $state.criticalIssues.splice(editing!.idx, 1);
      $state.criticalIssues = $state.criticalIssues;
    } else {
      $state.policyConflictLog.splice(editing!.idx, 1);
      $state.policyConflictLog = $state.policyConflictLog;
    }
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
    let gj = {
      type: "FeatureCollection" as const,
      features: [
        ...$state.criticalIssues.map((i) => pointFeature(i.point)),
        ...$state.policyConflictLog.map((i) => pointFeature(i.point)),
      ],
    };
    if (gj.features.length > 0) {
      map.fitBounds(bbox(gj), {
        padding: 20,
        animate,
      });
    }
  }

  // TODO Be consistent with terminology
  function labelIssue(issue: CriticalIssue): string {
    return `${issue.criticalIssue || "Unknown critical"}: ${issue.locationName || "???"}`;
  }

  function labelConflict(conflict: PolicyConflict): string {
    return `${conflict.conflict || "Unknown conflict"}: ${conflict.locationName || "???"}`;
  }

  function onKeyDown(e: KeyboardEvent) {
    if (editing != null && e.key == "Escape") {
      e.stopPropagation();
      editing = null;
    } else if (editing != null && e.key == "Delete") {
      deleteItem();
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<div style="display: flex; height: 80vh">
  <div style="width: 30%; overflow-y: scroll; padding: 10px">
    {#if editing == null}
      <SecondaryButton on:click={() => zoom(true)}>Zoom to fit</SecondaryButton>
      <BlueskyKey />
      <GeoreferenceControls />
      {#if map}
        <StreetView {map} bind:enabled={streetviewOn} />
      {/if}

      <Radio
        legend="Create new problems"
        choices={[
          ["critical", "Critical Issue"],
          ["conflict", "Policy Conflict"],
        ]}
        inlineSmall
        bind:value={newKind}
      />

      <p>
        Click the map to add a problem, or select a problem to fill out data
      </p>

      <h3>Critical Issues</h3>
      <ol>
        {#each $state.criticalIssues as issue, idx}
          <li>
            <SecondaryButton
              on:click={() => select({ kind: "critical", idx })}
              on:mouseenter={() =>
                (hoveringSidebar = { kind: "critical", idx })}
              on:mouseleave={() => (hoveringSidebar = null)}
            >
              {labelIssue(issue)}
            </SecondaryButton>
          </li>
        {/each}
      </ol>

      <h3>Policy Conflicts</h3>
      <ol>
        {#each $state.policyConflictLog as conflict, idx}
          <li>
            <SecondaryButton
              on:click={() => select({ kind: "conflict", idx })}
              on:mouseenter={() =>
                (hoveringSidebar = { kind: "conflict", idx })}
              on:mouseleave={() => (hoveringSidebar = null)}
            >
              {labelConflict(conflict)}
            </SecondaryButton>
          </li>
        {/each}
      </ol>
    {:else}
      <DefaultButton on:click={() => (editing = null)}>Save</DefaultButton>
      <WarningButton on:click={deleteItem}>Delete</WarningButton>
      {#if editing.kind == "critical"}
        <CriticalForm idx={editing.idx} />
      {:else}
        <ConflictForm idx={editing.idx} />
      {/if}
    {/if}
  </div>
  <div style="position: relative; width: 70%;">
    <MapLibreMap bind:map>
      {#each $state.criticalIssues as issue, idx}
        <Marker
          draggable
          bind:lngLat={issue.point}
          on:click={() => select({ kind: "critical", idx })}
          on:dragend={() => select({ kind: "critical", idx })}
        >
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="20,0 0,40 40,40"
              fill={colors.critical.background}
            />
            <text x="13" y="30" style:fill="white">{issue.criticalIssue}</text>
          </svg>
        </Marker>
      {/each}

      {#each $state.policyConflictLog as conflict, idx}
        <Marker
          draggable
          bind:lngLat={conflict.point}
          on:click={() => select({ kind: "conflict", idx })}
          on:dragend={() => select({ kind: "conflict", idx })}
        >
          <span class="dot" style:background={policyConflictColor}>
            {conflict.conflict}
          </span>
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
    border: 3px solid white;
    text-align: center;
    /* TODO Weird way to vertically align */
    line-height: 250%;
  }
  .dot:hover {
    border: 6px solid white;
    cursor: pointer;
  }

  polygon {
    stroke: white;
    stroke-width: 3px;
  }
  polygon:hover {
    stroke-width: 6px;
    cursor: pointer;
  }
</style>
