<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { SecondaryButton, WarningButton, Select } from "govuk-svelte";
  import { laneTypes } from "../data";

  export let value: string;
  export let isFirst: boolean;
  export let isLast: boolean;

  let dispatch = createEventDispatcher<{
    delete: void;
    moveLeft: void;
    moveRight: void;
  }>();

  function pairs(list: string[]): [string, string][] {
    return list.map((x) => [x, x]);
  }
</script>

<div>
  <Select label="Lane type" emptyOption choices={pairs(laneTypes)} bind:value />
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
