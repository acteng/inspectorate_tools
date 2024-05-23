<script lang="ts">
  import { state } from "../data";
  import { getResults } from "../results";
  import CheckDetails from "../results_analysis/CheckDetails.svelte";
  import SummaryOfScheme from "../results_analysis/SummaryOfScheme.svelte";
  import Overview from "../results_summary/Overview.svelte";
  import PolicyCheckResults from "../results_analysis/PolicyCheckResults.svelte";
  import SafetyCheckResults from "../results_analysis/SafetyCheckResults.svelte";
  import {
    criticalIssueChoices,
    policyConflictChoices,
  } from "../problems_map/lists";

  let results = getResults($state);

  // Hack around
  // https://stackoverflow.com/questions/67336062/typescript-not-parsed-in-svelte-html-section
  // until we're using Svelte 5
  function notNull<T>(x: T | null | undefined): T {
    if (x == null || x == undefined) {
      throw new Error("Oops, notNull given something null");
    }
    return x;
  }
</script>

<SummaryOfScheme />

<Overview {results} />

<h2>Review statement</h2>
<p>{$state.resultsReviewStatement}</p>

<PolicyCheckResults />

<table>
  <tr>
    <th>Remaining Policy Conflicts</th>
    <th>Policy Conflict ID</th>
    <th>Policy Conflict</th>
    <th>Location Name</th>
    <th>Commentary & Feedback</th>
  </tr>
  {#each $state.policyConflictLog.filter((x) => x.resolved != "Yes") as conflict, i}
    <tr>
      <th>{i + 1}</th>
      <td>TODO ID</td>
      <td>
        {notNull(
          policyConflictChoices.find((pair) => pair[0] == conflict.conflict),
        )[1]}
      </td>
      <td>{conflict.locationName}</td>
      <td>{conflict.notes}</td>
    </tr>
  {/each}
</table>

<SafetyCheckResults />

<table>
  <tr>
    <th>Remaining Critical Issues</th>
    <th>Critical ID</th>
    <th>Critical Issue</th>
    <th>Location Name</th>
    <th>Commentary & Feedback</th>
  </tr>
  {#each $state.criticalIssues.filter((x) => x.resolved != "Yes") as critical, i}
    <tr>
      <th>{i + 1}</th>
      <td>TODO ID</td>
      <td>
        {notNull(
          criticalIssueChoices.find(
            (pair) => pair[0] == critical.criticalIssue,
          ),
        )[1]}
      </td>
      <td>{critical.locationName}</td>
      <td>{critical.notes}</td>
    </tr>
  {/each}
</table>

<CheckDetails {results} />
