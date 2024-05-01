<script lang="ts">
  import type { Position } from "geojson";
  import { onMount } from "svelte";
  import { YesNo, pairs } from "$lib";
  import { SecondaryButton, Select, TextInput, TextArea } from "govuk-svelte";
  import { state } from "../data";

  export let idx: number;

  // TODO Preserve bold formatting?
  let choices: [string, string][] = [
    ["1", "1 - Cyclists are not separated from pedestrians"],
    ["2", '2 - Barriers, steps, or "Cyclist Dismount" signs are present'],
    ["3", "3 - The route is not direct, logical and intuitive"],
    ["4", "4 - Inappropriate surface materials"],
    ["5", "5 - Appropriate lighting is not provided"],
    [
      "6",
      "6 - Routes miss opportunities to join together with other facilities as a network",
    ],
  ];

  let locationHint = "Loading";
  onMount(async () => {
    await describeLocation($state.policyConflictLog[idx].point);
  });
  async function describeLocation(pt: Position) {
    let url = `https://nominatim.openstreetmap.org/reverse?lon=${pt[0]}&lat=${pt[1]}&format=json`;
    try {
      let resp = await fetch(url);
      let json = await resp.json();
      // The road usually seems filled out, but fallback to a (verbose) name.
      locationHint = json.address.road ?? json.display_name;
    } catch (err) {
      console.log(`Location lookup failed: ${err}`);
      return "";
    }
  }

  function copyDescription() {
    $state.policyConflictLog[idx].locationName = locationHint;
  }
</script>

<Select
  label="Policy Conflict"
  emptyOption
  {choices}
  bind:value={$state.policyConflictLog[idx].conflict}
/>

<Select
  label="Stage"
  emptyOption
  choices={pairs(["Existing", "Design"])}
  bind:value={$state.policyConflictLog[idx].stage}
/>

<TextInput
  label="Location Name"
  bind:value={$state.policyConflictLog[idx].locationName}
/>
{#if locationHint && locationHint != "Loading" && locationHint != $state.policyConflictLog[idx].locationName}
  <SecondaryButton on:click={copyDescription}>
    Use lookup: {locationHint}
  </SecondaryButton>
{/if}

<YesNo
  label="Resolved by Design"
  bind:value={$state.policyConflictLog[idx].resolved}
/>

<TextArea
  label="Commentary & Feedback"
  bind:value={$state.policyConflictLog[idx].notes}
/>
