<script lang="ts">
  import { WarningButton, TextArea, CollapsibleCard } from "govuk-svelte";
  import { ExternalLink } from "$lib";
  import { base } from "$app/paths";
  import { state, emptyState } from "./data";

  function reset() {
    $state = emptyState();
  }
</script>

<div class="govuk-prose">
  <div class="govuk-breadcrumbs">
    <ol class="govuk-breadcrumbs__list">
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/">Tools</a>
      </li>
      <li class="govuk-breadcrumbs__list-item">Route cross-section tool</li>
    </ol>
  </div>
  <hr />

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
    <li>Cross-Sections Check</li>
    <li>ATE Summary</li>
  </ol>

  <CollapsibleCard label="Debug">
    <WarningButton on:click={reset}>Reset</WarningButton>
    <TextArea
      label="JSON"
      value={JSON.stringify($state, null, "  ")}
      rows={10}
    />
  </CollapsibleCard>
</div>
