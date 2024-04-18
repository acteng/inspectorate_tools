<script lang="ts">
  import { base } from "$app/paths";
  import { ExternalLink } from "$lib";
  import { state, emptyState } from "./data";
  import { WarningButton, TextArea, CollapsibleCard } from "govuk-svelte";
  import { getChildren } from "$lib/nav";

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
  {#each getChildren("/area_check") as [path, title]}
    <li><a href="{base}{path}">{title}</a></li>
  {/each}
</ol>

<CollapsibleCard label="Debug">
  <WarningButton on:click={reset}>Reset</WarningButton>
  <TextArea label="JSON" value={JSON.stringify($state, null, "  ")} rows={10} />
</CollapsibleCard>
