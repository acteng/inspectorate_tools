<script lang="ts">
  import CrossSection from "./CrossSection.svelte";
  import { CollapsibleCard } from "govuk-svelte";
  import TrafficData from "./TrafficData.svelte";
  import { state } from "../data";
  import { Breadcrumbs } from "$lib";

  let trafficDataOk = false;
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Route cross-section", "/cross_section"],
    ]}
    current="Proposed Cross-Sections"
  />

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
