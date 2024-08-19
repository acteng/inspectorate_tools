<script lang="ts">
  import { colors, policyConflictColor } from "$lib/colors";
  import type { Feature, Position, FeatureCollection } from "geojson";
  import CriticalForm from "./CriticalForm.svelte";
  import ConflictForm from "./ConflictForm.svelte";
  import {
    DefaultButton,
    SecondaryButton,
    WarningButton,
    CollapsibleCard,
    Checkbox,
  } from "govuk-svelte";
  import { tick } from "svelte";
  import { bbox } from "$lib/map";
  import { Basemap, MapLibreMap, StreetView } from "$lib/map";
  import { GeoreferenceControls, GeoreferenceLayer } from "$lib/map/georef";
  import { MapEvents, Marker, GeoJSON, CircleLayer } from "svelte-maplibre";
  import type { MapMouseEvent, Map } from "maplibre-gl";
  import { ClickableCard, IconButton } from "$lib";
  import {
    state,
    type State,
    type CriticalIssue,
    type PolicyConflict,
    type CriticalIssueCode,
    type PolicyConflictCode,
  } from "../data";
  import {
    getFullPolicyConflict,
    getTerseCriticalIssue,
    getCriticalIssueIndex,
    getPolicyConflictIndex,
  } from "../lists";
  import { page } from "$app/stores";
  import panUrl from "$lib/assets/images/pan.svg?url";
  import RouteMapLayer from "../RouteMapLayer.svelte";

  let map: Map | undefined;
  let sidebar: HTMLDivElement;

  $: if (map) {
    zoom(false);
  }

  type Kind = "critical" | "conflict";
  type ID = { kind: Kind; idx: number };

  type Mode =
    | { mode: "select" }
    | { mode: "editing"; id: ID }
    | { mode: "new-critical" }
    | { mode: "new-conflict" };

  let mode: Mode = { mode: "select" };
  let urlKind = $page.url.searchParams.get("kind") || "";
  if (urlKind == "critical") {
    mode = { mode: "new-critical" };
  } else if (urlKind == "conflict") {
    mode = { mode: "new-conflict" };
  }

  // When changing to a form, preserve the list position and restore later
  // TODO Some of this can be in Mode
  let preserveListScroll: number | null = null;
  let hoveringSidebar: ID | null = null;
  let streetviewOn = false;
  let showRoute = true;

  $: if (map) {
    map.getCanvas().style.cursor =
      mode.mode == "new-critical" || mode.mode == "new-conflict"
        ? "crosshair"
        : "auto";
  }

  $: hoverGj = getHoverData($state, mode, hoveringSidebar);

  function getHoverData(
    state: State,
    mode: Mode,
    hoveringSidebar: ID | null,
  ): FeatureCollection {
    let gj: FeatureCollection = {
      type: "FeatureCollection" as const,
      features: [],
    };
    let id = mode.mode == "editing" ? mode.id : hoveringSidebar;
    if (id != null) {
      let list =
        id.kind == "critical" ? state.criticalIssues : state.policyConflictLog;
      gj.features.push(pointFeature(list[id.idx].point));
    }
    return gj;
  }

  async function select(id: ID) {
    preserveListScroll = sidebar.scrollTop;
    mode = { mode: "editing", id };
    hoveringSidebar = null;
    await tick();
    sidebar.scrollTop = 0;
  }

  async function selectAndZoom(id: ID) {
    preserveListScroll = sidebar.scrollTop;
    mode = { mode: "editing", id };
    hoveringSidebar = null;
    await tick();
    sidebar.scrollTop = 0;

    let list =
      id.kind == "critical" ? $state.criticalIssues : $state.policyConflictLog;
    map?.flyTo({
      center: list[id.idx].point,
      duration: 500,
    });
  }

  async function createCopy() {
    if (mode.mode != "editing" || !map) {
      return;
    }
    let id = mode.id;
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
      // @ts-expect-error we know that we've taken the correctly typed list from earlier
      $state.policyConflictLog = newList;
    }

    await select({ kind: id.kind, idx: id.idx + 1 });
  }

  async function stopEditing() {
    mode = { mode: "select" };

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
    if (mode.mode == "select") {
      return;
    }
    // Deselect something
    if (mode.mode == "editing") {
      stopEditing();
      return;
    }

    if (mode.mode == "new-critical") {
      $state.criticalIssues = [
        ...$state.criticalIssues,
        {
          criticalIssue:
            ($page.url.searchParams.get("code") as CriticalIssueCode) || "",
          stage: "",
          point: e.detail.lngLat.toArray(),
          locationName: "",
          resolved: "",
          notes: "",
        },
      ];
      select({ kind: "critical", idx: $state.criticalIssues.length - 1 });
    } else if (mode.mode == "new-conflict") {
      $state.policyConflictLog = [
        ...$state.policyConflictLog,
        {
          conflict:
            ($page.url.searchParams.get("code") as PolicyConflictCode) || "",
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

  function deleteItem() {
    if (mode.mode != "editing") {
      return;
    }
    // TODO Modal
    if (!window.confirm("Delete this entry?")) {
      return;
    }
    if (mode.id.kind == "critical") {
      $state.criticalIssues.splice(mode.id.idx, 1);
      $state.criticalIssues = $state.criticalIssues;
    } else {
      $state.policyConflictLog.splice(mode.id.idx, 1);
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
    if (!map) {
      return;
    }
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
      ? "P00" + getFullPolicyConflict(conflict.conflict)
      : "Unknown conflict";
    return conflict.locationName ? `${base} (${conflict.locationName})` : base;
  }

  function onKeyDown(e: KeyboardEvent) {
    if (mode.mode == "editing") {
      let tag = (e.target as HTMLElement).tagName;
      let formFocused = tag == "INPUT" || tag == "TEXTAREA";

      if (e.key == "Escape" || (e.key == "Enter" && !formFocused)) {
        e.stopPropagation();
        stopEditing();
      } else if (e.key == "Delete" && !formFocused) {
        e.stopPropagation();
        deleteItem();
      }
    } else if (mode.mode == "new-critical" || mode.mode == "new-conflict") {
      if (e.key == "Escape") {
        e.stopPropagation();
        mode = { mode: "select" };
      }
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<div style="display: flex; height: 80vh">
  <div
    style="width: 30%; overflow-y: scroll; padding: 10px; border: 1px solid black;"
    bind:this={sidebar}
  >
    {#if mode.mode != "editing"}
      <CollapsibleCard label="Map tools">
        <SecondaryButton on:click={() => zoom(true)}>
          Zoom to fit
        </SecondaryButton>
        <Basemap />
        <GeoreferenceControls />
        <StreetView {map} bind:enabled={streetviewOn} />
        <Checkbox bind:checked={showRoute}>Show route</Checkbox>
      </CollapsibleCard>

      <div style="background-color: grey; padding: 4px">
        <h3>Critical Issue Log</h3>
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
                {#if critical.resolved == "No"}
                  <span><b>Resolved: {critical.resolved}</b></span>
                {:else}
                  <span>Resolved: {critical.resolved}</span>
                {/if}
              {/if}
            </div>
          </ClickableCard>
        {/each}
      </div>

      <div style="background-color: {policyConflictColor}; padding: 4px">
        <h3>Policy Conflict Log</h3>
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
                {#if conflict.resolved == "No"}
                  <span><b>Resolved: {conflict.resolved}</b></span>
                {:else}
                  <span>Resolved: {conflict.resolved}</span>
                {/if}
              {/if}
            </div>
          </ClickableCard>
        {/each}
      </div>
    {:else}
      <DefaultButton on:click={stopEditing}>Save</DefaultButton>
      <WarningButton on:click={deleteItem}>Delete</WarningButton>
      <SecondaryButton on:click={createCopy}>Copy</SecondaryButton>
      {#if mode.id.kind == "critical"}
        <CriticalForm idx={mode.id.idx} />
      {:else}
        <ConflictForm idx={mode.id.idx} />
      {/if}
    {/if}
  </div>

  <div style="position: relative; width: 70%;">
    <MapLibreMap bind:map>
      <MapEvents on:click={onMapClick} />

      {#if mode.mode != "editing"}
        <div class="control-panel">
          <IconButton on:click={stopEditing}>
            <img src={panUrl} alt="Move map" style="vertical-align: middle;" />
            {#if mode.mode == "select"}
              <b>Move map</b>
            {:else}
              Move map
            {/if}
          </IconButton>
          <IconButton on:click={() => (mode = { mode: "new-critical" })}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              style="vertical-align: middle;"
            >
              <rect width="24" height="24" fill={colors.critical.background} />
            </svg>
            {#if mode.mode == "new-critical"}
              <b>New critical issue</b>
            {:else}
              New critical issue
            {/if}
          </IconButton>
          <IconButton on:click={() => (mode = { mode: "new-conflict" })}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              style="vertical-align: middle;"
            >
              <circle cx="12" cy="12" r="12" fill={policyConflictColor} />
            </svg>
            {#if mode.mode == "new-conflict"}
              <b>New policy conflict</b>
            {:else}
              New policy conflict
            {/if}
          </IconButton>
        </div>
      {/if}

      <RouteMapLayer show={showRoute} id="route-map" />
      {#if map}
        <GeoreferenceLayer {map} beforeId="route-map" />
      {/if}

      {#each $state.criticalIssues as critical, idx}
        <Marker
          draggable
          bind:lngLat={critical.point}
          on:click={() => select({ kind: "critical", idx })}
          on:dragend={() => select({ kind: "critical", idx })}
        >
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill={colors.critical.background} />
            <text
              x="50%"
              y="50%"
              style:fill="white"
              style:font="bold 15px sans-serif"
              dominant-baseline="middle"
              text-anchor="middle"
            >
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

    font: bold 15px sans-serif;
  }
  .dot:hover {
    border: 6px solid white;
    cursor: pointer;
  }

  rect {
    stroke: white;
    stroke-width: 3px;
  }
  rect:hover {
    stroke-width: 6px;
    cursor: pointer;
  }

  .control-panel {
    background: white;
    position: absolute;
    top: 10px;

    left: 50%;
    transform: translate(-50%, 0);
    /* TODO Specified manually */
    width: 560px;
  }
</style>
