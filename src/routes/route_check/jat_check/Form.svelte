<script lang="ts">
  import { pairs } from "$lib";
  import { Radio, TextInput, Select, TextArea } from "govuk-svelte";
  import { state } from "../data";

  export let junctionIdx: number;
  export let stage: "existing" | "proposed";
  export let idx: number;

  let scoreChoices: [string, string][] = [
    ["X", "X - black"],
    ["0", "0 - red"],
    ["1", "1 - amber"],
    ["2", "2 - green"],
  ];
</script>

<TextInput
  label="Name"
  bind:value={$state.jat[junctionIdx][stage].movements[idx].name}
/>

<Radio
  legend="Movement"
  choices={pairs(["cycling", "walking & wheeling"])}
  inlineSmall
  bind:value={$state.jat[junctionIdx][stage].movements[idx].kind}
/>

<Select
  label="Score"
  choices={scoreChoices}
  bind:value={$state.jat[junctionIdx][stage].movements[idx].score}
/>

<TextArea
  label="Comments"
  bind:value={$state.jat[junctionIdx][stage].movements[idx].notes}
/>
