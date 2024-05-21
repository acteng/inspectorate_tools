<script lang="ts">
  import {
    ButtonGroup,
    TextInput,
    SecondaryButton,
    WarningButton,
  } from "govuk-svelte";
  import { state } from "../data";
  import EditJunction from "./EditJunction.svelte";
  import JunctionList from "./JunctionList.svelte";

  type Mode =
    | { kind: "list" }
    | { kind: "edit"; idx: number; stage: "existing" | "proposed" };
  let mode: Mode = { kind: "list" };

  // TS gets confused
  function getIdx(m: Mode): number {
    if (m.kind == "list") {
      throw new Error("Unreachable case");
    }
    return m.idx;
  }

  function deleteJunction(idx: number) {
    // TODO Modals
    if (!window.confirm("Delete this junction?")) {
      return;
    }
    $state.jat.splice(idx, 1);
    $state.jat = $state.jat;
    mode = { kind: "list" };
  }
</script>

{#if mode.kind == "list"}
  <JunctionList
    on:edit={(e) =>
      (mode = { kind: "edit", idx: e.detail.idx, stage: "existing" })}
  />
{:else if mode.kind == "edit"}
  <h2>{$state.jat[mode.idx].name || "Untitled junction"} - {mode.stage}</h2>

  <ButtonGroup>
    <SecondaryButton on:click={() => (mode = { kind: "list" })}>
      Back to all junctions
    </SecondaryButton>

    {#if mode.stage == "proposed"}
      <SecondaryButton
        on:click={() =>
          (mode = { kind: "edit", idx: getIdx(mode), stage: "existing" })}
      >
        Edit Existing
      </SecondaryButton>
    {:else}
      <SecondaryButton
        on:click={() =>
          (mode = { kind: "edit", idx: getIdx(mode), stage: "proposed" })}
      >
        Edit Proposed
      </SecondaryButton>
    {/if}

    <WarningButton on:click={() => deleteJunction(getIdx(mode))}>
      Delete
    </WarningButton>
  </ButtonGroup>

  <TextInput label="Junction Name" bind:value={$state.jat[mode.idx].name} />

  {#key mode.stage}
    <EditJunction junctionIdx={mode.idx} stage={mode.stage} />
  {/key}
{/if}
