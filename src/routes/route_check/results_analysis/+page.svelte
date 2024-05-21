<script lang="ts">
  import { state } from "../data";
  import { getResults } from "../results";
  import LevelOfServiceTable from "../results_summary/LevelOfServiceTable.svelte";

  let results = getResults($state);

  let policyConflicts = {
    existing: $state.policyConflictLog.filter((x) => x.stage == "Existing")
      .length,
    designed: $state.policyConflictLog.filter((x) => x.stage == "Design")
      .length,
    removed: $state.policyConflictLog.filter((x) => x.resolved == "Yes").length,
  };
  let criticalIssues = {
    existing: $state.criticalIssues.filter((x) => x.stage == "Existing").length,
    designed: $state.criticalIssues.filter((x) => x.stage == "Design").length,
    removed: $state.criticalIssues.filter((x) => x.resolved == "Yes").length,
  };

  function percent(x: number | null): string {
    return x == null ? "Not Completed" : `${x}%`;
  }
</script>

<table>
  <caption class="govuk-table__caption govuk-table__caption--m">
    1. Summary of Scheme
  </caption>
  <tr>
    <th>Scheme Name</th>
    <td>{$state.summary.schemeName}</td>
  </tr>
  <tr>
    <th>Scheme Reference</th>
    <td>{$state.summary.schemeReference}</td>
  </tr>
  <tr>
    <th>Local Authority</th>
    <td>{$state.summary.authority}</td>
  </tr>
  <tr>
    <th>Design Stage</th>
    <td>{$state.summary.designStage}</td>
  </tr>
  <tr>
    <th>Route Length Assessed in this File (km)</th>
    <td>{$state.summary.assessedRouteLengthKm}</td>
  </tr>
</table>

<table>
  <caption class="govuk-table__caption govuk-table__caption--m">
    2. Policy Check Results
  </caption>
  <tr>
    <th rowspan="2">Potential Policy Conflicts</th>
    <th>Existing Route</th>
    <th>Designed Route</th>
    <th>Removed</th>
    <th>Introduced</th>
    <th>Remaining</th>
  </tr>
  <tr>
    <td>{policyConflicts.existing}</td>
    <td>{policyConflicts.designed}</td>
    <td>{policyConflicts.removed}</td>
    <td>{policyConflicts.designed}</td>
    <td>
      {policyConflicts.designed +
        policyConflicts.existing -
        policyConflicts.removed}
    </td>
  </tr>
</table>

<table>
  <caption class="govuk-table__caption govuk-table__caption--m">
    3. Safety Check Results (Critical Issues only)
  </caption>
  <tr>
    <th rowspan="2">Critical Issues</th>
    <th>Existing Route</th>
    <th>Designed Route</th>
    <th>Removed</th>
    <th>Introduced</th>
    <th>Remaining</th>
  </tr>
  <tr>
    <td>{criticalIssues.existing}</td>
    <td>{criticalIssues.designed}</td>
    <td>{criticalIssues.removed}</td>
    <td>{criticalIssues.designed}</td>
    <td>
      {criticalIssues.designed +
        criticalIssues.existing -
        criticalIssues.removed}
    </td>
  </tr>
</table>

<h2>4. Street Check Results</h2>
{#if $state.summary.checkType == "street"}
  <LevelOfServiceTable
    caption="Street Level of Service"
    categories={results.levelOfService}
    overall={results.overall}
    overallLabel="Overall Street Level of Service"
  />

  <LevelOfServiceTable
    caption="Street Level of Service by Transport Mode"
    categories={results.byMode}
    overall={results.overall}
    overallLabel="Overall Street Level of Service"
  />

  <LevelOfServiceTable
    caption="Street Placemaking"
    categories={results.placemakingCategories}
    overall={results.placemakingOverall}
    overallLabel="Overall Street Placemaking Score"
  />
{:else}
  <p>This isn't a Street Check</p>
{/if}

<h2>5. Path Check Results</h2>
{#if $state.summary.checkType == "path"}
  <LevelOfServiceTable
    caption="Path Level of Service"
    categories={results.levelOfService}
    overall={results.overall}
    overallLabel="Overall Path Level of Service"
  />

  <LevelOfServiceTable
    caption="Path Level of Service by Transport Mode"
    categories={results.byMode}
    overall={results.overall}
    overallLabel="Overall Path Level of Service"
  />

  <LevelOfServiceTable
    caption="Path Placemaking"
    categories={results.placemakingCategories}
    overall={results.placemakingOverall}
    overallLabel="Overall Path Placemaking Score"
  />
{:else}
  <p>This isn't a Path Check</p>
{/if}

<table>
  <caption class="govuk-table__caption govuk-table__caption--m">
    6. Junction Assessment Tool Check
  </caption>
  <tr>
    <th>Junction Name</th>
    <th>Modes</th>
    <th>Existing Layout</th>
    <th>Proposed Layout</th>
    <th>Net difference</th>
  </tr>

  {#each results.jat as result}
    <tr>
      <th rowspan="3">{result.name || "Untitled junction"}</th>
      <th>Walking & Wheeling</th>
      <td>{percent(result.walkingWheeling.existing)}</td>
      <td>{percent(result.walkingWheeling.proposed)}</td>
      <td>{percent(result.walkingWheeling.netDifference)}</td>
    </tr>
    <tr>
      <th>Cycling</th>
      <td>{percent(result.cycling.existing)}</td>
      <td>{percent(result.cycling.proposed)}</td>
      <td>{percent(result.cycling.netDifference)}</td>
    </tr>
    <tr>
      <th><b>All</b></th>
      <td>{percent(result.total.existing)}</td>
      <td>{percent(result.total.proposed)}</td>
      <td>{percent(result.total.netDifference)}</td>
    </tr>
  {/each}
</table>

TODO: overall JAT
