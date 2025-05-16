<script lang="ts">
  import { DateInput, pairs } from "$lib";
  import {
    authorities,
    designStages,
    fundingProgrammes,
    regions,
    transportOrCombinedAuthorities,
  } from "$lib/lists";
  import {
    AutocompleteTextInput,
    Radio,
    RadioWithCustom,
    SelectWithCustom,
    TextArea,
    TextInput,
  } from "govuk-svelte";
  import { state } from "../data";
</script>

<div class="govuk-width-container">
  <DateInput
    label="Date of design review"
    showImportWarning
    bind:value={$state.summary.dateDesignReview}
  />
  <TextInput
    label="Scheme reference"
    bind:value={$state.summary.schemeReference}
  />
  <TextInput label="Scheme name" bind:value={$state.summary.schemeName} />
  <TextArea label="Scheme summary" bind:value={$state.summary.schemeSummary} />
  <TextArea
    label="Scheme information reviewed"
    bind:value={$state.summary.schemeInfoReviewed}
  />

  <AutocompleteTextInput
    label="Authority"
    options={pairs(authorities)}
    bind:value={$state.summary.authority}
    hint="Start typing to auto-complete the authority"
  />
  <AutocompleteTextInput
    label="Transport / Combined Authority"
    options={pairs(transportOrCombinedAuthorities)}
    bind:value={$state.summary.transportOrCombinedAuthority}
    hint="Start typing to auto-complete the transport / combined authority"
  />
  <SelectWithCustom
    label="Region"
    emptyOption
    choices={pairs(regions)}
    bind:value={$state.summary.region}
  />
  <RadioWithCustom
    label="Funding programme"
    choices={pairs(fundingProgrammes)}
    bind:value={$state.summary.fundingProgramme}
  />
  <RadioWithCustom
    label="Design stage"
    choices={pairs(designStages)}
    bind:value={$state.summary.designStage}
  />
  <TextArea
    label="Funding conditions"
    bind:value={$state.summary.fundingConditions}
    hint="Any conditions on infrastructure attached to the relevant funding programme"
  />

  <TextInput
    label="Reviewer email address"
    bind:value={$state.summary.inspectorEmail}
  />

  <TextArea label="Notes" bind:value={$state.summary.notes} />

  <hr />

  <Radio
    label="Route Check Type (Street or Path)"
    hint="What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)"
    choices={[
      ["street", "Street Check"],
      ["path", "Path Check"],
    ]}
    bind:value={$state.summary.checkType}
  />
</div>
