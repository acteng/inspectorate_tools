<script lang="ts">
  import { Radio, TextArea, TextInput } from "govuk-svelte";
  import { state } from "../data";
  import Guidance from "./guidance/Guidance.svelte";

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
  label="Movement"
  choices={[
    ["cycling", "Cycling"],
    ["walking & wheeling", "Walking & Wheeling"],
  ]}
  bind:value={$state.jat[junctionIdx][stage].movements[idx].kind}
/>

{#if $state.jat[junctionIdx][stage].movements[idx].kind == "cycling"}
  <Guidance />
{/if}

<Radio
  label="Score"
  choices={scoreChoices}
  bind:value={$state.jat[junctionIdx][stage].movements[idx].score}
/>

<TextArea
  label="Comments"
  bind:value={$state.jat[junctionIdx][stage].movements[idx].notes}
/>
