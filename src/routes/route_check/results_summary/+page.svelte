<script lang="ts">
  import { base } from "$app/paths";
  import { TextArea } from "govuk-svelte";
  import { sum } from "$lib";
  import { state, type Scorecard } from "../data";
  import { getResults } from "./results";

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

  let results = getResults($state);

  function yesNo(x: boolean): string {
    return x ? "Yes" : "No";
  }

  function isScorecardCompleted(scorecard: Scorecard): boolean {
    return (
      !scorecard.existingScores.includes("") &&
      !scorecard.proposedScores.includes("")
    );
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
    <td>TODO</td>
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

{#if $state.summary.checkType == "street"}
  <h2>Street Check Level of Service</h2>
{:else if $state.summary.checkType == "path"}
  <h2>Path Check Level of Service</h2>
{:else}
  <h2>Select Street Check or Path Check to calculate the table below</h2>
{/if}

<table>
  <tr>
    <th>Categories</th>
    <th>Existing Layout</th>
    <th>Proposed Layout</th>
    <th>Net difference</th>
  </tr>

  {#each results.categories as x}
    <tr>
      <th>{x.category}</th>
      <td>{Math.round(x.existing.scorePercent)}%</td>
      <td>{Math.round(x.proposed.scorePercent)}%</td>
      <td>{Math.round(x.proposed.scorePercent - x.existing.scorePercent)}%</td>
    </tr>
  {/each}

  <tr>
    <th>&nbsp;</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>

  <tr>
    <th>Overall ATE Score</th>
    <td>{Math.round(results.overall.existing.scorePercent)}%</td>
    <td>{Math.round(results.overall.proposed.scorePercent)}%</td>
    <td>
      {Math.round(
        results.overall.proposed.scorePercent -
          results.overall.existing.scorePercent,
      )}%
    </td>
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
