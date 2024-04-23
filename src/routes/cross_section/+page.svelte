<script lang="ts">
  import { base } from "$app/paths";
  import { ExternalLink } from "$lib";
  import { getChildren } from "$lib/nav";
</script>

<p>
  This is an experimental version of a <ExternalLink
    href="https://www.gov.uk/government/publications/active-travel-england-design-assistance-tools"
  >
    design assistance tool
  </ExternalLink>.
</p>

<ol>
  {#each getChildren("/cross_section") as [path, title]}
    <li><a href="{base}{path}">{title}</a></li>
  {/each}
</ol>
