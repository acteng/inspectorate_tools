<script lang="ts">
  import { state } from "../data";
  import { getResults } from "../results";
  import CheckDetails from "../results_analysis/CheckDetails.svelte";
  import SummaryOfScheme from "../results_analysis/SummaryOfScheme.svelte";
  import Overview from "../results_summary/Overview.svelte";
  import PolicyCheckResults from "../results_analysis/PolicyCheckResults.svelte";
  import SafetyCheckResults from "../results_analysis/SafetyCheckResults.svelte";

  let results = getResults($state);
</script>

<SummaryOfScheme />

<Overview {results} />

<h2>Review statement</h2>
<p>{$state.resultsReviewStatement}</p>

<PolicyCheckResults />

<SafetyCheckResults />

<CheckDetails {results} />
