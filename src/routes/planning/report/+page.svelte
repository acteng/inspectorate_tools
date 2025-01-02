<script lang="ts">
  import { base } from "$app/paths";
  import { DefaultButton } from "govuk-svelte";
  import Report from "./Report.svelte";

  function openReportInNewTab() {
    window.open(`${base}/planning/report/printable`, "_blank");
  }
</script>

<Report>
  <div>
    <p>
      The export to PDF button will open a new tab. Right-click the page and
      select 'Print'. Then you can export to PDF.
    </p>
    <DefaultButton on:click={openReportInNewTab}>Export to PDF</DefaultButton>
  </div>
</Report>
