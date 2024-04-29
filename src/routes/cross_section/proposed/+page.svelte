<script lang="ts">
  import CrossSection from "./CrossSection.svelte";
  import CustomFeatures from "./CustomFeatures.svelte";
  import { CollapsibleCard, SecondaryButton } from "govuk-svelte";
  import TrafficData from "./TrafficData.svelte";
  import { state } from "../data";

  let trafficDataOk = false;

  function copy() {
    $state.proposed.absoluteMinimumCrossSection = JSON.parse(
      JSON.stringify($state.proposed.desirableMinimumCrossSection),
    );
  }
</script>

<TrafficData bind:valid={trafficDataOk} />

<CollapsibleCard label="Custom Street Features">
  <CustomFeatures />
</CollapsibleCard>

{#if trafficDataOk}
  <CollapsibleCard label="Preferred Cross-Section" open>
    <CrossSection
      bind:streetFeaturesLeftToRight={$state.proposed
        .desirableMinimumCrossSection}
      sectionType="Preferred"
    />
  </CollapsibleCard>

  <CollapsibleCard label="Compromised Cross-Section" open>
    {#if $state.proposed.absoluteMinimumCrossSection.length == 0}
      <SecondaryButton on:click={copy}>Copy Preferred</SecondaryButton>
    {/if}
    <CrossSection
      bind:streetFeaturesLeftToRight={$state.proposed
        .absoluteMinimumCrossSection}
      sectionType="Compromised"
    />
  </CollapsibleCard>
{:else}
  <p>Fill out all traffic data above to continue</p>
{/if}
