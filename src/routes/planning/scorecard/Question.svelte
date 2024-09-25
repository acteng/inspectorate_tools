<script lang="ts">
  import { PrevNext } from "$lib";
  import { TextArea } from "govuk-svelte";
  import ColoredRadio from "./ColoredRadio.svelte";
  import Progress from "./Progress.svelte";
  import { state } from "../data";

  export let idx: number;

  let choices: [string, string, string, string][] = [
    [
      "Exemplar",
      "The proposal exceeds the standards in policy and guidance and represents an example of best practice.",
      "#00b050",
      "white",
    ],
    [
      "Pass",
      "The proposal meets standards in policy and guidance. Where there are shortfalls, these are minor and do not affect the overall position.",
      "#99cc00",
      "black",
    ],
    [
      "Condition / Obligation to make acceptable",
      "The proposal does not adhere to standards in policy and guidance; however a planning condition/obligation can address any shortfalls.",
      "#ffc000",
      "black",
    ],
    [
      "Concern",
      "The proposal does not adhere to standards in policy and guidance and more detail is needed to inform the assessment of the proposal. This may include reasonable amendments, improvements to infrastructure and/or additional information.",
      "#ff5050",
      "black",
    ],
    [
      "Critical issue",
      "The proposal represents a significant departure from standards in policy and guidance. Either comprehensive amendments or the delivery of new infrastructure would be required; or it is unlikely that the deficiency can be addressed.",
      "#ff0000",
      "white",
    ],
    [
      "Not applicable",
      "This criterion is not a material consideration.",
      "grey",
      "white",
    ],
  ];
</script>

<div class="govuk-grid-row" style="margin: 1em">
  <div class="govuk-grid-column-one-quarter">
    <Progress currentIdx={idx} />
  </div>

  <div class="govuk-grid-column-three-quarters">
    <PrevNext {idx} total={10} urlPath="planning/scorecard/q" />

    <slot name="description" />

    <h3>Common Shortfalls</h3>
    <slot name="shortfalls" />

    <ColoredRadio {choices} bind:value={$state.ratings[idx - 1]} />

    <TextArea
      label="Appraiser Comments"
      bind:value={$state.appraiserComments[idx - 1]}
    />

    <TextArea
      label="Local Policy & Guidance"
      bind:value={$state.localGuidance[idx - 1]}
    />

    <h3>NationPolicy & Guidance</h3>
    <slot name="guidance" />

    <PrevNext {idx} total={10} urlPath="planning/scorecard/q" />
  </div>
</div>
