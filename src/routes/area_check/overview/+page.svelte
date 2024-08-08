<script lang="ts">
  import { base } from "$app/paths";
  import { currentFile, state } from "../data";
  import { ExportFile } from "$lib/files";
</script>

<div class="govuk-width-container">
  <ExportFile {currentFile} {state} />

  <p>Check what you need to do to assess the design quality of a scheme.</p>

  <ol>
    <li><a href="{base}/area_check/overview">Overview</a></li>
    <li><a href="{base}/area_check/summary">Summary of Scheme</a></li>
    <li>
      <a href="{base}/area_check/traffic_mitigation">
        Traffic Mitigation Check
      </a>
    </li>
    <li><a href="{base}/area_check/scorecard">Area Scorecard</a></li>
    <li><a href="{base}/area_check/results">Results & Commentary</a></li>
  </ol>
</div>
