<script lang="ts">
  import { Breadcrumbs } from "$lib";
  import FancyRadio from "./FancyRadio.svelte";
  import { TextArea } from "govuk-svelte";
  import { state } from "../data";

  export let idx: number;
  export let label: string;
  export let cases: [number, string][];

  let colors = ["#00b050", "#99cc00", "#ffc000", "#ff5050", "#ff0000"];

  let choices: [string, string, string][] = cases.map(
    ([value, label], index) => [value.toString(), label, colors[index]],
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

  <div class="govuk-width-container">
    <h2>{label}</h2>
    <slot />

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-one-half">
        <FancyRadio
          legend="Existing"
          {choices}
          bind:value={$state.existingScores[idx]}
        />
        <TextArea label="Notes" bind:value={$state.existingScoreNotes[idx]} />
      </div>
      <div class="govuk-grid-column-one-half">
        <FancyRadio
          legend="Proposed"
          {choices}
          bind:value={$state.proposedScores[idx]}
        />
        <TextArea label="Notes" bind:value={$state.proposedScoreNotes[idx]} />
      </div>
    </div>
  </div>
</div>
