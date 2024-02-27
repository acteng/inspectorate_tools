<script lang="ts">
  import YesNo from "./YesNo.svelte";
  import { WarningText } from "$lib";

  let q1 = "";
  let q2 = "";
</script>

<YesNo
  label="Are there sensitive receptors on these streets or do the existing pollution levels exceed or approach limit values?"
  bind:value={q1}
/>

{#if q1 == "Yes"}
  <WarningText>
    Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)
  </WarningText>
{:else if q1 == "No"}
  <YesNo
    label="Is the scheme expected to add significant levels of traffic or congestion to these streets?"
    bind:value={q2}
  />

  {#if q2 == "Yes"}
    <WarningText>
      Redesign scheme with alternative diversionary routes or a wider focus
    </WarningText>
  {:else if q2 == "No"}
    <div class="govuk-panel govuk-panel--confirmation">
      <h1 class="govuk-panel__title">Proceed with the scheme</h1>
      <div class="govuk-panel__body">
        The scheme reduces traffic overall, and causes no wider issues
      </div>
    </div>
  {/if}
{/if}
