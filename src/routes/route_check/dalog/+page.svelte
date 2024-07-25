<script lang="ts">
  import { encodeDalog } from "./da_log";
  import { state } from "../data";
  import { TextArea } from "govuk-svelte";
  import ConvertToXlsx from "../results_export/ConvertToXlsx.svelte";

  let pairs = encodeDalog($state);
  let header = pairs.map((pair) => pair[0]).join("\t");
  // TODO Need to escape " in the values, then
  let values = pairs.map((pair) => `"${pair[1]}"`).join("\t");
</script>

<div class="govuk-width-container">
  <ConvertToXlsx />

  <p>
    This page is for internal use only. The values below are TSV (tab-separated
    values), copyable into Excel.
  </p>

  <TextArea label="TSV output, just the one row of values" value={values} />

  <TextArea label="TSV output with header" value={`${header}\n${values}\n`} />

  <TextArea
    label="JSON mapping"
    value={JSON.stringify(Object.fromEntries(pairs), null, "  ")}
  />
</div>
