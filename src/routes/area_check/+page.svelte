<script lang="ts">
  import { ExternalLink } from "$lib";
  import { base } from "$app/paths";
  import { state, emptyState } from "./data";
  import { WarningButton, TextArea, CollapsibleCard } from "govuk-svelte";

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
      <li class="govuk-breadcrumbs__list-item">Area check tool</li>
    </ol>
  </div>
  <hr />

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
      <a href="{base}/area_check/traffic_mitigation">
        Traffic Mitigation Check
      </a>
    </li>
    <li>Area Scorecard</li>
    <li>Results & Commentary</li>
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
