<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import {
    WarningText,
    WarningButton,
    TextArea,
    NumberInput,
  } from "govuk-svelte";
  import SectionsPossible from "./SectionsPossible.svelte";
  import { state } from "../data";

  export let i: number;
  export let desirableTotal: number;
  export let absoluteTotal: number;

  let dispatch = createEventDispatcher<{
    delete: void;
  }>();
</script>

<div>
  <u>Cross-section #{i + 1}</u>

  <NumberInput
    label="Available width (m)"
    width={3}
    min={0}
    bind:value={$state.checks.homogeneousSections[i].availableWidth}
  />

  <SectionsPossible
    available={$state.checks.homogeneousSections[i].availableWidth}
    {desirableTotal}
    {absoluteTotal}
  />

  <TextArea
    label="What will need to change to fit this in? Please leave a justification if space has been taken away from pedestrians or cyclists, or if shared use cycle tracks are proposed."
    bind:value={$state.checks.homogeneousSections[i].notes1}
  />

  <TextArea
    label="Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"
    bind:value={$state.checks.homogeneousSections[i].notes2}
  />

  <WarningButton on:click={() => dispatch("delete")}>Delete</WarningButton>
</div>

<style>
  div {
    border: 1px solid black;
    padding: 4px;
    max-width: 25vw;
  }
</style>
