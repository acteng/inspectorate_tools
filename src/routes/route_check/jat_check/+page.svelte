<script lang="ts">
  import { ClickableCard } from "$lib";
  import {
    ButtonGroup,
    DefaultButton,
    SecondaryButton,
    TextInput,
    WarningButton,
  } from "govuk-svelte";
  import { state } from "../data";
  import EditJunction from "./EditJunction.svelte";
  import { describeScore } from "./score";
  import Tab from "./Tab.svelte";

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
    mode = { kind: "edit", idx: $state.jat.length - 1, stage: "existing" };
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
  <div class="govuk-width-container">
    <DefaultButton on:click={add}>Add new junction</DefaultButton>

    {#each $state.jat as junction, idx}
      <ClickableCard
        name={junction.name || "Untitled junction"}
        on:click={() => (mode = { kind: "edit", idx, stage: "existing" })}
      >
        <div style="width: 100%; display: flex; justify-content: space-between">
          <span>Existing: {describeScore(junction.existing)}</span>
          <span>Proposed: {describeScore(junction.proposed)}</span>
        </div>
      </ClickableCard>
    {/each}
  </div>
{:else if mode.kind == "edit"}
  <div class="govuk-width-container">
    <h2>{$state.jat[mode.idx].name || "Untitled junction"} - {mode.stage}</h2>

    <ButtonGroup>
      <SecondaryButton on:click={() => (mode = { kind: "list" })}>
        Back to all junctions
      </SecondaryButton>

      <WarningButton on:click={() => deleteJunction(getIdx(mode))}>
        Delete junction
      </WarningButton>
    </ButtonGroup>

    <TextInput label="Junction Name" bind:value={$state.jat[mode.idx].name} />
  </div>

  {#key mode.stage}
    <EditJunction junctionIdx={mode.idx} stage={mode.stage}>
      <ul class="govuk-tabs__list" style="list-style-type: none">
        <Tab
          label="Existing"
          isCurrent={mode.stage == "existing"}
          on:click={() =>
            (mode = { kind: "edit", idx: getIdx(mode), stage: "existing" })}
        />
        <Tab
          label="Proposed"
          isCurrent={mode.stage == "proposed"}
          on:click={() =>
            (mode = { kind: "edit", idx: getIdx(mode), stage: "proposed" })}
        />
      </ul>
    </EditJunction>
  {/key}
{/if}
