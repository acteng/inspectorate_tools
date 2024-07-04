<script lang="ts">
  import { TextArea } from "govuk-svelte";
  import { state } from "../data";
  import { getResults } from "../results";
  import LevelOfServiceTable from "./LevelOfServiceTable.svelte";
  import Overview from "./Overview.svelte";
  import CheckDetails from "./CheckDetails.svelte";
  import SummaryOfScheme from "./SummaryOfScheme.svelte";
  import PolicyCheckResults from "./PolicyCheckResults.svelte";
  import SafetyCheckResults from "./SafetyCheckResults.svelte";

  let results = getResults($state);
</script>

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

<h2>Results - Further Analysis</h2>

<SummaryOfScheme />

<PolicyCheckResults />

<SafetyCheckResults />

<CheckDetails {results} />
