<script lang="ts">
  import { FancyRadio, PrevNext } from "$lib";
  import Progress from "./Progress.svelte";
  import { state } from "../data";
  import { scoreToColor } from "$lib/colors";

  export let idx: number;
  export let label: string;
  export let cases: ["0" | "1" | "2" | "N/A", string][];

  let choices: [string, string, string, string][] = cases.map(
    ([value, label]) => [
      value,
      label,
      scoreToColor[value].background,
      scoreToColor[value].font,
    ],
  );
</script>

<PrevNext
  {idx}
  total={26}
  startIdx={17}
  urlPath="route_check/street_check/st"
/>

<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-third">
    <Progress currentIdx={idx} />
  </div>

  <div class="govuk-grid-column-two-thirds">
    <h2>ST{16 + idx}: {label}</h2>

    <slot />

    <FancyRadio
      {choices}
      bind:existingValue={$state.streetCheck.existingScores[idx - 1]}
      bind:proposedValue={$state.streetCheck.proposedScores[idx - 1]}
      bind:existingNotes={$state.streetCheck.existingScoreNotes[idx - 1]}
      bind:proposedNotes={$state.streetCheck.proposedScoreNotes[idx - 1]}
    />
  </div>
</div>

<PrevNext
  {idx}
  total={26}
  startIdx={17}
  urlPath="route_check/street_check/st"
/>
