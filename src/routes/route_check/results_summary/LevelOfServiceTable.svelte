<script lang="ts">
  import { Bar, Radar } from "svelte-chartjs";
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    RadialLinearScale,
    LineElement,
  } from "chart.js";
  import { netDifference, type ResultCategory } from "../results";

  export let caption: string;
  export let categories: ResultCategory[];
  export let overall: ResultCategory;
  export let overallLabel: string;
  export let barChart = false;
  export let radarChart = false;

  let midBlue = "#007dbb";
  let darkGrey = "#808080";

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    RadialLinearScale,
    LineElement,
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

  <div style="width: 50%; padding: 16px;">
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
              backgroundColor: darkGrey,
            },
            {
              label: "Proposed Layout",
              data: [...categories, overall].map(
                (x) => x.proposed.scorePercent,
              ),
              backgroundColor: midBlue,
            },
          ],
        }}
        options={{ indexAxis: "y", scales: { y: { stacked: true } } }}
      />
    {:else if radarChart}
      <Radar
        data={{
          labels: [...categories.map((x) => x.category), overallLabel],
          datasets: [
            {
              label: "Existing Layout",
              data: [...categories, overall].map(
                (x) => x.existing.scorePercent,
              ),
              borderColor: darkGrey,
              backgroundColor: darkGrey,
            },
            {
              label: "Proposed Layout",
              data: [...categories, overall].map(
                (x) => x.proposed.scorePercent,
              ),
              borderColor: midBlue,
              backgroundColor: midBlue,
            },
          ],
        }}
      />
    {/if}
  </div>
</div>

<hr />
