<script lang="ts">
  import CrossSection from "./CrossSection.svelte";
  import { CollapsibleCard } from "govuk-svelte";
  import TrafficData from "./TrafficData.svelte";
  import { base } from "$app/paths";
  import { state } from "../data";

  let trafficDataOk = false;
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
        bind:lanesLeftToRight={$state.proposed.desirableMinimumCrossSection}
        sectionType="Desirable"
      />
    </CollapsibleCard>
    <CollapsibleCard label="Absolute Minimum Cross-Section">
      <CrossSection
        bind:lanesLeftToRight={$state.proposed.absoluteMinimumCrossSection}
        sectionType="Absolute"
      />
    </CollapsibleCard>
  {:else}
    <p>Fill out all data above to continue</p>
  {/if}
</div>
