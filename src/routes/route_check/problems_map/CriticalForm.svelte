<script lang="ts">
  import { YesNo, pairs } from "$lib";
  import {
    SecondaryButton,
    Select,
    TextInput,
    TextArea,
    Radio,
  } from "govuk-svelte";
  import { state } from "../data";
  import { streetviewUrl, bingUrl } from "$lib/map";
  import { criticalIssueChoices } from "../lists";

  export let idx: number;
  export let copyCritical: Function;
</script>

<div style="display: flex; justify-content: space-evenly">
  <a href={streetviewUrl($state.criticalIssues[idx].point)} target="_blank">
    Google StreetView
  </a>
  <a href={bingUrl($state.criticalIssues[idx].point)} target="_blank">
    Bing Streetside
  </a>
</div>

<Select
  label="Critical Issue"
  emptyOption
  choices={criticalIssueChoices}
  bind:value={$state.criticalIssues[idx].criticalIssue}
/>

<Radio
  legend="Stage"
  choices={pairs(["Existing", "Design"])}
  bind:value={$state.criticalIssues[idx].stage}
  inlineSmall
/>

<TextInput
  label="Location Name"
  bind:value={$state.criticalIssues[idx].locationName}
/>

{#if $state.criticalIssues[idx].stage != "Design"}
  <YesNo
    label="Resolved by Design"
    bind:value={$state.criticalIssues[idx].resolved}
    inlineSmall
  />
{/if}

<TextArea
  label="Commentary & Feedback"
  bind:value={$state.criticalIssues[idx].notes}
/>

<SecondaryButton on:click={() => copyCritical()}>Copy Critical</SecondaryButton>
