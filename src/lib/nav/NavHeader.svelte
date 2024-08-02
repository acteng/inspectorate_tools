<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { getNavList, getTitle } from "./";

  export let routeCheckType: "street" | "path" | "";

  $: navList = getNavList($page.url.pathname, routeCheckType);
</script>

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
    margin-left: 2em;
  }
  li:first-child {
    margin-left: 0;
  }
</style>
