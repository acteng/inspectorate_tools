<script lang="ts">
  import { Breadcrumbs, ExternalLink } from "$lib";
  import Question from "./Question.svelte";
  import { base } from "$app/paths";
  import { state } from "../data";

  // TODO Include bold in the choices

  $: totalExisting = sum($state.existingScores.map((x) => parseInt(x)));
  $: totalProposed = sum($state.proposedScores.map((x) => parseInt(x)));

  function sum(list: number[]): number {
    return list.reduce((total, x) => total + x, 0);
  }

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
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Area check tool", "/area_check"],
    ]}
    current="Area Scorecard"
  />

  <p>Total existing score: {totalExisting}</p>
  <p>Total proposed score: {totalProposed}</p>

  <ol>
    {#each questions as label, idx}
      <li>
        <a href="{base}/area_check/scorecard/q{formatIndex(idx)}">{label}</a>
      </li>
    {/each}
  </ol>
</div>
