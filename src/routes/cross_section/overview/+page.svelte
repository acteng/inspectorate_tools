<script lang="ts">
  import { base } from "$app/paths";
  import { ExportFile } from "$lib/files";
  import { currentFile, state } from "../data";
</script>

<div class="govuk-width-container">
  <ExportFile {currentFile} {state} />

  <p>Check what you need to do to assess the design quality of a scheme.</p>

  <ol>
    <li><a href="{base}/cross_section/overview">Overview</a></li>
    <li><a href="{base}/cross_section/summary">Summary of Scheme</a></li>
    <li><a href="{base}/cross_section/proposed">Proposed Cross-Sections</a></li>
    <li><a href="{base}/cross_section/check">Cross-Sections Check</a></li>
    <li><a href="{base}/cross_section/results_summary">ATE Summary</a></li>
  </ol>
</div>
