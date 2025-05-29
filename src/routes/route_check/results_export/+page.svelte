<script lang="ts">
  import { criticalIssueId, policyConflictId } from "../dalog/da_log";
  import { state } from "../data";
  import { getFullCriticalIssue, getFullPolicyConflict } from "../lists";
  import { getResults } from "../results";
  import CheckDetails from "../results_analysis/CheckDetails.svelte";
  import PolicyCheckResults from "../results_analysis/PolicyCheckResults.svelte";
  import SafetyCheckResults from "../results_analysis/SafetyCheckResults.svelte";
  import SummaryOfScheme from "../results_analysis/SummaryOfScheme.svelte";
  import Overview from "../results_summary/Overview.svelte";
  import ConvertToXlsx from "./ConvertToXlsx.svelte";

  let results = getResults($state);
</script>

<div class="govuk-width-container">
  <ConvertToXlsx />

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
      <th>Latitude and Longitude</th>
      <th>Location Name</th>
      <th>Commentary & Feedback</th>
    </tr>
    {#each $state.policyConflictLog as conflict, i}
      {#if conflict.resolved != "Yes"}
        <tr>
          <th>{i + 1}</th>
          <td>{policyConflictId($state, i)}</td>
          <td>
            {getFullPolicyConflict(conflict.conflict)}
          </td>
          <td>{conflict.point[0]} , {conflict.point[1]}</td>
          <td>{conflict.locationName}</td>
          <td>{conflict.notes}</td>
        </tr>
      {/if}
    {/each}
  </table>

  <SafetyCheckResults />

  <table>
    <tr>
      <th>Remaining Critical Issues</th>
      <th>Critical ID</th>
      <th>Critical Issue</th>
      <th>Latitude and Longitude</th>
      <th>Location Name</th>
      <th>Commentary & Feedback</th>
    </tr>
    {#each $state.criticalIssues as critical, i}
      {#if critical.resolved != "Yes"}
        <tr>
          <th>{i + 1}</th>
          <td>{criticalIssueId($state, i)}</td>
          <td>
            {getFullCriticalIssue(critical.criticalIssue)}
          </td>
          <td>{critical.point[0]} , {critical.point[1]}</td>
          <td>{critical.locationName}</td>
          <td>{critical.notes}</td>
        </tr>
      {/if}
    {/each}
  </table>

  <CheckDetails {results} />
</div>
