<script lang="ts">
  import { PrevNext } from "$lib";
  import { CollapsibleCard, Radio, TextArea } from "govuk-svelte";
  import Progress from "./Progress.svelte";
  import { state } from "../data";

  export let idx: number;
  export let label: string;

  let choices: [string, string][] = [
    [
      "Exemplar",
      "The proposal exceeds the standards in policy and guidance and represents an example of best practice.",
    ],
    [
      "Pass",
      "The proposal meets standards in policy and guidance. Where there are shortfalls, these are minor and do not affect the overall position.",
    ],
    [
      "Condition / Obligation to make acceptable",
      "The proposal does not adhere to standards in policy and guidance; however a planning condition/obligation can address any shortfalls.",
    ],
    [
      "Concern",
      "The proposal does not adhere to standards in policy and guidance and more detail is needed to inform the assessment of the proposal. This may include reasonable amendments, improvements to infrastructure and/or additional information.",
    ],
    [
      "Critical issue",
      "The proposal represents a significant departure from standards in policy and guidance. Either comprehensive amendments or the delivery of new infrastructure would be required; or it is unlikely that the deficiency can be addressed.",
    ],
    ["Not applicable", "This criterion is not a material consideration."],
  ];
</script>

<PrevNext {idx} total={10} urlPath="planning/scorecard/q" />

<h1>{idx}. {label}</h1>

<slot name="description" />

<Radio legend="Rating" {choices} bind:value={$state.ratings[idx - 1]} />

<TextArea
  label="Appraiser Comments"
  bind:value={$state.appraiserComments[idx - 1]}
/>

<CollapsibleCard label="Common Shortfalls" open>
  <slot name="shortfalls" />
</CollapsibleCard>

<CollapsibleCard label="Policy & Guidance" open>
  <slot name="guidance" />
</CollapsibleCard>

<PrevNext {idx} total={10} urlPath="planning/scorecard/q" />
