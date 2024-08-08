<script lang="ts">
  import { base } from "$app/paths";
  import { ExternalLink } from "$lib";
  import { currentFile, state } from "../data";
  import { ExportFile } from "$lib/files";
</script>

<div class="govuk-width-container">
  <p>
    This is an experimental version of a <ExternalLink
      href="https://www.gov.uk/government/publications/active-travel-england-design-assistance-tools"
    >
      design assistance tool
    </ExternalLink>.
  </p>

  <ExportFile {currentFile} {state} />

  <p>Check what you need to do to assess the design quality of a scheme.</p>

  <ol>
    <li><a href="{base}/cross_section/summary">Summary of Scheme</a></li>
    <li><a href="{base}/cross_section/proposed">Proposed Cross-Sections</a></li>
    <li><a href="{base}/cross_section/check">Cross-Sections Check</a></li>
    <li><a href="{base}/cross_section/results_summary">ATE Summary</a></li>
  </ol>
</div>
