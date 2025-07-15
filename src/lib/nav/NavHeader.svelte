<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { getNavList } from "./";

  export let routeCheckType: "street" | "path" | "";

  $: navList = getNavList($page.url.pathname, routeCheckType);
</script>

{#if navList}
  <ol>
    {#each navList as [path, title, currentlyHere]}
      <li>
        {#if path}
          <a
            href="{base}{path}"
            class="govuk-link--no-underline hack-no-visited-state"
            class:underline={currentlyHere}
          >
            {title}
          </a>
        {:else}
          {title}
        {/if}
      </li>
    {/each}
  </ol>
{/if}

<style>
  ol {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 1px solid #b1b4b6;
    column-gap: 1px;
  }
  li {
    margin-left: 2em;
  }
  li:first-child {
    margin-left: 0;
  }

  .underline {
    /* Need important to override the hack-no-visited-state */
    color: #007161 !important;
    font-weight: bold;
    border-bottom: 3px solid #007161;
  }

  /* govuk-link--no-visited-state doesn't have enough specificity to actually work */
  .hack-no-visited-state:visited {
    color: #1d70b8;
  }
</style>
