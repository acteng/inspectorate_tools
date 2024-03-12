<script lang="ts">
  import { state, type State } from "../data";
  import { base } from "$app/paths";

  export let currentIdx: number;

  let questions = [
    "Porosity - Walking and Wheeling",
    "Porosity - Cycling",
    "Crossings - Walking and Wheeling",
    "Crossings - Cycling",
    "Permeability - Walking and Wheeling",
    "Permeability - Cycling",
    "Mesh Density - Walking and Wheeling",
    "Mesh Density - Cycling",
    "Motorised Through-Traffic",
    "Perimeter Treatment Design",
    "Green Infrastructure Design",
    "Other Internal Treatment Design",
    "Engagement Practice",
  ];

  function formatIndex(idx: number): string {
    return (idx + 1).toString().padStart(2, "0");
  }

  $: completed = getCompleted($state);
  function getCompleted(_: State): boolean[] {
    return Array.from(Array(questions.length).keys()).map(
      (idx) =>
        $state.existingScores[idx] != "" && $state.proposedScores[idx] != "",
    );
  }

  $: totalExisting = sum($state.existingScores.map((x) => parseInt(x || "0")));
  $: totalProposed = sum($state.proposedScores.map((x) => parseInt(x || "0")));

  function sum(list: number[]): number {
    return list.reduce((total, x) => total + x, 0);
  }
</script>

<p>Total existing score: {totalExisting}</p>
<p>Total proposed score: {totalProposed}</p>

<ol>
  {#each questions as label, idx}
    <li>
      <div style="display: flex; justify-content: space-between">
        {#if currentIdx - 1 != idx}
          <a href="{base}/area_check/scorecard/q{formatIndex(idx)}">{label}</a>
        {:else}
          {label}
        {/if}
        {#if completed[idx]}
          <strong class="govuk-tag govuk-tag--green">Done</strong>
        {:else}
          <strong class="govuk-tag govuk-tag--red">Incomplete</strong>
        {/if}
      </div>
    </li>
  {/each}
</ol>
