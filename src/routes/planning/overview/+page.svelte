<script lang="ts">
  import { base } from "$app/paths";
  import { ExportFile } from "$lib/files";
  import { currentFile, state } from "../data";
</script>

<div class="govuk-width-container">
  <ExportFile {currentFile} {state} />

  <p>
    Check what you need to do to assess the design quality of an application.
  </p>

  <ol>
    <li><a href="{base}/planning/overview">Overview</a></li>
    <li><a href="{base}/planning/app_details">Application details</a></li>
    <li><a href="{base}/planning/scorecard">Scorecard</a></li>
    <li><a href="{base}/planning/report">Report</a></li>
  </ol>
</div>
