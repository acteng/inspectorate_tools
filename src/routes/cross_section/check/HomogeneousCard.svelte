<script lang="ts">
  import { DecimalInput, TextArea, WarningButton } from "govuk-svelte";
  import { createEventDispatcher } from "svelte";
  import { state } from "../data";
  import SectionsPossible from "./SectionsPossible.svelte";

  export let i: number;
  export let preferredTotals: [number, number];
  export let compromisedTotals: [number, number];

  let dispatch = createEventDispatcher<{
    delete: void;
  }>();
</script>

<div>
  <u>Cross-section #{i + 1}</u>

  <DecimalInput
    label="Available width (m)"
    width={4}
    min={0}
    bind:value={$state.checks.homogeneousSections[i].availableWidth}
  />

  <SectionsPossible
    available={$state.checks.homogeneousSections[i].availableWidth}
    {preferredTotals}
    {compromisedTotals}
  />

  {#if $state.checks.homogeneousSections[i].availableWidth < preferredTotals[0]}
    <TextArea
      label="Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"
      bind:value={$state.checks.homogeneousSections[i].notes}
    />
  {/if}

  <WarningButton on:click={() => dispatch("delete")}>Delete</WarningButton>
</div>

<style>
  div {
    border: 1px solid black;
    padding: 4px;
    min-width: 400px;
    max-width: 400px;
  }
</style>
