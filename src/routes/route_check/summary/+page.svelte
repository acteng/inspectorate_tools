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

  // TODO https://design-system.service.gov.uk/components/date-input/
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Route check tool", "/route_check"],
    ]}
    current="Summary of Scheme"
  />

  <TextInput
    label="Date of design review"
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
    label="Inspector email address"
    bind:value={$state.summary.inspectorEmail}
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

  <hr />

  <Select
    label="Route Check Type (Street or Path)"
    emptyOption
    choices={[
      ["street", "Street Check"],
      ["path", "Path Check"],
    ]}
    bind:value={$state.summary.checkType}
  />
  <p>
    (TODO, turn into hint) What type of route is being reviewed: Street Check
    (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path
    featuring minimal interactions with motor traffic)
  </p>
</div>
