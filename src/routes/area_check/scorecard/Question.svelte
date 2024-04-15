<script lang="ts">
  import { Breadcrumbs, FancyRadio, PrevNext } from "$lib";
  import Progress from "./Progress.svelte";
  import { TextArea } from "govuk-svelte";
  import { state } from "../data";

  export let idx: number;
  export let label: string;
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

  let choices: [string, string, string][] = cases.map(
    ([value, label], index) => [
      value.toString(),
      label,
      backgroundColors[index],
      fontColors[index],
    ],
  );
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Area check tool", "/area_check"],
      ["Area Scorecard", "/area_check/scorecard"],
    ]}
    current={label}
  />

  <PrevNext {idx} total={13} urlPath="area_check/scorecard/q" />
  <h2>{label}</h2>
  <slot />

  <div class="three-columns">
    <div>
      <Progress currentIdx={idx} />
    </div>

    <FancyRadio
      {choices}
      bind:existingValue={$state.existingScores[idx - 1]}
      bind:proposedValue={$state.proposedScores[idx - 1]}
      bind:existingNotes={$state.existingScoreNotes[idx - 1]}
      bind:proposedNotes={$state.proposedScoreNotes[idx - 1]}
    />
  </div>

  <PrevNext {idx} total={13} urlPath="area_check/scorecard/q" />
</div>

<style>
  .three-columns {
    display: flex;
    column-gap: 2rem;
  }

  .three-columns > * {
    width: calc((100% - 4rem) / 3);
  }
</style>
