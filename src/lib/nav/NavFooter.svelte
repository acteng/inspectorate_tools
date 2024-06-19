<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import {
    NextButton,
    PreviousButton,
    getPrevPage,
    getNextPage,
    getTitle,
  } from "./";

  export let routeCheckType: "street" | "path" | "";

  $: pagePath = $page.url.pathname;
  $: prevPage = getPrevPage(pagePath, routeCheckType);
  $: nextPage = getNextPage(pagePath, routeCheckType);
</script>

<div style="display: flex; justify-content: space-between">
  {#if prevPage}
    <PreviousButton href="{base}{prevPage[0]}" label={prevPage[1]} />
  {:else}
    &nbsp;
  {/if}

  <span style="display: flex; align-items: center">{getTitle(pagePath)}</span>

  {#if nextPage}
    <NextButton href="{base}{nextPage[0]}" label={nextPage[1]} />
  {:else}
    &nbsp;
  {/if}
</div>
