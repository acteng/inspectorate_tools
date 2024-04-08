<script lang="ts">
  import { Breadcrumbs, FancyRadio, PrevNext } from "$lib";
  import Progress from "./Progress.svelte";
  import { TextArea } from "govuk-svelte";
  import { state } from "../data";
  import { red, amber, green } from "$lib/colors";

  export let idx: number;
  export let label: string;
  export let cases: ["0" | "1" | "2", string][];

  let colors = [red, amber, green];

  let choices: [string, string, string][] = cases.map(
    ([value, label], index) => [value.toString(), label, colors[index]],
  );
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Route check tool", "/route_check"],
      ["Street Check", "/route_check/street_check"],
    ]}
    current={label}
  />

  <PrevNext
    {idx}
    total={26}
    startIdx={17}
    urlPath="route_check/street_check/st"
  />
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
        bind:value={$state.streetCheck.existingScores[idx - 1]}
      />
      <TextArea
        label="Comments / assumptions"
        bind:value={$state.streetCheck.existingScoreNotes[idx - 1]}
      />
    </div>
    <div>
      <FancyRadio
        legend="Proposed"
        {choices}
        bind:value={$state.streetCheck.proposedScores[idx - 1]}
      />
      <TextArea
        label="Comments / assumptions"
        bind:value={$state.streetCheck.proposedScoreNotes[idx - 1]}
      />
    </div>
  </div>

  <PrevNext
    {idx}
    total={26}
    startIdx={17}
    urlPath="route_check/street_check/st"
  />
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
