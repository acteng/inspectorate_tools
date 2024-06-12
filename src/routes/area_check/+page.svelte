<script lang="ts">
  import { base } from "$app/paths";
  import { ExternalLink } from "$lib";
  import { getChildren } from "$lib/nav";
  import { state } from "./data";
  import { downloadExcelFile } from "./export";
  import { SecondaryButton } from "govuk-svelte";

  async function download() {
    try {
      await downloadExcelFile($state);
    } catch (err) {
      window.alert(`Conversion failed: ${err}`);
    }
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

<SecondaryButton on:click={() => downloadExcelFile($state)}>
  Convert to .xlsx (takes a few seconds)
</SecondaryButton>
<p>
  <i>
    When you open the file, you need to force Excel to recalculate all formulas
    with Ctrl + Alt + F9
  </i>
</p>
