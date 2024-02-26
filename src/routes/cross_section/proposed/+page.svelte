<script lang="ts">
  import CrossSection from "./CrossSection.svelte";
  import { WarningButton, TextArea, CollapsibleCard } from "govuk-svelte";
  import TrafficData from "./TrafficData.svelte";
  import { base } from "$app/paths";
  import { state, emptyState } from "../data";

  let trafficDataOk = false;

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
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/cross_section">
          Route cross-section
        </a>
      </li>
      <li class="govuk-breadcrumbs__list-item">Proposed Cross-Sections</li>
    </ol>
  </div>

  <TrafficData bind:valid={trafficDataOk} />

  {#if trafficDataOk}
    <CollapsibleCard label="Desirable Minimum Cross-Section">
      <CrossSection
        bind:lanesLeftToRight={$state.desirableMinimumCrossSection}
        sectionType="Desirable"
      />
    </CollapsibleCard>
    <CollapsibleCard label="Absolute Minimum Cross-Section">
      <CrossSection
        bind:lanesLeftToRight={$state.absoluteMinimumCrossSection}
        sectionType="Absolute"
      />
    </CollapsibleCard>
  {:else}
    <p>Fill out all data above to continue</p>
  {/if}

  <CollapsibleCard label="Debug">
    <WarningButton on:click={reset}>Reset</WarningButton>
    <TextArea
      label="JSON"
      value={JSON.stringify($state, null, "  ")}
      rows={10}
    />
  </CollapsibleCard>
</div>
