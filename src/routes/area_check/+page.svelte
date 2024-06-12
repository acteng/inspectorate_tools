<script lang="ts">
  import { base } from "$app/paths";
  import { ExternalLink } from "$lib";
  import { getChildren } from "$lib/nav";
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
