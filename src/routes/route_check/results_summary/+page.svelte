<script lang="ts">
  import { base } from "$app/paths";
  import { TextArea } from "govuk-svelte";
  import { sum } from "$lib";
  import { state, type Scorecard, numericScore } from "../data";
  import LevelOfServiceRow from "./LevelOfServiceRow.svelte";

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

  // TODO Move to a .ts file, calculate a summaty, then make some views on it
  // Returns [existing, proposed] total score as a percentage
  function scoreDifference(scorecard: Scorecard): [number, number] {
    let numberMetrics = scorecard.existingScores.filter(
      (x) => x != "N/A",
    ).length;
    // For safety, the scores are multiplied by 3 (or 6
    let maxScore = numberMetrics * 6;

    let existingScore = 3 * sum(scorecard.existingScores.map(numericScore));
    let proposedScore = 3 * sum(scorecard.proposedScores.map(numericScore));
    return [(existingScore / maxScore) * 100, (proposedScore / maxScore) * 100];
  }
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
    <th>
      <a href="{base}/route_check/critical_issues_log">Policy Conflicts</a>
    </th>
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
    <th>
      <a href="{base}/route_check/critical_issues_log">Critical Issues</a>
    </th>
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
    <th><a href="{base}/route_check/safety_check">Safety Check</a></th>
    <td>{yesNo(safetyCheckComplete)}</td>
    <td>
      {Math.round(
        scoreDifference($state.safetyCheck)[1] -
          scoreDifference($state.safetyCheck)[0],
      )}%
    </td>
    <td>TODO</td>
  </tr>

  <tr>
    {#if $state.summary.checkType == "street"}
      <th><a href="{base}/route_check/street_check">Street Check</a></th>
      <td>{yesNo(isScorecardCompleted($state.streetCheck))}</td>
      <td>TODO</td>
      <td>TODO</td>
    {:else}
      <th>Street Check</th>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    {/if}
  </tr>

  <tr>
    {#if $state.summary.checkType == "street"}
      <th>
        <a href="{base}/route_check/street_placemaking_check">
          Street Placemaking
        </a>
      </th>
      <td>{yesNo(isScorecardCompleted($state.streetPlacemakingCheck))}</td>
      <td>TODO</td>
      <td>TODO</td>
    {:else}
      <th>Street Placemaking</th>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    {/if}
  </tr>

  <tr>
    {#if $state.summary.checkType == "path"}
      <th><a href="{base}/route_check/path_check">Path Check</a></th>
      <td>{yesNo(isScorecardCompleted($state.pathCheck))}</td>
      <td>TODO</td>
      <td>TODO</td>
    {:else}
      <th>Path Check</th>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    {/if}
  </tr>

  <tr>
    {#if $state.summary.checkType == "path"}
      <th>
        <a href="{base}/route_check/path_placemaking_check">Path Placemaking</a>
      </th>
      <td>{yesNo(isScorecardCompleted($state.pathPlacemakingCheck))}</td>
      <td>TODO</td>
      <td>TODO</td>
    {:else}
      <th>Path Placemaking</th>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    {/if}
  </tr>

  <tr>
    <th>
      <a href="{base}/route_check/jat_check">Junction Assessment Tool Check</a>
    </th>
    <td>TODO</td>
    <td>TODO</td>
    <td>TODO</td>
  </tr>
</table>

<h2>Street Check Level of Service</h2>

<table>
  <tr>
    <th>Categories</th>
    <th>Existing Layout</th>
    <th>Proposed Layout</th>
    <th>Net difference</th>
  </tr>

  <LevelOfServiceRow category="Safety" scorecard={$state.safetyCheck} />
  <LevelOfServiceRow
    category="Accessibility"
    scorecard={$state.streetCheck}
    range={[0, 6]}
  />
  <LevelOfServiceRow
    category="Comfort"
    scorecard={$state.streetCheck}
    range={[7, 9]}
  />
  <LevelOfServiceRow
    category="Directness"
    scorecard={$state.streetCheck}
    range={[10, 15]}
  />
  <LevelOfServiceRow
    category="Attractiveness"
    scorecard={$state.streetCheck}
    range={[16, 21]}
  />
  <LevelOfServiceRow
    category="Cohesion"
    scorecard={$state.streetCheck}
    range={[22, 25]}
  />
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
