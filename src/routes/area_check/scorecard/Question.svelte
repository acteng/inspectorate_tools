<script lang="ts">
  import { FancyRadio, PrevNext } from "$lib";
  import { state } from "../data";
  import Progress from "./Progress.svelte";

  export let idx: number;
  export let cases: [number, string][];

  // Note these are different than the ones used in route check
  let backgroundColors = [
    "#00b050",
    "#99cc00",
    "#ffc000",
    "#ff5050",
    "#ff0000",
  ];
  let fontColors = ["white", "black", "black", "black", "white"];

  let choices: [string, string, string, string][] = cases.map(
    ([value, label], index) => [
      value.toString(),
      label,
      backgroundColors[index],
      fontColors[index],
    ],
  );
</script>

<div class="govuk-grid-row" style="margin: 1em">
  <div class="govuk-grid-column-one-quarter">
    <Progress currentIdx={idx} />
  </div>

  <div class="govuk-grid-column-three-quarters">
    <PrevNext {idx} total={13} urlPath="area_check/scorecard/q" />

    <slot />

    <FancyRadio
      {choices}
      bind:existingValue={$state.existingScores[idx - 1]}
      bind:proposedValue={$state.proposedScores[idx - 1]}
      bind:existingNotes={$state.existingScoreNotes[idx - 1]}
      bind:proposedNotes={$state.proposedScoreNotes[idx - 1]}
    />

    <PrevNext {idx} total={13} urlPath="area_check/scorecard/q" />
  </div>
</div>
