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

<PrevNext {idx} total={26} urlPath="route_check/street_placemaking_check/sp" />
<h2>SP{idx.toString().padStart(2, "0")}: {label}</h2>
<slot />

<div class="columns">
  <div class="progress-column">
    <Progress currentIdx={idx} />
  </div>

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
</div>

<PrevNext {idx} total={26} urlPath="route_check/street_placemaking_check/sp" />

<style>
  .columns {
    display: flex;
    column-gap: 2rem;
  }

  .progress-column {
    width: 60rem;
  }
</style>
