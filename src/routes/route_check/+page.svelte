<script lang="ts">
  import { Breadcrumbs, ExternalLink } from "$lib";
  import { base } from "$app/paths";
  import { state, emptyState } from "./data";
  import { WarningButton, TextArea, CollapsibleCard } from "govuk-svelte";

  function reset() {
    $state = emptyState();
  }
</script>

<div class="govuk-prose">
  <Breadcrumbs links={[["Tools", "/"]]} current="Route check tool" />

  <p>
    This is an experimental version of a <ExternalLink
      href="https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools"
    >
      scheme review tool
    </ExternalLink>.
  </p>

  <ol>
    <li><a href="{base}/route_check/summary">Summary of Scheme</a></li>
    <li><a href="{base}/route_check/policy_check">Policy Check</a></li>
    <li>Policy Conflict Log</li>

    <li>Safety Check</li>
    <li>Critical Issues Log</li>

    <li>Street Check</li>
    <li>Street Placemaking Check</li>

    <li>Path Check</li>
    <li>Path Placemaking Check</li>

    <li>JAT Check</li>

    <li>Results Summary</li>
    <li>Results Further Analysis</li>
    <li>Results Export</li>
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
