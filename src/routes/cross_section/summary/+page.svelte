<script lang="ts">
  import { Breadcrumbs, pairs } from "$lib";
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

<Breadcrumbs
  links={[
    ["Tools", "/"],
    ["Route cross-section", "/cross_section"],
  ]}
  current="Summary of Scheme"
/>

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

<TextInput
  label="Route length assessed here (km)"
  bind:value={$state.summary.assessedRouteLengthKm}
/>
<TextInput
  label="Total route length (km)"
  bind:value={$state.summary.totalRouteLengthKm}
/>

<TextArea label="Notes" bind:value={$state.summary.notes} />
