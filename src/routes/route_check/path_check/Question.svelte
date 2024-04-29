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

<PrevNext {idx} total={30} startIdx={17} urlPath="route_check/path_check/pa" />
<h2>PA{16 + idx}: {label}</h2>
<slot />

<div class="columns">
  <div class="progress-column">
    <Progress currentIdx={idx} />
  </div>

  <FancyRadio
    {choices}
    bind:existingValue={$state.pathCheck.existingScores[idx - 1]}
    bind:proposedValue={$state.pathCheck.proposedScores[idx - 1]}
    bind:existingNotes={$state.pathCheck.existingScoreNotes[idx - 1]}
    bind:proposedNotes={$state.pathCheck.proposedScoreNotes[idx - 1]}
  />
</div>

<PrevNext {idx} total={30} startIdx={17} urlPath="route_check/path_check/pa" />

<style>
  .columns {
    display: flex;
    column-gap: 2rem;
  }

  .progress-column {
    width: 60rem;
  }
</style>
