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
  let unresolvedConflicts = $state.policyConflictLog.filter((conflict) => {
    return conflict.resolved != "Yes";
  });
  let unresolvedCriticals = $state.criticalIssues.filter((critical) => {
    return critical.resolved != "Yes";
  });
</script>

<div class="govuk-width-container">
  <ConvertToXlsx />

  <SummaryOfScheme />

  <Overview {results} />

  <h2>Review statement</h2>
  <p>{$state.resultsReviewStatement}</p>

  <PolicyCheckResults />

  {#if unresolvedConflicts.length > 0}
    <table>
      <tr>
        <th>Remaining Policy Conflicts</th>
        <th>Policy Conflict ID</th>
        <th>Policy Conflict</th>
        <th>Latitude and Longitude</th>
        <th>Location Name</th>
        <th>Commentary & Feedback</th>
      </tr>
      {#each unresolvedConflicts as conflict, i}
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
      {/each}
    </table>
  {/if}

  <SafetyCheckResults />

  {#if unresolvedCriticals.length > 0}
    <table>
      <tr>
        <th>Remaining Critical Issues</th>
        <th>Critical ID</th>
        <th>Critical Issue</th>
        <th>Latitude and Longitude</th>
        <th>Location Name</th>
        <th>Commentary & Feedback</th>
      </tr>
      {#each unresolvedCriticals as critical, i}
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
      {/each}
    </table>
  {/if}

  <CheckDetails {results} />
</div>
