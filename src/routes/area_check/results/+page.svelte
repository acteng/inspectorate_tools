<script lang="ts">
  import { state } from "../data";
  import { sum } from "$lib";
  import { TextArea } from "govuk-svelte";

  $: totalExisting = sum($state.existingScores.map((x) => parseInt(x || "0")));
  $: totalProposed = sum($state.proposedScores.map((x) => parseInt(x || "0")));
</script>

<div class="govuk-width-container">
  <h2>Traffic Mitigation Check Results</h2>

  <p>{$state.trafficMitigationCheck.notes}</p>

  <table>
    <caption class="govuk-table__caption govuk-table__caption--m">
      Area Scorecard Results
    </caption>
    <tr>
      <th>Existing Area Score</th>
      <th>Proposed Area Score</th>
      <th>Uplift</th>
    </tr>

    <tr>
      <td>{totalExisting}</td>
      <td>{totalProposed}</td>
      <td>{totalProposed - totalExisting}</td>
    </tr>
  </table>

  <TextArea
    label="Comments on Area Scorecard"
    bind:value={$state.resultsNotes}
  />
</div>
