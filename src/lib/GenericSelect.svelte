<script lang="ts" generics="ValueType">
  import { Select } from "govuk-svelte";

  // TODO Upstream

  export let label: string;
  export let hint = "";
  // A list of [value, label] representing the choices. The values can be anything, as long as their JSONified form is unique.
  export let choices: [ValueType, string][];
  // Make the first option the empty string
  export let emptyOption = false;
  export let disabled = false;

  // The current value
  export let value: ValueType;

  $: actualChoices = makeChoices(choices);
  function makeChoices(choices: [ValueType, string][]): [string, string][] {
    return choices.map((pair) => [JSON.stringify(pair[0]), pair[1]]);
  }

  $: selectValue = JSON.stringify(value);

  function selectChanged() {
    value = selectValue == "" ? "" : JSON.parse(selectValue);
  }
</script>

<Select
  {label}
  {hint}
  choices={actualChoices}
  {emptyOption}
  {disabled}
  bind:value={selectValue}
  on:change={selectChanged}
/>
