<script lang="ts">
  import { Bar } from "svelte-chartjs";
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  import { netDifference, type ResultCategory } from "../results";
  import { colors } from "$lib/colors";

  export let caption: string;
  export let categories: ResultCategory[];
  export let overall: ResultCategory;
  export let overallLabel: string;
  export let barChart = false;

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  );
</script>

<div style="display: flex">
  <table style="width: 50%">
    <caption class="govuk-table__caption govuk-table__caption--m">
      {caption}
    </caption>
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

  <div style="width: 50%">
    {#if barChart}
      <Bar
        data={{
          labels: [...categories.map((x) => x.category), overallLabel],
          datasets: [
            {
              label: "Existing Layout",
              data: [...categories, overall].map(
                (x) => x.existing.scorePercent,
              ),
              backgroundColor: "#808080",
            },
            {
              label: "Net difference",
              data: [...categories, overall].map(
                (x) => x.proposed.scorePercent - x.existing.scorePercent,
              ),
              backgroundColor: colors.green.background,
            },
          ],
        }}
        options={{ indexAxis: "y", scales: { y: { stacked: true } } }}
      />
    {/if}
  </div>
</div>
