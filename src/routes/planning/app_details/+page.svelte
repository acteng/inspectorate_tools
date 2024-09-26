<script lang="ts">
  import { pairs, DateInput } from "$lib";
  import { Select, TextInput } from "govuk-svelte";
  import { state } from "../data";
  import {
    localPlanningAuthorities,
    localHighwayAuthorities,
    applicationTypes,
  } from "../lists";
</script>

<div class="govuk-width-container">
  <TextInput
    label="Summary of proposal"
    bind:value={$state.summary.proposalSummary}
  />

  <Select
    label="Application type"
    emptyOption
    choices={pairs(applicationTypes)}
    bind:value={$state.summary.applicationType}
  />

  <TextInput label="Site address" bind:value={$state.summary.siteAddress} />

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

  <TextInput
    label="Local authority reference (if available)"
    bind:value={$state.summary.localAuthorityReference}
  />

  <TextInput
    label="ATE reference (if available)"
    bind:value={$state.summary.ateReference}
  />

  <TextInput
    label="Completed by (user and organisation name)"
    bind:value={$state.summary.completedBy}
  />

  <DateInput label="Date" bind:value={$state.summary.date} />
</div>
