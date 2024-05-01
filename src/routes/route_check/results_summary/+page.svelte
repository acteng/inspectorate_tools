<script lang="ts">
  import { TextArea } from "govuk-svelte";
  import { sum } from "$lib";
  import { state, type Scorecard, numericScore } from "../data";

  let policyCheckComplete = $state.policyCheck.every(
    (x) => x.existing != "" && x.proposed != "",
  );
  let incompletePolicyConflicts = $state.policyConflictLog.filter(
    (x) => x.resolved != "Yes",
  ).length;

  // TODO Also looks at critical log
  let safetyCheckComplete = isScorecardCompleted($state.safetyCheck);
  let incompleteCriticalIssues = $state.criticalIssues.filter(
    (x) => x.resolved != "Yes",
  ).length;

  function yesNo(x: boolean): string {
    return x ? "Yes" : "No";
  }

  function isScorecardCompleted(scorecard: Scorecard): boolean {
    return (
      !scorecard.existingScores.includes("") &&
      !scorecard.proposedScores.includes("")
    );
  }

  /*function getScorecardDifference(scorecard: Scorecard): number {
    let existing = sum(scorecard.existingScores.map(numericScore));
    let proposed = sum(scorecard.proposedScores.map(numericScore));
    return proposed - existing;
  }*/
</script>

<h2>Overview</h2>

<table>
  <tr>
    <th></th>
    <th>Complete</th>
    <th>Remaining issues for review</th>
    <th>Next steps</th>
  </tr>

  <tr>
    <th>Policy Conflicts</th>
    <td>{yesNo(policyCheckComplete)}</td>
    <td>{incompletePolicyConflicts}</td>
    <td>
      {#if !policyCheckComplete}
        Complete Policy Check and Policy Conflict Log
      {:else if incompletePolicyConflicts > 0}
        View Comments in Policy Check and Policy Conflict Log tabs
      {:else}
        No further action
      {/if}
    </td>
  </tr>

  <tr>
    <th>Critical Issues</th>
    <td>{yesNo(safetyCheckComplete)}</td>
    <td>{incompleteCriticalIssues}</td>
    <td>
      {#if !safetyCheckComplete}
        Complete Safety Check and Critical Issues Log
      {:else if incompleteCriticalIssues > 0}
        View Comments in Critical Issues Log
      {:else}
        No further action
      {/if}
    </td>
  </tr>

  <tr>
    <th></th>
    <th>Complete</th>
    <th>Net difference</th>
    <th>Next steps</th>
  </tr>

  <tr>
    <th>Safety Check</th>
    <td>{yesNo(safetyCheckComplete)}</td>
    <td>TODO</td>
    <td>TODO</td>
  </tr>

  <tr>
    <th>Street Check</th>
    {#if $state.summary.checkType == "street"}
      <td>{yesNo(isScorecardCompleted($state.streetCheck))}</td>
      <td>TODO</td>
      <td>TODO</td>
    {:else}
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    {/if}
  </tr>

  <tr>
    <th>Street Placemaking</th>
    {#if $state.summary.checkType == "street"}
      <td>{yesNo(isScorecardCompleted($state.streetPlacemakingCheck))}</td>
      <td>TODO</td>
      <td>TODO</td>
    {:else}
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    {/if}
  </tr>

  <tr>
    <th>Path Check</th>
    {#if $state.summary.checkType == "path"}
      <td>{yesNo(isScorecardCompleted($state.pathCheck))}</td>
      <td>TODO</td>
      <td>TODO</td>
    {:else}
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    {/if}
  </tr>

  <tr>
    <th>Path Placemaking</th>
    {#if $state.summary.checkType == "path"}
      <td>{yesNo(isScorecardCompleted($state.pathPlacemakingCheck))}</td>
      <td>TODO</td>
      <td>TODO</td>
    {:else}
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    {/if}
  </tr>

  <tr>
    <th>Junction Assessment Tool Check</th>
    <td>TODO</td>
    <td>TODO</td>
    <td>TODO</td>
  </tr>
</table>

<!-- TODO Hint: "Use the space to provide overall feedback for the proposed scheme" -->
<TextArea label="Review statement" bind:value={$state.resultsReviewStatement} />

<style>
  td {
    border: 1px solid black;
    padding: 4px;
  }

  th {
    background: #006853;
    color: white;
  }
</style>
