<script lang="ts">
  import { YesNo } from "$lib";
  import { WarningText } from "govuk-svelte";
  import { state } from "../data";
  import Confirmation from "./Confirmation.svelte";
</script>

<YesNo
  label="Are there sensitive receptors on these streets or do the existing pollution levels exceed or approach limit values?"
  bind:value={$state.trafficMitigationCheck.minorQ1}
/>

{#if $state.trafficMitigationCheck.minorQ1 == "Yes"}
  <WarningText>
    Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)
  </WarningText>
{:else if $state.trafficMitigationCheck.minorQ1 == "No"}
  <YesNo
    label="Is the scheme expected to add significant levels of traffic or congestion to these streets?"
    bind:value={$state.trafficMitigationCheck.minorQ2}
  />

  {#if $state.trafficMitigationCheck.minorQ2 == "Yes"}
    <WarningText>
      Redesign scheme with alternative diversionary routes or a wider focus
    </WarningText>
  {:else if $state.trafficMitigationCheck.minorQ2 == "No"}
    <Confirmation>
      The scheme reduces traffic overall, and causes no wider issues
    </Confirmation>
  {/if}
{/if}
