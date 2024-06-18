<script lang="ts">
  import MapControls from "./MapControls.svelte";
  import {
    SecondaryButton,
    WarningButton,
    DefaultButton,
    TextArea,
    Radio,
    TextInput,
    CollapsibleCard,
    Checkbox,
  } from "govuk-svelte";
  import { StreetView, Basemap } from "$lib/map";
  import { GeoreferenceControls } from "$lib/map/georef";
  import { colors } from "$lib/colors";
  import { ClickableCard } from "$lib";
  import { state, type JunctionAssessment } from "../data";
  import Form from "./Form.svelte";
  import { tick } from "svelte";

  export let junctionIdx: number;
  export let stage: "existing" | "proposed";

  let otherStage: "existing" | "proposed" =
    stage == "existing" ? "proposed" : "existing";

  type Kind = "arm" | "movement";
  type ID = { kind: Kind; idx: number };

  let newKind: Kind = "arm";
  let editing: ID | null = null;
  // When changing to a form, preserve the list position and restore later
  let preserveListScroll: number | null = null;
  let hoveringSidebar: ID | null = null;
  let streetviewOn = false;
  let showContext = true;

  let mapControls: MapControls | null = null;
  let sidebar: HTMLDivElement;

  async function select(id: ID) {
    preserveListScroll = sidebar.scrollTop;
    editing = id;
    hoveringSidebar = null;
    // Note after the form appears in the sidebar, we don't need to scroll to
    // the top. The form is small and doesn't cause a scrollbar on most screens.
  }

  async function stopEditing() {
    editing = null;
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
    // TODO Modal
    if (!window.confirm(`Delete this ${editing!.kind}?`)) {
      return;
    }
    if (editing!.kind == "movement") {
      $state.jat[junctionIdx][stage].movements.splice(editing!.idx, 1);
      $state.jat[junctionIdx][stage].movements =
        $state.jat[junctionIdx][stage].movements;
    } else {
      $state.jat[junctionIdx][stage].arms.splice(editing!.idx, 1);
      $state.jat[junctionIdx][stage].arms = $state.jat[junctionIdx][stage].arms;
    }
    stopEditing();
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

  function totalScore(ja: JunctionAssessment): number {
    let score = 0;
    let totalPossible = 0;
    for (let m of ja.movements) {
      score += {
        0: 0,
        1: 1,
        2: 2,
        X: 0,
      }[m.score];
      totalPossible += 2;
    }
    return (score / totalPossible) * 100;
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
</script>

<svelte:window on:keydown={onKeyDown} />

<TextArea
  label="Commentary / Notes"
  bind:value={$state.jat[junctionIdx][stage].notes}
/>

<div style="display: flex; height: 80vh">
  <div
    style="width: 30%; overflow-y: scroll; padding: 10px; border: 1px solid black;"
    bind:this={sidebar}
  >
    {#if editing == null}
      <CollapsibleCard label="Tools">
        <SecondaryButton on:click={() => mapControls?.zoom(true)}>
          Zoom to fit
        </SecondaryButton>
        <Basemap />
        <GeoreferenceControls />
        <StreetView map={mapControls?.getMap()} bind:enabled={streetviewOn} />
        <Checkbox bind:checked={showContext}>Show scheme context</Checkbox>
      </CollapsibleCard>

      <p>
        Total JAT score for {stage}
        <u>{$state.jat[junctionIdx].name || "Untitled junction"}</u>
        :
        {#if $state.jat[junctionIdx][stage].movements.length > 0}
          {Math.round(totalScore($state.jat[junctionIdx][stage]))}%
        {:else}
          No movements added
        {/if}
      </p>

      <Radio
        legend="Add to map"
        choices={[
          ["arm", "Arm"],
          ["movement", "Movement"],
        ]}
        inlineSmall
        bind:value={newKind}
      />

      <h3>Arms</h3>
      {#each $state.jat[junctionIdx][stage].arms as arm, idx}
        <ClickableCard
          name={`${armLabel(idx)} - ${arm.name || "Unnamed arm"}`}
          on:click={() => select({ kind: "arm", idx })}
          on:mouseenter={() => (hoveringSidebar = { kind: "arm", idx })}
          on:mouseleave={() => (hoveringSidebar = null)}
        />
      {/each}
      {#if $state.jat[junctionIdx][otherStage].arms.length > 0}
        <SecondaryButton on:click={copyArms}>
          Copy arms from {otherStage}
        </SecondaryButton>
      {/if}

      <h3>Movements</h3>
      {#each $state.jat[junctionIdx][stage].movements as movement, idx}
        {@const color = scoreColors[movement.score]}
        <ClickableCard
          name={movement.name || "Unnamed movement"}
          on:click={() => select({ kind: "movement", idx })}
          on:mouseenter={() => (hoveringSidebar = { kind: "movement", idx })}
          on:mouseleave={() => (hoveringSidebar = null)}
        >
          <span
            style="padding: 4px; color: {color.font}; background-color: {color.background}"
          >
            Score: {movement.score}
          </span>
        </ClickableCard>
      {/each}
      {#if $state.jat[junctionIdx][otherStage].movements.length > 0}
        <SecondaryButton on:click={copyMovements}>
          Copy movements from {otherStage}
        </SecondaryButton>
      {/if}
    {:else}
      <DefaultButton on:click={stopEditing}>Save</DefaultButton>
      <WarningButton on:click={deleteItem}>Delete</WarningButton>
      {#if editing.kind == "movement"}
        <Form {junctionIdx} {stage} idx={editing.idx} />
      {:else}
        <TextInput
          label="Arm Name"
          bind:value={$state.jat[junctionIdx][stage].arms[editing.idx].name}
        />
      {/if}
    {/if}
  </div>
  <div style="position: relative; width: 100%">
    <MapControls
      bind:this={mapControls}
      {junctionIdx}
      {stage}
      {newKind}
      bind:editing
      {hoveringSidebar}
      {streetviewOn}
      {showContext}
      {select}
      {stopEditing}
    />
  </div>
</div>
