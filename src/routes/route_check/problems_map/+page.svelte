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
    CollapsibleCard,
    Checkbox,
  } from "govuk-svelte";
  import { onMount, tick } from "svelte";
  import { bbox } from "$lib/map";
  import { Basemap, MapLibreMap, StreetView, ContextualMap } from "$lib/map";
  import { GeoreferenceControls, GeoreferenceLayer } from "$lib/map/georef";
  import { MapEvents, Marker, GeoJSON, CircleLayer } from "svelte-maplibre";
  import type { MapMouseEvent, Map } from "maplibre-gl";
  import { ClickableCard } from "$lib";
  import {
    state,
    type State,
    type CriticalIssue,
    type PolicyConflict,
  } from "../data";
  import {
    getFullPolicyConflict,
    getTerseCriticalIssue,
    getCriticalIssueIndex,
    getPolicyConflictIndex,
  } from "../lists";

  let map: Map;
  let sidebar: HTMLDivElement;

  type Kind = "critical" | "conflict";
  type ID = { kind: Kind; idx: number };

  let newKind: Kind = "critical";
  let editing: ID | null = null;
  // When changing to a form, preserve the list position and restore later
  let preserveListScroll: number | null = null;
  let hoveringSidebar: ID | null = null;
  let streetviewOn = false;
  let showContext = true;

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

  async function select(id: ID) {
    preserveListScroll = sidebar.scrollTop;
    editing = id;
    hoveringSidebar = null;
    await tick();
    sidebar.scrollTop = 0;
  }

  async function selectAndZoom(id: ID) {
    preserveListScroll = sidebar.scrollTop;
    editing = id;
    hoveringSidebar = null;
    await tick();
    sidebar.scrollTop = 0;

    let list =
      id.kind == "critical" ? $state.criticalIssues : $state.policyConflictLog;
    map.flyTo({
      center: list[id.idx].point,
      duration: 500,
    });
  }

  async function createCopy(id: ID) {
    let list =
      id.kind == "critical" ? $state.criticalIssues : $state.policyConflictLog;

    let newItem = JSON.parse(JSON.stringify(list[id.idx]));

    // Arbitrarily put the point slightly to the right of the previous one so that it's visible
    let westLimit = map.getBounds().getWest();
    let eastLimit = map.getBounds().getEast();
    newItem.point[0] += (eastLimit - westLimit) * 0.05;
    let newList = list.toSpliced(id.idx + 1, 0, newItem);

    if (id.kind == "critical") {
      // @ts-expect-error we know that we've taken the correctly typed list from earlier
      $state.criticalIssues = newList;
    } else {
      // @ts-expect-error
      $state.policyConflictLog = newList;
    }

    select({ kind: id.kind, idx: id.idx + 1 });
  }

  async function stopEditing() {
    editing = null;

    // Sort by the conflict or critical type. The scroll position may be slightly irrelevant if the user changes these types.
    $state.policyConflictLog = $state.policyConflictLog.toSorted(
      (a, b) =>
        getPolicyConflictIndex(a.conflict) - getPolicyConflictIndex(b.conflict),
    );
    $state.criticalIssues = $state.criticalIssues.toSorted(
      (a, b) =>
        getCriticalIssueIndex(a.criticalIssue) -
        getCriticalIssueIndex(b.criticalIssue),
    );

    if (preserveListScroll != null) {
      await tick();
      sidebar.scrollTop = preserveListScroll;
      preserveListScroll = null;
    }
  }

  function onMapClick(e: CustomEvent<MapMouseEvent>) {
    if (streetviewOn) {
      return;
    }
    // Deselect something
    if (editing != null) {
      stopEditing();
      return;
    }

    if (newKind == "critical") {
      $state.criticalIssues = [
        ...$state.criticalIssues,
        {
          criticalIssue: "",
          stage: "",
          point: e.detail.lngLat.toArray(),
          locationName: "",
          resolved: "",
          notes: "",
        },
      ];
      select({ kind: "critical", idx: $state.criticalIssues.length - 1 });
    } else {
      $state.policyConflictLog = [
        ...$state.policyConflictLog,
        {
          conflict: "",
          stage: "",
          point: e.detail.lngLat.toArray(),
          locationName: "",
          resolved: "",
          notes: "",
        },
      ];
      select({ kind: "conflict", idx: $state.policyConflictLog.length - 1 });
    }
  }

  // TODO Wait for loaded
  onMount(() => {
    zoom(false);
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
    stopEditing();
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
        ...$state.summary.networkMap.features,
      ],
    };
    if (gj.features.length > 0) {
      map.fitBounds(bbox(gj), {
        padding: 20,
        animate,
      });
    }
  }

  function labelCritical(critical: CriticalIssue): string {
    let base = critical.criticalIssue
      ? getTerseCriticalIssue(critical.criticalIssue)
      : "Unknown critical";
    return critical.locationName ? `${base} (${critical.locationName})` : base;
  }

  function labelConflict(conflict: PolicyConflict): string {
    let base = conflict.conflict
      ? getFullPolicyConflict(conflict.conflict)
      : "Unknown conflict";
    return conflict.locationName ? `${base} (${conflict.locationName})` : base;
  }

  function onKeyDown(e: KeyboardEvent) {
    if (editing != null && e.key == "Escape") {
      e.stopPropagation();
      stopEditing();
    } else if (editing != null && e.key == "Delete") {
      // Let the delete key work in forms
      let tag = (e.target as HTMLElement).tagName;
      if (tag == "INPUT" || tag == "TEXTAREA") {
        return;
      }
      e.stopPropagation();
      deleteItem();
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<div style="display: flex; height: 80vh">
  <div
    style="width: 30%; overflow-y: scroll; padding: 10px; border: 1px solid black;"
    bind:this={sidebar}
  >
    {#if editing == null}
      <CollapsibleCard label="Tools" open>
        <SecondaryButton on:click={() => zoom(true)}>
          Zoom to fit
        </SecondaryButton>
        <Basemap />
        <GeoreferenceControls />
        <StreetView {map} bind:enabled={streetviewOn} />
        <Checkbox bind:checked={showContext}>Show scheme context</Checkbox>
      </CollapsibleCard>

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
      {#each $state.criticalIssues as critical, idx}
        <ClickableCard
          name={labelCritical(critical)}
          on:click={() => selectAndZoom({ kind: "critical", idx })}
          on:mouseenter={() => (hoveringSidebar = { kind: "critical", idx })}
          on:mouseleave={() => (hoveringSidebar = null)}
        >
          <div
            style="width: 100%; display: flex; justify-content: space-between"
          >
            <span>Stage: {critical.stage}</span>
            {#if critical.stage != "Design"}
              <span>Resolved: {critical.resolved}</span>
            {/if}
          </div>
        </ClickableCard>
      {/each}

      <h3>Policy Conflicts</h3>
      {#each $state.policyConflictLog as conflict, idx}
        <ClickableCard
          name={labelConflict(conflict)}
          on:click={() => selectAndZoom({ kind: "conflict", idx })}
          on:mouseenter={() => (hoveringSidebar = { kind: "conflict", idx })}
          on:mouseleave={() => (hoveringSidebar = null)}
        >
          <div
            style="width: 100%; display: flex; justify-content: space-between"
          >
            <span>Stage: {conflict.stage}</span>
            {#if conflict.stage != "Design"}
              <span>Resolved: {conflict.resolved}</span>
            {/if}
          </div>
        </ClickableCard>
      {/each}
    {:else}
      <DefaultButton on:click={stopEditing}>Save</DefaultButton>
      <WarningButton on:click={deleteItem}>Delete</WarningButton>
      <SecondaryButton
        on:click={() =>
          createCopy({
            kind: editing.kind,
            idx: editing.idx,
          })}
      >
        Copy
      </SecondaryButton>
      {#if editing.kind == "critical"}
        <CriticalForm idx={editing.idx} />
      {:else}
        <ConflictForm idx={editing.idx} />
      {/if}
    {/if}
  </div>

  <div style="position: relative; width: 70%;">
    <MapLibreMap bind:map>
      <MapEvents on:click={onMapClick} />

      <ContextualMap gj={$state.summary.networkMap} show={showContext} />

      {#each $state.criticalIssues as critical, idx}
        <Marker
          draggable
          bind:lngLat={critical.point}
          on:click={() => select({ kind: "critical", idx })}
          on:dragend={() => select({ kind: "critical", idx })}
        >
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="20,0 0,40 40,40"
              fill={colors.critical.background}
            />
            <text x="13" y="30" style:fill="white">
              {critical.criticalIssue}
            </text>
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
          paint={{
            "circle-radius": 30,
            "circle-opacity": 0,
            "circle-stroke-width": 5,
            "circle-stroke-color": "yellow",
          }}
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
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    border: 3px solid white;
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
