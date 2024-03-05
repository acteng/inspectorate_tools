<script lang="ts">
  import FancyRadio from "./FancyRadio.svelte";
  import { TextArea } from "govuk-svelte";

  export let label: string;
  export let cases: [number, string][];

  let colors = ["#00b050", "#99cc00", "#ffc000", "#ff5050", "#ff0000"];

  let choices: [string, string, string][] = cases.map(([value, label], index) => [
    value.toString(),
    label,
    colors[index],
  ]);
</script>

<div class="govuk-width-container">
  <h2>{label}</h2>
  <slot />

  <div class="govuk-grid-row">
    <div class="govuk-grid-column-one-half">
      <FancyRadio legend="Existing" {choices} />
      <TextArea label="Notes" />
    </div>
    <div class="govuk-grid-column-one-half">
      <FancyRadio legend="Proposed" {choices} />
      <TextArea label="Notes" />
    </div>
  </div>
</div>
