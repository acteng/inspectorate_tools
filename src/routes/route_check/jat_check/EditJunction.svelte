<script lang="ts">
  import { capitaliseWords } from "$lib";
  import MapControls from "./MapControls.svelte";
  import {
    SecondaryButton,
    WarningButton,
    DefaultButton,
    TextArea,
    TextInput,
    CollapsibleCard,
    Checkbox,
  } from "govuk-svelte";
  import { StreetView, Basemap } from "$lib/map";
  import { GeoreferenceControls } from "$lib/map/georef";
  import { colors } from "$lib/colors";
  import { ClickableCard } from "$lib";
  import { state } from "../data";
  import Form from "./Form.svelte";
  import { tick } from "svelte";
  import { describeScore } from "./score";
  import { generateMovements } from "./generate";

  export let junctionIdx: number;
  export let stage: "existing" | "proposed";

  let otherStage: "existing" | "proposed" =
    stage == "existing" ? "proposed" : "existing";

  type Mode =
    | { mode: "select" }
    | { mode: "editing"; id: ID }
    | { mode: "new-arm" }
    | { mode: "new-movement" };
  type Kind = "arm" | "movement";
  type ID = { kind: Kind; idx: number };

  let mode: Mode = { mode: "select" };
  // When changing to a form, preserve the list position and restore later
  // TODO Some of this could be in Mode
  let preserveListScroll: number | null = null;
  let hoveringSidebar: ID | null = null;
  let streetviewOn = false;
  let showRoute = true;

  let mapControls: MapControls | null = null;
  let sidebar: HTMLDivElement;

  async function select(id: ID) {
    preserveListScroll = sidebar.scrollTop;
    mode = { mode: "editing", id };
    hoveringSidebar = null;
    // Scroll to the top of the form, which can be long for movements
    await tick();
    sidebar.scrollTop = 0;
  }

  async function stopEditing() {
    mode = { mode: "select" };
    if (preserveListScroll != null) {
      await tick();
      sidebar.scrollTop = preserveListScroll;
      preserveListScroll = null;
    }
  }

  function armLabel(idx: number): string {
    return String.fromCharCode(idx + "A".charCodeAt(0));
  }

  function deleteItem() {
    if (mode.mode != "editing") {
      return;
    }
    // TODO Modal
    if (!window.confirm(`Delete this ${mode.id.kind}?`)) {
      return;
    }
    if (mode.id.kind == "movement") {
      $state.jat[junctionIdx][stage].movements.splice(mode.id.idx, 1);
      $state.jat[junctionIdx][stage].movements =
        $state.jat[junctionIdx][stage].movements;
    } else {
      $state.jat[junctionIdx][stage].arms.splice(mode.id.idx, 1);
      $state.jat[junctionIdx][stage].arms = $state.jat[junctionIdx][stage].arms;
    }
    stopEditing();
  }

  function onKeyDown(e: KeyboardEvent) {
    if (mode.mode != "editing") {
      return;
    }
    let tag = (e.target as HTMLElement).tagName;
    let formFocused = tag == "INPUT" || tag == "TEXTAREA";

    if (e.key == "Escape" || (e.key == "Enter" && !formFocused)) {
      e.stopPropagation();
      stopEditing();
    } else if (e.key == "Delete" && !formFocused) {
      e.stopPropagation();
      deleteItem();
    }
  }

  function copyArms() {
    if ($state.jat[junctionIdx][stage].arms.length > 0) {
      if (!window.confirm("Overwrite arms?")) {
        return;
      }
    }
    $state.jat[junctionIdx][stage].arms = JSON.parse(
      JSON.stringify($state.jat[junctionIdx][otherStage].arms),
    );
    $state = $state;
  }

  function copyMovements() {
    if ($state.jat[junctionIdx][stage].movements.length > 0) {
      if (!window.confirm("Overwrite movements?")) {
        return;
      }
    }
    $state.jat[junctionIdx][stage].movements = JSON.parse(
      JSON.stringify($state.jat[junctionIdx][otherStage].movements),
    );
    $state = $state;
  }

  let scoreColors = {
    0: colors.red,
    1: colors.amber,
    2: colors.green,
    X: colors.critical,
  };

  function autogenerateMovements() {
    if (
      $state.jat[junctionIdx][stage].movements.length > 0 &&
      !window.confirm(`Overwrite all movements?`)
    ) {
      return;
    }
    $state.jat[junctionIdx][stage].movements = generateMovements(
      $state.jat[junctionIdx][stage].arms,
    );
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<div class="govuk-width-container">
  <TextArea
    label="Commentary / Notes about {stage} junction"
    bind:value={$state.jat[junctionIdx][stage].notes}
  />

  <p>
    Total JAT score: <b>{describeScore($state.jat[junctionIdx].existing)}</b>
    existing,
    <b>{describeScore($state.jat[junctionIdx].proposed)}</b>
    proposed
  </p>
</div>

<div style="display: flex; height: 80vh">
  <div
    style="width: 30%; overflow-y: scroll; padding: 10px; border: 1px solid black;"
    bind:this={sidebar}
  >
    {#if mode.mode != "editing"}
      <slot />

      <div class="govuk-tabs__panel">
        <p>
          <b>
            Currently editing {stage} junction
            {$state.jat[junctionIdx].name}
          </b>
        </p>

        <CollapsibleCard label="Map tools">
          <SecondaryButton on:click={() => mapControls?.zoom(true)}>
            Zoom to fit
          </SecondaryButton>
          <Basemap />
          <GeoreferenceControls />
          <StreetView map={mapControls?.getMap()} bind:enabled={streetviewOn} />
          <Checkbox bind:checked={showRoute}>Show route</Checkbox>
        </CollapsibleCard>

        <h3>Arms</h3>
        {#each $state.jat[junctionIdx][stage].arms as arm, idx}
          <ClickableCard
            name={`${armLabel(idx)} - ${arm.name || "Unnamed arm"}`}
            on:click={() => select({ kind: "arm", idx })}
            on:mouseenter={() => (hoveringSidebar = { kind: "arm", idx })}
            on:mouseleave={() => (hoveringSidebar = null)}
            hasSlot={false}
          />
        {/each}
        {#if $state.jat[junctionIdx][otherStage].arms.length > 0}
          <SecondaryButton on:click={copyArms}>
            Copy arms from {otherStage}
          </SecondaryButton>
        {/if}

        <h3>Movements</h3>
        <p>
          Total JAT score for {stage}
          <u>{$state.jat[junctionIdx].name || "Untitled junction"}</u>
          : {describeScore($state.jat[junctionIdx][stage])}
        </p>
        <SecondaryButton
          on:click={autogenerateMovements}
          disabled={$state.jat[junctionIdx][stage].arms.length < 2}
        >
          Generate cycling movements between all arms
        </SecondaryButton>
        {#each $state.jat[junctionIdx][stage].movements as movement, idx}
          {@const color = scoreColors[movement.score]}
          <ClickableCard
            name={movement.name || "Unnamed movement"}
            on:click={() => select({ kind: "movement", idx })}
            on:mouseenter={() => (hoveringSidebar = { kind: "movement", idx })}
            on:mouseleave={() => (hoveringSidebar = null)}
          >
            <div
              style="width: 100%; display: flex; justify-content: space-between"
            >
              <span
                style="padding: 4px; color: {color.font}; background-color: {color.background}"
              >
                Score: {movement.score}
              </span>
              <span>{capitaliseWords(movement.kind)}</span>
            </div>
          </ClickableCard>
        {/each}
        {#if $state.jat[junctionIdx][otherStage].movements.length > 0}
          <SecondaryButton on:click={copyMovements}>
            Copy movements from {otherStage}
          </SecondaryButton>
        {/if}
      </div>
    {:else}
      <DefaultButton on:click={stopEditing}>Save</DefaultButton>
      <WarningButton on:click={deleteItem}>Delete</WarningButton>
      {#if mode.id.kind == "movement"}
        <Form {junctionIdx} {stage} idx={mode.id.idx} />
        <DefaultButton on:click={stopEditing}>Save</DefaultButton>
        <WarningButton on:click={deleteItem}>Delete</WarningButton>
      {:else}
        <TextInput
          label="Arm Name"
          bind:value={$state.jat[junctionIdx][stage].arms[mode.id.idx].name}
        />
      {/if}
    {/if}
  </div>
  <div style="position: relative; width: 100%">
    <MapControls
      bind:this={mapControls}
      {junctionIdx}
      {stage}
      {mode}
      {hoveringSidebar}
      {streetviewOn}
      {showRoute}
      {select}
      {stopEditing}
    />
  </div>
</div>
