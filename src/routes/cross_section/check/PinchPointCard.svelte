<script lang="ts">
  import { DecimalInput } from "$lib";
  import SectionsPossible from "./SectionsPossible.svelte";
  import { createEventDispatcher } from "svelte";
  import { TextInput, WarningButton, TextArea } from "govuk-svelte";
  import { state } from "../data";

  export let i: number;
  export let desirableTotal: number;
  export let absoluteTotal: number;

  let dispatch = createEventDispatcher<{
    delete: void;
  }>();
</script>

<div>
  <TextInput
    label="Location of constraint"
    bind:value={$state.checks.pinchPoints[i].location}
  />

  <DecimalInput
    label="Available width (m)"
    width={4}
    min={0}
    bind:value={$state.checks.pinchPoints[i].availableWidth}
  />

  <SectionsPossible
    available={$state.checks.pinchPoints[i].availableWidth}
    {desirableTotal}
    {absoluteTotal}
  />

  {#if $state.checks.pinchPoints[i].availableWidth < desirableTotal}
    <TextArea
      label="Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"
      bind:value={$state.checks.pinchPoints[i].notes}
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
