<script lang="ts">
  import { state } from "../data";
  import { type Results } from "../results";
  import LevelOfServiceTable from "../results_summary/LevelOfServiceTable.svelte";

  export let results: Results;

  function percent(x: number | null): string {
    return x == null ? "Not Completed" : `${x}%`;
  }
</script>

<h2>4. Street Check Results</h2>
{#if $state.summary.checkType == "street"}
  <hr />

  <LevelOfServiceTable
    caption="Street Level of Service"
    categories={results.levelOfService}
    overall={results.overall}
    overallLabel="Overall Street Level of Service"
    radarChart
  />

  <LevelOfServiceTable
    caption="Street Level of Service by Transport Mode"
    categories={results.byMode}
    overall={results.overall}
    overallLabel="Overall Street Level of Service"
    barChart
  />

  <LevelOfServiceTable
    caption="Street Placemaking"
    categories={results.placemakingCategories}
    overall={results.placemakingOverall}
    overallLabel="Overall Street Placemaking Score"
    barChart
  />
{:else}
  <p>This isn't a Street Check</p>
{/if}

<h2>5. Path Check Results</h2>
{#if $state.summary.checkType == "path"}
  <hr />

  <LevelOfServiceTable
    caption="Path Level of Service"
    categories={results.levelOfService}
    overall={results.overall}
    overallLabel="Overall Path Level of Service"
    radarChart
  />

  <LevelOfServiceTable
    caption="Path Level of Service by Transport Mode"
    categories={results.byMode}
    overall={results.overall}
    overallLabel="Overall Path Level of Service"
    barChart
    excludeCategory={$state.horseRiders == "No" ? "Horse Riding" : null}
  />

  <LevelOfServiceTable
    caption="Path Placemaking"
    categories={results.placemakingCategories}
    overall={results.placemakingOverall}
    overallLabel="Overall Path Placemaking Score"
    barChart
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
    {#if result.name == "Overall"}
      <tr>
        <th colspan="6"></th>
      </tr>
    {/if}

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
