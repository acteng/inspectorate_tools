<script lang="ts">
  import { pairs, DateInput, ExternalLink } from "$lib";
  import { Select, TextInput, TextArea } from "govuk-svelte";
  import { state } from "../data";
  import {
    localPlanningAuthorities,
    localHighwayAuthorities,
    applicationTypes,
  } from "../lists";
</script>

<div class="govuk-width-container">
  <TextInput label="Site address" bind:value={$state.summary.siteAddress} />

  <TextInput
    label="Local authority reference"
    bind:value={$state.summary.localAuthorityReference}
  />

  <TextInput label="ATE reference" bind:value={$state.summary.ateReference} />

  <Select
    label="Local planning authority"
    emptyOption
    choices={pairs(localPlanningAuthorities)}
    bind:value={$state.summary.localPlanningAuthority}
  />

  <Select
    label="Local highway authority"
    emptyOption
    choices={pairs(localHighwayAuthorities)}
    bind:value={$state.summary.localHighwayAuthority}
  />

  <TextInput label="Completed by" bind:value={$state.summary.completedBy} />

  <DateInput label="Date" bind:value={$state.summary.date} />

  <Select
    label="Application type"
    emptyOption
    choices={pairs(applicationTypes)}
    bind:value={$state.summary.applicationType}
  />

  <TextInput
    label="Summary of proposal"
    bind:value={$state.summary.proposalSummary}
  />
</div>
