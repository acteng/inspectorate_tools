<script lang="ts">
  import { pairs, YesNo } from "$lib";
  import { bingUrl, streetviewUrl } from "$lib/map";
  import { Radio, Select, TextArea, TextInput } from "govuk-svelte";
  import { state } from "../data";
  import { policyConflictChoices } from "../lists";

  export let idx: number;

  // By definition, design-stage problems are unresolved
  $: if ($state.policyConflictLog[idx].stage == "Design") {
    $state.policyConflictLog[idx].resolved = "";
  }
</script>

<div style="display: flex; justify-content: space-evenly">
  <a href={streetviewUrl($state.policyConflictLog[idx].point)} target="_blank">
    Google StreetView
  </a>
  <a href={bingUrl($state.policyConflictLog[idx].point)} target="_blank">
    Bing Streetside
  </a>
</div>

<Select
  label="Policy Conflict"
  emptyOption
  choices={policyConflictChoices}
  bind:value={$state.policyConflictLog[idx].conflict}
/>

<Radio
  label="Stage"
  choices={pairs(["Existing", "Design"])}
  bind:value={$state.policyConflictLog[idx].stage}
  inlineSmall
/>

<TextInput
  label="Location Name"
  bind:value={$state.policyConflictLog[idx].locationName}
/>

{#if $state.policyConflictLog[idx].stage != "Design"}
  <YesNo
    label="Resolved by Design"
    bind:value={$state.policyConflictLog[idx].resolved}
    inlineSmall
  />
{/if}

<TextArea
  label="Commentary & Feedback"
  bind:value={$state.policyConflictLog[idx].notes}
/>
