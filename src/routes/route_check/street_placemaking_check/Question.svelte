<script lang="ts">
  import { FancyRadio, PrevNext } from "$lib";
  import Progress from "./Progress.svelte";
  import { state } from "../data";
  import { scoreToColor } from "$lib/colors";

  export let idx: number;
  export let cases: ["0" | "1" | "2", string][];

  let choices: [string, string, string, string][] = cases.map(
    ([value, label]) => [
      value,
      label,
      scoreToColor[value].background,
      scoreToColor[value].font,
    ],
  );
</script>

<div class="govuk-grid-row" style="margin: 1em">
  <div class="govuk-grid-column-one-quarter">
    <Progress currentIdx={idx} />
  </div>

  <div class="govuk-grid-column-three-quarters">
    <PrevNext
      {idx}
      total={26}
      urlPath="route_check/street_placemaking_check/sp"
    />

    <slot />

    <FancyRadio
      {choices}
      bind:existingValue={$state.streetPlacemakingCheck.existingScores[idx - 1]}
      bind:proposedValue={$state.streetPlacemakingCheck.proposedScores[idx - 1]}
      bind:existingNotes={$state.streetPlacemakingCheck.existingScoreNotes[
        idx - 1
      ]}
      bind:proposedNotes={$state.streetPlacemakingCheck.proposedScoreNotes[
        idx - 1
      ]}
    />

    <PrevNext
      {idx}
      total={26}
      urlPath="route_check/street_placemaking_check/sp"
    />
  </div>
</div>
