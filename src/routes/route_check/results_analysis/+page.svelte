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
</script>

<h2>1. Summary of Scheme</h2>
<table>
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

<h2>2. Policy Check Results</h2>
<table>
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

<h2>3. Safety Check Results (Critical Issues only)</h2>
<table>
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

<h3>Street Level of Service</h3>
<LevelOfServiceTable
  categories={results.levelOfService}
  overall={results.overall}
  overallLabel="Overall Street Level of Service"
/>

<h3>Street Level of Service by Transport Mode</h3>

<h3>Street Placemaking</h3>

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
