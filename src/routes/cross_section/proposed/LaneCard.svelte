<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { WarningButton, Select } from "govuk-svelte";
  import { laneTypes } from "../data";

  export let value: string;

  let dispatch = createEventDispatcher<{
    delete: void;
  }>();

  function pairs(list: string[]): [string, string][] {
    return list.map((x) => [x, x]);
  }
</script>

<div>
  <Select label="Lane type" emptyOption choices={pairs(laneTypes)} bind:value />
  <WarningButton on:click={() => dispatch("delete")}>Delete</WarningButton>
</div>

<style>
  div {
    border: 1px solid black;
    padding: 4px;
  }
</style>
