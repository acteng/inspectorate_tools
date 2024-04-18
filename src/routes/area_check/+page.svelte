<script lang="ts">
  import { base } from "$app/paths";
  import { ExternalLink } from "$lib";
  import { state, emptyState } from "./data";
  import { WarningButton, TextArea, CollapsibleCard } from "govuk-svelte";
  import { findPage } from "$lib/nav";

  function reset() {
    $state = emptyState();
  }
</script>

<p>
  This is an experimental version of a <ExternalLink
    href="https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools"
  >
    scheme review tool
  </ExternalLink>.
</p>

<ol>
  {#each findPage("/area_check")[2] as row}
    {#if row[0]}
      <li><a href="{base}/area_check/{row[0]}">{row[1]}</a></li>
    {:else}
      <li>{row[1]}</li>
    {/if}
  {/each}
</ol>

<CollapsibleCard label="Debug">
  <WarningButton on:click={reset}>Reset</WarningButton>
  <TextArea label="JSON" value={JSON.stringify($state, null, "  ")} rows={10} />
</CollapsibleCard>
