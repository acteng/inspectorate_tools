<script lang="ts">
  import { YesNo, pairs } from "$lib";
  import { Select, TextInput, TextArea } from "govuk-svelte";
  import { state } from "../data";
  import { streetviewUrl, bingUrl } from "$lib/map";

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

<YesNo
  label="Resolved by Design"
  bind:value={$state.policyConflictLog[idx].resolved}
/>

<TextArea
  label="Commentary & Feedback"
  bind:value={$state.policyConflictLog[idx].notes}
/>
