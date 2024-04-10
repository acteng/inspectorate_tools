<script lang="ts">
  import { Breadcrumbs, FancyRadio, PrevNext } from "$lib";
  import Progress from "./Progress.svelte";
  import { TextArea } from "govuk-svelte";
  import { state } from "../data";
  import { redAmberGreen } from "$lib/colors";

  export let idx: number;
  export let label: string;
  export let cases: ["0" | "1" | "2", string][];


  let choices: [string, string, string][] = cases.map(
    ([value, label], index) => [
      value.toString(),
      label,
      redAmberGreen[index].background,
      redAmberGreen[index].font,
    ],
  );
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Route check tool", "/route_check"],
      ["Path Placemaking Check", "/route_check/path_placemaking_check"],
    ]}
    current={label}
  />

  <PrevNext {idx} total={19} urlPath="route_check/path_placemaking_check/pp" />
  <h2>{label}</h2>
  <slot />

  <div class="three-columns">
    <div>
      <Progress currentIdx={idx} />
    </div>

    <div>
      <FancyRadio
        legend="Existing"
        {choices}
        bind:value={$state.pathPlacemakingCheck.existingScores[idx - 1]}
      />
      <TextArea
        label="Comments / assumptions"
        bind:value={$state.pathPlacemakingCheck.existingScoreNotes[idx - 1]}
      />
    </div>
    <div>
      <FancyRadio
        legend="Proposed"
        {choices}
        bind:value={$state.pathPlacemakingCheck.proposedScores[idx - 1]}
      />
      <TextArea
        label="Comments / assumptions"
        bind:value={$state.pathPlacemakingCheck.proposedScoreNotes[idx - 1]}
      />
    </div>
  </div>

  <PrevNext {idx} total={19} urlPath="route_check/path_placemaking_check/pp" />
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
