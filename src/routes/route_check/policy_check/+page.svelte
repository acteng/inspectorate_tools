<script lang="ts">
  import { base } from "$app/paths";
  import { YesNo } from "$lib";
  import { TextArea } from "govuk-svelte";
  import { state } from "../data";

  let questions = [
    "Are cyclists separated from pedestrians?",
    "Is the route free from barriers, such as chicane barriers, steps or dismount signs?",
    "Does the route feel direct, logical and intuitive to understand for all road users?",
    "Are surfaces suitable for all users?",
    "Is appropriate lighting provided?",
    "Does the route join together, or join other facilities together, as part of a holistic, connected network?",
  ];
</script>

<div class="govuk-width-container">
  {#each questions as question, idx}
    <h2>PO0{idx + 1}: {question}</h2>
    <div style="display: flex; justify-content: space-evenly">
      <YesNo
        inlineSmall
        label="Existing"
        bind:value={$state.policyCheck[idx].existing}
      />
      <YesNo
        inlineSmall
        label="Proposed"
        bind:value={$state.policyCheck[idx].proposed}
      />
    </div>
    <TextArea
      label="Commentary"
      bind:value={$state.policyCheck[idx].commentary}
    />
    {#if $state.policyCheck[idx].existing == "No" || $state.policyCheck[idx].proposed == "No"}
      <p>
        <a href="{base}/route_check/problems_map?kind=conflict&code={idx + 1}">
          Log this policy conflict
        </a>
      </p>
    {/if}

    {#if idx != questions.length - 1}
      <br />
    {/if}
  {/each}
</div>
