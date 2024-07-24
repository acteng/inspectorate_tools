<script lang="ts">
  import { state, currentFile } from "../data";
  import { DefaultButton } from "govuk-svelte";
  import { downloadExcelFile } from "./export";
  import { Loading } from "$lib";

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
    with Ctrl + Alt + F9. The route coordinates in the Summary of Scheme may not
    capture everything mapped when the route is split into multiple pieces. The
    map weblink only shows the route start point.
  </i>
</p>
<Loading {loading} />

<hr />
