<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import {
    NextButton,
    PreviousButton,
    Breadcrumbs,
    getBreadcrumbLinks,
    getPrevPage,
    getNextPage,
    getNavList,
    getTitle,
  } from "./";

  export let routeCheckType: "street" | "path" | "";

  $: pagePath = $page.url.pathname;
  $: prevPage = getPrevPage(pagePath, routeCheckType);
  $: nextPage = getNextPage(pagePath, routeCheckType);
  $: navList = getNavList(pagePath, routeCheckType);
</script>

<div style="display: flex; justify-content: space-between">
  {#if prevPage}
    <PreviousButton href="{base}{prevPage[0]}" label={prevPage[1]} />
  {:else}
    &nbsp;
  {/if}

  <Breadcrumbs
    links={getBreadcrumbLinks(pagePath)}
    current={getTitle(pagePath)}
  />

  {#if nextPage}
    <NextButton href="{base}{nextPage[0]}" label={nextPage[1]} />
  {:else}
    &nbsp;
  {/if}
</div>
{#if navList}
  <ol
    style="display: flex; justify-content: space-around; flex-direction: row; flex-wrap: wrap;"
  >
    {#each navList as navItem}
      <li>
        <a href="{base}{navItem[0]}">{navItem[1]}</a>
      </li>
    {/each}
  </ol>
{/if}

<style>
  li {
    font-family: "GDS Transport", arial, sans-serif;
    margin-left: 2em;
  }
  li:first-child {
    margin-left: 0;
  }
</style>
