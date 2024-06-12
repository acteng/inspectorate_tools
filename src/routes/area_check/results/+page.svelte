<script lang="ts">
  import { state, currentFile } from "../data";
  import { sum } from "$lib";
  import { SecondaryButton, TextArea } from "govuk-svelte";
  import { downloadExcelFile } from "./export";

  $: totalExisting = sum($state.existingScores.map((x) => parseInt(x || "0")));
  $: totalProposed = sum($state.proposedScores.map((x) => parseInt(x || "0")));

  async function download() {
    try {
      await downloadExcelFile($state, $currentFile);
    } catch (err) {
      window.alert(`Conversion failed: ${err}`);
    }
  }
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

<SecondaryButton on:click={download}>
  Convert to .xlsx (takes a few seconds)
</SecondaryButton>
<p>
  <i>
    When you open the file, you need to force Excel to recalculate all formulas
    with Ctrl + Alt + F9
  </i>
</p>
