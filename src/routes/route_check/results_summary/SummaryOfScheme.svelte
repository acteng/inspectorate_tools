<script lang="ts">
  import { state } from "../data";
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

<style>
  th, td {
    border-top: 1px solid #b1b4b6;
  }
  th {
    width: 40vw;
  }
</style>
