<script lang="ts">
  import { state } from "../data";
  import { TextArea } from "govuk-svelte";
  import { YesNo } from "$lib";

  let questions = [
    "Are cyclists separated from pedestrians?",
    "Is the route free from barriers, such as chicane barriers, steps or dismount signs?",
    "Does the route feel direct, logical and intuitive to understand for all road users?",
    "Are surfaces suitable for all users?",
    "Is appropriate lighting provided?",
    "Does the route join together, or join other facilities together, as part of a holistic, connected network?",
  ];
</script>

{#each questions as question, idx}
  <h2>P00{idx + 1}: {question}</h2>
  <div style="display: flex; justify-content: space-evenly">
    <YesNo label="Existing" bind:value={$state.policyCheck[idx].existing} />
    <YesNo label="Proposed" bind:value={$state.policyCheck[idx].proposed} />
  </div>
  <TextArea
    label="Commentary"
    bind:value={$state.policyCheck[idx].commentary}
  />
{/each}
