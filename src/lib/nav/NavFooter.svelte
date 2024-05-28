<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { NextButton, PreviousButton, getPrevPage, getNextPage } from "./";

  $: pagePath = $page.url.pathname;
  $: prevPage = getPrevPage(pagePath);
  $: nextPage = getNextPage(pagePath);
</script>

<div style="display: flex; justify-content: space-between">
  {#if prevPage}
    <PreviousButton href="{base}{prevPage[0]}" label={prevPage[1]} />
  {/if}

  {#if nextPage}
    <NextButton href="{base}{nextPage[0]}" label={nextPage[1]} />
  {/if}
</div>
