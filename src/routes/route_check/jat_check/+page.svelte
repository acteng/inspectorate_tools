<script lang="ts">
  import {
    ButtonGroup,
    TextInput,
    DefaultButton,
    SecondaryButton,
    WarningButton,
  } from "govuk-svelte";
  import { state } from "../data";
  import EditJunction from "./EditJunction.svelte";
  import { ClickableCard, ManualSectionModal } from "$lib";
  import {contents} from "../manual/content";

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

<ManualSectionModal
  title={"Junction Assessment Tool Check Manual"}
  section={contents[10]}
  link={"/route_check/manual"}
/>
<br>

{#if mode.kind == "list"}
  <DefaultButton on:click={add}>Add new junction</DefaultButton>

  {#each $state.jat as junction, idx}
    <ClickableCard
      name={junction.name || "Untitled junction"}
      on:click={() => (mode = { kind: "edit", idx, stage: "existing" })}
    />
  {/each}
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
