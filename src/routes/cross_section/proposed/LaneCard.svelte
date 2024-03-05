<script lang="ts">
  import { pairs } from "$lib";
  import { createEventDispatcher } from "svelte";
  import { SecondaryButton, WarningButton, Select } from "govuk-svelte";
  import { state, laneTypes } from "../data";
  import { getWidth } from "./tables";

  export let value: string;
  export let isFirst: boolean;
  export let isLast: boolean;
  export let sectionType: "Desirable" | "Absolute";

  let dispatch = createEventDispatcher<{
    delete: void;
    moveLeft: void;
    moveRight: void;
  }>();
</script>

<div>
  <Select label="Lane type" emptyOption choices={pairs(laneTypes)} bind:value />

  <p>
    {sectionType} minimum width (m): {getWidth(
      value,
      $state.proposed.trafficData.streetFunction,
      sectionType,
    )}
  </p>

  <div style="display: flex; justify-content: space-between">
    <SecondaryButton disabled={isFirst} on:click={() => dispatch("moveLeft")}>
      &larr;
    </SecondaryButton>
    <WarningButton on:click={() => dispatch("delete")}>Delete</WarningButton>
    <SecondaryButton disabled={isLast} on:click={() => dispatch("moveRight")}>
      &rarr;
    </SecondaryButton>
  </div>
</div>

<style>
  div {
    border: 1px solid black;
    padding: 4px;
  }
</style>
