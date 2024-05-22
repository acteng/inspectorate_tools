<script lang="ts">
  import { base } from "$app/paths";
  import { TextArea } from "govuk-svelte";
  import { state, type Scorecard } from "../data";
  import { getResults, netDifference, type ResultCategory } from "../results";
  import LevelOfServiceTable from "./LevelOfServiceTable.svelte";

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

  function improveOrReduce(x: ResultCategory, topic: string): string {
    // Note Excel treats the same scores as "worse" -- fixing here
    if (x.proposed.scorePercent >= x.existing.scorePercent) {
      return `The proposed design will likely improve ${topic}`;
    } else {
      return `The proposed design will likely reduce ${topic}`;
    }
  }
</script>

<table>
  <caption class="govuk-table__caption govuk-table__caption--m">
    Overview
  </caption>
  <tr>
    <th></th>
    <th>Complete</th>
    <th>Remaining issues for review</th>
    <th>Next steps</th>
  </tr>

  <tr>
    <th>
      <a href="{base}/route_check/problems_map">Policy Conflicts</a>
    </th>
    <td>{yesNo(policyCheckComplete)}</td>
    <td>{incompletePolicyConflicts}</td>
    <td>
      {#if !policyCheckComplete}
        Complete Policy Check and Policy Conflict Log
      {:else if incompletePolicyConflicts > 0}
        View Comments in Policy Check and Policy Conflict Log
      {:else}
        No further action
      {/if}
    </td>
  </tr>

  <tr>
    <th>
      <a href="{base}/route_check/problems_map">Critical Issues</a>
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
    <td>{netDifference(results.safetyCheck)}</td>
    <td>{improveOrReduce(results.safetyCheck, "safety")}</td>
  </tr>

  <tr>
    {#if $state.summary.checkType == "street"}
      <th><a href="{base}/route_check/street_check">Street Check</a></th>
      <td>{yesNo(isScorecardCompleted($state.streetCheck))}</td>
      <td>{netDifference(results.overall)}</td>
      <td>{improveOrReduce(results.overall, "the route quality")}</td>
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
      <td>{netDifference(results.placemakingOverall)}</td>
      <td>
        {improveOrReduce(results.placemakingOverall, "the quality of place")}
      </td>
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
      <td>{netDifference(results.overall)}</td>
      <td>{improveOrReduce(results.overall, "the path quality")}</td>
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
      <td>{netDifference(results.placemakingOverall)}</td>
      <td>
        {improveOrReduce(results.placemakingOverall, "the quality of place")}
      </td>
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
    {#if results.jat[results.jat.length - 1].total.netDifference == null}
      <td>No</td>
      <td>N/A</td>
      <td>N/A</td>
    {:else}
      <td>Yes</td>
      <td>{results.jat[results.jat.length - 1].total.netDifference}%</td>
      <td>Review Junction Assessment</td>
    {/if}
  </tr>
</table>

{#if $state.summary.checkType == "street"}
  <LevelOfServiceTable
    caption="Street Check Level of Service"
    categories={results.levelOfService}
    overall={results.overall}
    overallLabel="Overall ATE Score"
  />
{:else if $state.summary.checkType == "path"}
  <LevelOfServiceTable
    caption="Path Check Level of Service"
    categories={results.levelOfService}
    overall={results.overall}
    overallLabel="Overall ATE Score"
  />
{:else}
  <h2>Select Street Check or Path Check for further results</h2>
{/if}

<!-- TODO Hint: "Use the space to provide overall feedback for the proposed scheme" -->
<TextArea label="Review statement" bind:value={$state.resultsReviewStatement} />
