<script lang="ts">
  import { state, currentFile } from "../data";
  import { SecondaryButton, WarningText } from "govuk-svelte";
  import { downloadExcelFile } from "./export";
  import { Loading, Modal } from "$lib";
  import downloadUrl from "$lib/assets/images/download.svg?url";

  let loading = "";
  let open = false;

  async function download() {
    loading = "Converting to .xlsx (takes about 20 seconds)";
    try {
      await downloadExcelFile($state, $currentFile);
      open = true;
    } catch (err) {
      window.alert(`Conversion failed: ${err}`);
    }
    loading = "";
  }
</script>

<SecondaryButton on:click={download}>
  <img src={downloadUrl} alt="Export .xlsx" style="vertical-align: middle" />
  Export .xlsx
</SecondaryButton>

<Loading {loading} />

<Modal title="Route check exported to Excel" bind:open>
  <WarningText>
    <ul>
      <li>
        When you open the file, you need to force Excel to recalculate all
        formulas with Ctrl + Alt + F9.
      </li>
      <li>
        The route coordinates in the Summary of Scheme may not capture
        everything mapped when the route is split into multiple pieces.
      </li>
      <li>The map weblink only shows the route start point.</li>
    </ul>
  </WarningText>
  <SecondaryButton on:click={() => (open = false)}>OK</SecondaryButton>
</Modal>
