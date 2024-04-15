<script lang="ts">
  import { Breadcrumbs, FancyRadio, PrevNext } from "$lib";
  import Progress from "./Progress.svelte";
  import { TextArea } from "govuk-svelte";
  import { state } from "../data";
  import { greenAmberRed } from "$lib/colors";

  export let idx: number;
  export let label: string;
  export let cases: ["0" | "1" | "2", string][];

  let choices: [string, string, string, string][] = cases.map(
    ([value, label], index) => [
      value.toString(),
      label,
      greenAmberRed[index].background,
      greenAmberRed[index].font,
    ],
  );
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Route check tool", "/route_check"],
      ["Street Check", "/route_check/street_placemaking_check"],
    ]}
    current={label}
  />

  <PrevNext
    {idx}
    total={26}
    urlPath="route_check/street_placemaking_check/sp"
  />
  <h2>{label}</h2>
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

  <PrevNext
    {idx}
    total={26}
    urlPath="route_check/street_placemaking_check/sp"
  />
</div>

<style>
  .columns {
    display: flex;
    column-gap: 2rem;
  }

  .progress-column {
    width: 60rem;
  }
</style>
