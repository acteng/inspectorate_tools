<script lang="ts">
  import { FancyRadio, PrevNext } from "$lib";
  import Progress from "./Progress.svelte";
  import { state } from "../data";
  import { scoreToColor } from "$lib/colors";
  import { base } from "$app/paths";

  export let idx: number;
  export let label: string;
  export let cases: ["C" | "0" | "1" | "2" | "N/A", string][];

  let choices: [string, string, string, string][] = cases.map(
    ([value, label]) => [
      value,
      label,
      scoreToColor[value].background,
      scoreToColor[value].font,
    ],
  );
</script>

<PrevNext {idx} total={16} urlPath="route_check/safety_check/sa" />

<div class="govuk-grid-row" style="margin: 1em">
  <div class="govuk-grid-column-one-quarter">
    <Progress currentIdx={idx} />
  </div>

  <div class="govuk-grid-column-three-quarters">
    <h2>SA{idx.toString().padStart(2, "0")}: {label}</h2>

    <slot />

    <FancyRadio
      {choices}
      bind:existingValue={$state.safetyCheck.existingScores[idx - 1]}
      bind:proposedValue={$state.safetyCheck.proposedScores[idx - 1]}
      bind:existingNotes={$state.safetyCheck.existingScoreNotes[idx - 1]}
      bind:proposedNotes={$state.safetyCheck.proposedScoreNotes[idx - 1]}
    />

    {#if $state.safetyCheck.existingScores[idx - 1] == "C" || $state.safetyCheck.proposedScores[idx - 1] == "C"}
      <p>
        <a href="{base}/route_check/problems_map">Log this critical issue</a>
      </p>
    {/if}
  </div>
</div>

<PrevNext {idx} total={16} urlPath="route_check/safety_check/sa" />
