<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import { type ManualSection } from "./data";
  export let section: ManualSection;
  export let link: string = "";
</script>

<div class="body">
  {#if link !== ""}
    <a href={link}>Go to rest of Manual</a>
  {/if}
  <SvelteMarkdown source={section.content} />
</div>
