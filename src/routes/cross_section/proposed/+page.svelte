<script lang="ts">
  import CrossSection from "./CrossSection.svelte";
  import CustomFeatures from "./CustomFeatures.svelte";
  import { CollapsibleCard } from "govuk-svelte";
  import TrafficData from "./TrafficData.svelte";
  import { state } from "../data";
  import { Breadcrumbs } from "$lib";

  let trafficDataOk = false;
</script>

<Breadcrumbs
  links={[
    ["Tools", "/"],
    ["Route cross-section", "/cross_section"],
  ]}
  current="Proposed Cross-Sections"
/>

<TrafficData bind:valid={trafficDataOk} />

<CollapsibleCard label="Custom Street Features">
  <CustomFeatures />
</CollapsibleCard>

{#if trafficDataOk}
  <CollapsibleCard label="Desirable Minimum Cross-Section">
    <CrossSection
      bind:streetFeaturesLeftToRight={$state.proposed
        .desirableMinimumCrossSection}
      sectionType="Desirable"
    />
  </CollapsibleCard>
  <CollapsibleCard label="Absolute Minimum Cross-Section">
    <CrossSection
      bind:streetFeaturesLeftToRight={$state.proposed
        .absoluteMinimumCrossSection}
      sectionType="Absolute"
    />
  </CollapsibleCard>
{:else}
  <p>Fill out all traffic data above to continue</p>
{/if}
