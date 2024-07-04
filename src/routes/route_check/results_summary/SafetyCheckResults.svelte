<script lang="ts">
  import { state } from "../data";

  let criticalIssues = {
    existing: $state.criticalIssues.filter((x) => x.stage == "Existing").length,
    designed: $state.criticalIssues.filter((x) => x.stage == "Design").length,
    removed: $state.criticalIssues.filter((x) => x.resolved == "Yes").length,
  };
</script>

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
