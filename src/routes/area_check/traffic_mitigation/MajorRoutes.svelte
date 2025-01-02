<script lang="ts">
  import { pairs, YesNo } from "$lib";
  import { Radio, WarningText } from "govuk-svelte";
  import { state } from "../data";
  import Confirmation from "./Confirmation.svelte";
</script>

<YesNo
  label="Are there sensitive receptors, such as schools or hospitals there?"
  bind:value={$state.trafficMitigationCheck.majorQ1}
/>

{#if $state.trafficMitigationCheck.majorQ1 == "Yes"}
  <WarningText>
    Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)
  </WarningText>
{:else if $state.trafficMitigationCheck.majorQ1 == "No"}
  <YesNo
    label="Is the scheme expected to add significant levels of traffic or congestion to any part of the road network?"
    bind:value={$state.trafficMitigationCheck.majorQ2}
  />

  {#if $state.trafficMitigationCheck.majorQ2 == "No"}
    <Confirmation>
      The scheme reduces traffic overall, and causes no wider issues
    </Confirmation>
  {:else if $state.trafficMitigationCheck.majorQ2 == "Yes"}
    <YesNo
      label="Do the major road(s) exceed or approach the pollution limit values?"
      bind:value={$state.trafficMitigationCheck.majorQ3}
    />

    {#if $state.trafficMitigationCheck.majorQ3 == "Yes"}
      <WarningText>
        Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide
      </WarningText>
    {:else if $state.trafficMitigationCheck.majorQ3 == "No"}
      <Radio
        label="Is the major route suitable for local solutions, does it need wider measues, or are both currently inadequate?"
        choices={pairs(["Local", "Wider", "Measures are inadequate"])}
        bind:value={$state.trafficMitigationCheck.majorQ4}
      />

      {#if $state.trafficMitigationCheck.majorQ4 == "Local"}
        <WarningText>
          Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.
        </WarningText>
      {:else if $state.trafficMitigationCheck.majorQ4 == "Wider"}
        <WarningText>
          Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.
        </WarningText>
      {:else if $state.trafficMitigationCheck.majorQ4 == "Measures are inadequate"}
        <WarningText>
          If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.
        </WarningText>
      {/if}
    {/if}
  {/if}
{/if}
