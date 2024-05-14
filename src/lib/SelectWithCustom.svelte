<script lang="ts">
  // TODO Upstream to govuk-svelte
  // This is a Select component with an "Other" option. When selected, a TextInput is provided.

  import { Select, TextInput } from "govuk-svelte";

  export let label: string;
  export let hint = "";
  // A list of [value, label] representing the choices. "Other" will be
  // automatically included at the end of this list.
  export let choices: [string, string][];
  // Make the first option the empty string
  export let emptyOption = false;
  export let disabled = false;

  // The current value
  export let value: string;

  let selectChoices = new Set(choices.map((pair) => pair[0]));
  let actualChoices: [string, string][] = [...choices, ["other", "Other"]];
  if (emptyOption) {
    selectChoices.add("");
  }

  function makeSelectValue(value: string): string {
    return selectChoices.has(value) ? value : "other";
  }
  let selectValue = makeSelectValue(value);

  function selectChanged() {
    value = selectValue == "other" ? "" : selectValue;
  }
</script>

<div class:grouped={selectValue == "other"}>
  <Select
    {label}
    {hint}
    choices={actualChoices}
    {emptyOption}
    {disabled}
    bind:value={selectValue}
    on:change={selectChanged}
  />

  {#if selectValue == "other"}
    <TextInput label="Enter a custom value" bind:value />
  {/if}
</div>

<style>
  .grouped {
    border: 1px solid black;
    padding: 16px;
  }
</style>
