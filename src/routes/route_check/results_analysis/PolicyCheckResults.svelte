<script lang="ts">
  import { state } from "../data";

  let policyConflicts = {
    existing: $state.policyConflictLog.filter((x) => x.stage == "Existing")
      .length,
    designed: $state.policyConflictLog.filter((x) => x.stage == "Design")
      .length,
    removed: $state.policyConflictLog.filter((x) => x.resolved == "Yes").length,
  };
</script>

<table>
  <caption class="govuk-table__caption govuk-table__caption--m">
    2. Policy Check Results
  </caption>
  <tr>
    <th rowspan="2">Policy Conflicts</th>
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
