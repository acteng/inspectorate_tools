<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { getNavList, getTitle } from "./";

  export let routeCheckType: "street" | "path" | "";

  $: navList = getNavList($page.url.pathname, routeCheckType);
</script>

{#if navList}
  <ol>
    {#each navList as [path, title, currentlyHere]}
      <li>
        <a
          href="{base}{path}"
          class="govuk-link--no-underline"
          class:underline={currentlyHere}
        >
          {title}
        </a>
      </li>
    {/each}
  </ol>
{/if}

<style>
  ol {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 1px solid #b1b4b6;
  }
  li {
    margin-left: 2em;
  }
  li:first-child {
    margin-left: 0;
  }

  .underline {
    border-bottom: 5px solid #007161;
  }
</style>
