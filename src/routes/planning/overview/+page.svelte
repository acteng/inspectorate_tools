<script lang="ts">
  import { base } from "$app/paths";
  import { currentFile, state } from "../data";
  import { ExportFile } from "$lib/files";
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
