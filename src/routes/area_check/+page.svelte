<script lang="ts">
  import { Breadcrumbs, ExternalLink } from "$lib";
  import { base } from "$app/paths";
  import { state, emptyState } from "./data";
  import { WarningButton, TextArea, CollapsibleCard } from "govuk-svelte";

  function reset() {
    $state = emptyState();
  }
</script>

<Breadcrumbs links={[["Tools", "/"]]} current="Area check tool" />

<p>
  This is an experimental version of a <ExternalLink
    href="https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools"
  >
    scheme review tool
  </ExternalLink>.
</p>

<ol>
  <li><a href="{base}/area_check/summary">Summary of Scheme</a></li>
  <li>
    <a href="{base}/area_check/traffic_mitigation">Traffic Mitigation Check</a>
  </li>
  <li><a href="{base}/area_check/scorecard">Area Scorecard</a></li>
  <li>Results & Commentary</li>
</ol>

<CollapsibleCard label="Debug">
  <WarningButton on:click={reset}>Reset</WarningButton>
  <TextArea label="JSON" value={JSON.stringify($state, null, "  ")} rows={10} />
</CollapsibleCard>
