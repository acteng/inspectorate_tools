<script lang="ts">
  import { Breadcrumbs, FancyRadio, PrevNext } from "$lib";
  import Progress from "./Progress.svelte";
  import { TextArea } from "govuk-svelte";
  import { state } from "../data";
  import { criticalRedAmberGreen } from "$lib/colors";

  export let idx: number;
  export let label: string;
  export let cases: ["C" | "0" | "1" | "2", string][];

  let colors = criticalRedAmberGreen;

  let choices: [string, string, string][] = cases.map(
    ([value, label], index) => [
      value.toString(),
      label,
      colors[index].background,
      colors[index].font,
    ],
  );
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Route check tool", "/route_check"],
      ["Safety Check", "/route_check/safety_check"],
    ]}
    current={label}
  />

  <PrevNext {idx} total={16} urlPath="route_check/safety_check/sa" />
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
        bind:value={$state.safetyCheck.existingScores[idx - 1]}
      />
      <TextArea
        label="Comments / assumptions"
        bind:value={$state.safetyCheck.existingScoreNotes[idx - 1]}
      />
    </div>
    <div>
      <FancyRadio
        legend="Proposed"
        {choices}
        bind:value={$state.safetyCheck.proposedScores[idx - 1]}
      />
      <TextArea
        label="Comments / assumptions"
        bind:value={$state.safetyCheck.proposedScoreNotes[idx - 1]}
      />
    </div>
  </div>

  <PrevNext {idx} total={16} urlPath="route_check/safety_check/sa" />
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
