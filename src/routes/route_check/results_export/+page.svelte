<script lang="ts">
  import { encodeDalog } from "./da_log";
  import { state } from "../data";
  import { TextArea } from "govuk-svelte";

  let pairs = encodeDalog($state);
  let header = pairs.map((pair) => pair[0]).join("\t");
  let values = pairs.map((pair) => pair[1]).join("\t");
</script>

<p>
  TODO. Below is the start to the DALOG output as TSV (tab-separated values).
</p>

<TextArea label="TSV output, just the one row of values" value={values} />

<TextArea label="TSV output with header" value={`${header}\n${values}\n`} />

<TextArea
  label="JSON mapping"
  value={JSON.stringify(Object.fromEntries(pairs), null, "  ")}
/>
