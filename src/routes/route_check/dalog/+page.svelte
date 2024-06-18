<script lang="ts">
  import { encodeDalog } from "./da_log";
  import { state, currentFile } from "../data";
  import { DefaultButton, TextArea } from "govuk-svelte";
  import { downloadExcelFile } from "./export";
  import { Loading } from "$lib";

  let pairs = encodeDalog($state);
  let header = pairs.map((pair) => pair[0]).join("\t");
  // TODO Need to escape " in the values, then
  let values = pairs.map((pair) => `"${pair[1]}"`).join("\t");

  let loading = "";

  async function download() {
    loading = "Converting to .xlsx (takes about 20 seconds)";
    try {
      await downloadExcelFile($state, $currentFile);
    } catch (err) {
      window.alert(`Conversion failed: ${err}`);
    }
    loading = "";
  }
</script>

<DefaultButton on:click={download}>Convert to .xlsx</DefaultButton>
<p>
  <i>
    When you open the file, you need to force Excel to recalculate all formulas
    with Ctrl + Alt + F9
  </i>
</p>
<Loading {loading} />

<hr />

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
