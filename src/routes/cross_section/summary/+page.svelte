<script lang="ts">
  import { pairs, DecimalInput } from "$lib";
  import { Select, TextInput, TextArea } from "govuk-svelte";
  import { state } from "../data";
  import {
    authorities,
    transportOrCombinedAuthorities,
    regions,
    fundingProgrammes,
    designStages,
  } from "$lib/lists";

  // TODO Start/endpoints, map
</script>

<TextInput
  label="Scheme reference"
  bind:value={$state.summary.schemeReference}
/>
<TextInput label="Scheme name" bind:value={$state.summary.schemeName} />
<TextArea label="Scheme summary" bind:value={$state.summary.schemeSummary} />

<Select
  label="Authority"
  emptyOption
  choices={pairs(authorities)}
  bind:value={$state.summary.authority}
/>
<Select
  label="Transport / Combined Authority"
  emptyOption
  choices={pairs(transportOrCombinedAuthorities)}
  bind:value={$state.summary.transportOrCombinedAuthority}
/>
<Select
  label="Region"
  emptyOption
  choices={pairs(regions)}
  bind:value={$state.summary.region}
/>
<Select
  label="Funding programme"
  emptyOption
  choices={pairs(fundingProgrammes)}
  bind:value={$state.summary.fundingProgramme}
/>
<Select
  label="Design stage"
  emptyOption
  choices={pairs(designStages)}
  bind:value={$state.summary.designStage}
/>
<TextArea
  label="Funding conditions"
  bind:value={$state.summary.fundingConditions}
/>

<DecimalInput
  label="Route length assessed here (km)"
  bind:value={$state.summary.assessedRouteLengthKm}
  width={6}
  min={0}
/>
<DecimalInput
  label="Total route length (km)"
  bind:value={$state.summary.totalRouteLengthKm}
  width={6}
  min={0}
/>

<TextArea label="Notes" bind:value={$state.summary.notes} />
