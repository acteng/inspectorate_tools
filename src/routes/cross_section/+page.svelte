<script lang="ts">
  import { WarningButton, TextArea, CollapsibleCard } from "govuk-svelte";
  import { Breadcrumbs, ExternalLink } from "$lib";
  import { base } from "$app/paths";
  import { state, emptyState } from "./data";

  function reset() {
    $state = emptyState();
  }
</script>

<Breadcrumbs links={[["Tools", "/"]]} current="Route cross-section tool" />

<p>
  This is an experimental version of a <ExternalLink
    href="https://www.gov.uk/government/publications/active-travel-england-design-assistance-tools"
  >
    design assistance tool
  </ExternalLink>.
</p>

<ol>
  <li><a href="{base}/cross_section/summary">Summary of Scheme</a></li>
  <li><a href="{base}/cross_section/proposed">Proposed Cross-Sections</a></li>
  <li><a href="{base}/cross_section/check">Cross-Sections Check</a></li>
  <li>ATE Summary</li>
</ol>

<CollapsibleCard label="Debug">
  <WarningButton on:click={reset}>Reset</WarningButton>
  <TextArea label="JSON" value={JSON.stringify($state, null, "  ")} rows={10} />
</CollapsibleCard>
