<script lang="ts">
  import { TextInput, SecondaryButton, WarningButton } from "govuk-svelte";
  import { state } from "../data";
  import JunctionMap from "./JunctionMap.svelte";

  type Mode =
    | { kind: "list" }
    | { kind: "junction"; idx: number }
    | { kind: "map"; idx: number; stage: "existing" | "proposed" };
  let mode: Mode = { kind: "list" };

  // TS gets confused
  function getIdx(m: Mode): number {
    if (m.kind == "list") {
      throw new Error("Unreachable case");
    }
    return m.idx;
  }

  function add() {
    $state.jat = [
      ...$state.jat,
      {
        name: "",
        existing: {
          arms: [],
          movements: [],
          notes: "",
        },
        proposed: {
          arms: [],
          movements: [],
          notes: "",
        },
      },
    ];
    mode = { kind: "junction", idx: $state.jat.length - 1 };
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
  <SecondaryButton on:click={add}>Add new junction</SecondaryButton>
  <ol>
    {#each $state.jat as junction, idx}
      <li>
        <SecondaryButton on:click={() => (mode = { kind: "junction", idx })}>
          {junction.name || "Untitled junction"}
        </SecondaryButton>
      </li>
    {/each}
  </ol>
{:else if mode.kind == "junction"}
  <SecondaryButton on:click={() => (mode = { kind: "list" })}>
    Back to all junctions
  </SecondaryButton>
  <WarningButton on:click={() => deleteJunction(getIdx(mode))}>
    Delete
  </WarningButton>

  <TextInput label="Name" bind:value={$state.jat[mode.idx].name} />
  <SecondaryButton
    on:click={() =>
      (mode = { kind: "map", idx: getIdx(mode), stage: "existing" })}
  >
    Existing
  </SecondaryButton>
  <SecondaryButton
    on:click={() =>
      (mode = { kind: "map", idx: getIdx(mode), stage: "proposed" })}
  >
    Proposed
  </SecondaryButton>
{:else if mode.kind == "map"}
  <h2>{$state.jat[mode.idx].name || "Untitled junction"} - {mode.stage}</h2>

  <SecondaryButton
    on:click={() => (mode = { kind: "junction", idx: getIdx(mode) })}
  >
    Back
  </SecondaryButton>

  <JunctionMap junctionIdx={mode.idx} stage={mode.stage} />
{/if}
