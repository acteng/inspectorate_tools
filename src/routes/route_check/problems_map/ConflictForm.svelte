<script lang="ts">
  import { YesNo, pairs } from "$lib";
  import { Select, TextInput, TextArea, Radio } from "govuk-svelte";
  import { state } from "../data";
  import { streetviewUrl, bingUrl } from "$lib/map";
  import { policyConflictChoices } from "../lists";

  export let idx: number;
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
  legend="Stage"
  choices={pairs(["Existing", "Design"])}
  bind:value={$state.policyConflictLog[idx].stage}
/>

<TextInput
  label="Location Name"
  bind:value={$state.policyConflictLog[idx].locationName}
/>

{#if $state.policyConflictLog[idx].stage != "Design"}
  <YesNo
    label="Resolved by Design"
    bind:value={$state.policyConflictLog[idx].resolved}
  />
{/if}

<TextArea
  label="Commentary & Feedback"
  bind:value={$state.policyConflictLog[idx].notes}
/>
