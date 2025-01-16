<script lang="ts">
  import { PrevNext } from "$lib";
  import { TextArea } from "govuk-svelte";
  import { state } from "../data";
  import { ratings as choices } from "../lists";
  import ColoredRadio from "./ColoredRadio.svelte";
  import Progress from "./Progress.svelte";

  export let idx: number;
</script>

<div class="govuk-grid-row" style="margin: 1em">
  <div class="govuk-grid-column-one-quarter">
    <Progress currentIdx={idx} />
  </div>

  <div class="govuk-grid-column-three-quarters">
    <PrevNext {idx} total={10} urlPath="planning/assessment/q" questionType="Criterion" />

    <slot name="description" />

    <h3>Common Shortfalls</h3>
    <slot name="shortfalls" />

    <h3>National Policy & Guidance</h3>
    <slot name="guidance" />

    <ColoredRadio {choices} bind:value={$state.ratings[idx - 1]} />

    <TextArea
      label="Appraiser Comments"
      bind:value={$state.appraiserComments[idx - 1]}
    />

    <TextArea
      label="Local Policy & Guidance"
      bind:value={$state.localGuidance[idx - 1]}
    />

    <PrevNext {idx} total={10} urlPath="planning/assessment/q" />
  </div>
</div>
