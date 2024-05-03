<script lang="ts">
  import { netDifference, type ResultCategory } from "../results";

  export let categories: ResultCategory[];
  export let overall: ResultCategory;
  export let overallLabel: string;
</script>

<table>
  <tr>
    <th>Categories</th>
    <th>Existing Layout</th>
    <th>Proposed Layout</th>
    <th>Net difference</th>
  </tr>

  {#each categories as x}
    <tr>
      <th>{x.category}</th>
      <td>{Math.round(x.existing.scorePercent)}%</td>
      <td>{Math.round(x.proposed.scorePercent)}%</td>
      <td>{netDifference(x)}</td>
    </tr>
  {/each}

  <tr>
    <th>&nbsp;</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>

  <tr>
    <th>{overallLabel}</th>
    <td>{Math.round(overall.existing.scorePercent)}%</td>
    <td>{Math.round(overall.proposed.scorePercent)}%</td>
    <td>{netDifference(overall)}</td>
  </tr>
</table>

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
