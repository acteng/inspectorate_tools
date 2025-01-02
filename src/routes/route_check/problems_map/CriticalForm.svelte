<script lang="ts">
  import { pairs, YesNo } from "$lib";
  import { bingUrl, streetviewUrl } from "$lib/map";
  import { Radio, Select, TextArea, TextInput } from "govuk-svelte";
  import { state } from "../data";
  import { criticalIssueChoices } from "../lists";

  export let idx: number;

  // By definition, design-stage problems are unresolved
  $: if ($state.criticalIssues[idx].stage == "Design") {
    $state.criticalIssues[idx].resolved = "";
  }
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
  label="Stage"
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
