<script lang="ts">
  import { pairs } from "$lib";
  import { TextInput, Select } from "govuk-svelte";
  import { state } from "../data";

  export let idx: number;

  let kinds = pairs(["cycling-straight", "cycling-turn", "pedestrian"]);
  let colorChoices = pairs(["green", "amber", "red", "critical"]);
</script>

<TextInput label="Name" bind:value={$state.jat.movements[idx].name} />

<Select
  label="Kind"
  choices={kinds}
  bind:value={$state.jat.movements[idx].kind}
/>

<Select
  label="Color"
  choices={colorChoices}
  bind:value={$state.jat.movements[idx].color}
/>
