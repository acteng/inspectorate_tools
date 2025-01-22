<script lang="ts">
  import { base } from "$app/paths";
  import { DefaultButton } from "govuk-svelte";
  import Report from "./Report.svelte";

  function openReportInNewTab() {
    window.print();
  }
</script>

<Report>
  <div class="do-not-print">
    <DefaultButton on:click={openReportInNewTab}>Export to PDF</DefaultButton>
  </div>
</Report>
