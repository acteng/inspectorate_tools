<script lang="ts">
  import { base } from "$app/paths";
  import { WarningButton, TextArea, CollapsibleCard } from "govuk-svelte";
  import { Breadcrumbs, ExternalLink } from "$lib";
  import { state, emptyState } from "./data";
  import { findPage } from "$lib/nav";

  function reset() {
    $state = emptyState();
  }
</script>

<Breadcrumbs links={[["Tools", "/"]]} current="Route cross-section tool" />

<p>
  This is an experimental version of a <ExternalLink
    href="https://www.gov.uk/government/publications/active-travel-england-design-assistance-tools"
  >
    design assistance tool
  </ExternalLink>.
</p>

<ol>
  {#each findPage("/cross_section")[2] as row}
    {#if row[0]}
      <li><a href="{base}/cross_section/{row[0]}">{row[1]}</a></li>
    {:else}
      <li>{row[1]}</li>
    {/if}
  {/each}
</ol>

<CollapsibleCard label="Debug">
  <WarningButton on:click={reset}>Reset</WarningButton>
  <TextArea label="JSON" value={JSON.stringify($state, null, "  ")} rows={10} />
</CollapsibleCard>
