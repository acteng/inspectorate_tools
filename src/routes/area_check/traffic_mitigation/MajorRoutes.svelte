<script lang="ts">
  import YesNo from "./YesNo.svelte";
  import { Select } from "govuk-svelte";
  import { pairs, WarningText } from "$lib";

  let q1 = "";
  let q2 = "";
  let q3 = "";
  let q4 = "";
</script>

<YesNo
  label="Are there sensitive receptors, such as schools or hospitals there?"
  bind:value={q1}
/>

{#if q1 == "Yes"}
  <WarningText>
    Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)
  </WarningText>
{:else if q1 == "No"}
  <YesNo
    label="Is the scheme expected to add significant levels of traffic or congestion to any part of the road network?"
    bind:value={q2}
  />

  {#if q2 == "No"}
    <div class="govuk-panel govuk-panel--confirmation">
      <h1 class="govuk-panel__title">Proceed with the scheme</h1>
      <div class="govuk-panel__body">
        The scheme reduces traffic overall, and causes no wider issues
      </div>
    </div>
  {:else if q2 == "Yes"}
    <YesNo
      label="Do the major road(s) exceed or approach the pollution limit values?"
      bind:value={q3}
    />

    {#if q3 == "Yes"}
      <WarningText>
        Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide
      </WarningText>
    {:else if q3 == "No"}
      <Select
        label="Is the major route suitable for local solutions, does it need wider measues, or are both currently inadequate?"
        emptyOption
        choices={pairs(["Local", "Wider", "Measures are inadequate"])}
        bind:value={q4}
      />

      {#if q4 == "Local"}
        <WarningText>
          Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.
        </WarningText>
      {:else if q4 == "Wider"}
        <WarningText>
          Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.
        </WarningText>
      {:else if q4 == "Measures are inadequate"}
        <WarningText>
          If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.
        </WarningText>
      {/if}
    {/if}
  {/if}
{/if}
