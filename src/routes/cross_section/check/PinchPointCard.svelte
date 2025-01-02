<script lang="ts">
  import { DecimalInput, TextArea } from "govuk-svelte";
  import { state } from "../data";
  import SectionsPossible from "./SectionsPossible.svelte";

  export let i: number;
  export let preferredTotals: [number, number];
  export let compromisedTotals: [number, number];
</script>

<div>
  <DecimalInput
    label="Available width (m)"
    width={4}
    min={0}
    bind:value={$state.checks.pinchPoints[i].availableWidth}
  />

  <SectionsPossible
    available={$state.checks.pinchPoints[i].availableWidth}
    {preferredTotals}
    {compromisedTotals}
  />

  {#if $state.checks.pinchPoints[i].availableWidth < preferredTotals[0]}
    <TextArea
      label="Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"
      bind:value={$state.checks.pinchPoints[i].notes}
    />
  {/if}
</div>

<style>
  div {
    border: 1px solid black;
    padding: 4px;
  }
</style>
