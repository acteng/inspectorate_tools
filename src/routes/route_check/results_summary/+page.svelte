<script lang="ts">
  import { TextArea } from "govuk-svelte";
  import { criticalIssuesMappedButNotInCheckExist, policyConflictsMappedButNotInCheckExist, state, unmappedCriticalIssuesExist, unmappedPolicyConflictsExist } from "../data";
  import { getResults } from "../results";
  import LevelOfServiceTable from "./LevelOfServiceTable.svelte";
  import Overview from "./Overview.svelte";

  let results = getResults($state);
  console.log(unmappedPolicyConflictsExist($state));
  console.log(unmappedCriticalIssuesExist($state));
  console.log(policyConflictsMappedButNotInCheckExist($state));
  console.log(criticalIssuesMappedButNotInCheckExist($state));
  
</script>

<div class="govuk-width-container">
  <Overview {results} />

  {#if $state.summary.checkType == "street"}
    <LevelOfServiceTable
      caption="Street Check Level of Service"
      categories={results.levelOfService}
      overall={results.overall}
      overallLabel="Overall ATE Score"
      barChart
    />
  {:else if $state.summary.checkType == "path"}
    <LevelOfServiceTable
      caption="Path Check Level of Service"
      categories={results.levelOfService}
      overall={results.overall}
      overallLabel="Overall ATE Score"
      barChart
    />
  {:else}
    <h2>Select Street Check or Path Check for further results</h2>
  {/if}

  <TextArea
    label="Review statement"
    bind:value={$state.resultsReviewStatement}
    hint="Use the space to provide overall feedback for the proposed scheme"
  />
</div>
