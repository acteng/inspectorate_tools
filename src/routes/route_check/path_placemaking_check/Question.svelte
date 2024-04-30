<script lang="ts">
  import { FancyRadio, PrevNext } from "$lib";
  import Progress from "./Progress.svelte";
  import { state } from "../data";
  import { scoreToColor } from "$lib/colors";

  export let idx: number;
  export let label: string;
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

<PrevNext {idx} total={19} urlPath="route_check/path_placemaking_check/pp" />

<div class="govuk-grid-row" style="margin: 1em">
  <div class="govuk-grid-column-one-quarter">
    <Progress currentIdx={idx} />
  </div>

  <div class="govuk-grid-column-three-quarters">
    <h2>PP{idx.toString().padStart(2, "0")}: {label}</h2>

    <slot />

    <FancyRadio
      {choices}
      bind:existingValue={$state.pathPlacemakingCheck.existingScores[idx - 1]}
      bind:proposedValue={$state.pathPlacemakingCheck.proposedScores[idx - 1]}
      bind:existingNotes={$state.pathPlacemakingCheck.existingScoreNotes[
        idx - 1
      ]}
      bind:proposedNotes={$state.pathPlacemakingCheck.proposedScoreNotes[
        idx - 1
      ]}
    />
  </div>
</div>

<PrevNext {idx} total={19} urlPath="route_check/path_placemaking_check/pp" />
