<script lang="ts">
  import { encodeDalog } from "./da_log";
  import { state } from "../data";
  import { TextArea } from "govuk-svelte";
  import ConvertToXlsx from "../results_export/ConvertToXlsx.svelte";

  // TODO Need to escape " in the values, then
  $: values = encodeDalog($state)
    .map((pair) => `"${pair[1]}"`)
    .join("\t");
</script>

<div class="govuk-width-container">
  <ConvertToXlsx />

  <p>
    This page is for internal use only. The values below are TSV (tab-separated
    values), copyable into Excel.
  </p>

  <TextArea label="TSV output" value={values} />
</div>
