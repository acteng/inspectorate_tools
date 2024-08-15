<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { getNavList } from "./";

  export let routeCheckType: "street" | "path" | "";

  // TODO Hack for route check only
  let slices = [
    [0, 5],
    [5, 9],
    [9, 13],
  ];

  $: navList = getNavList($page.url.pathname, routeCheckType);
</script>

{#if navList}
  {#each slices as [start, end]}
    <ol>
      {#each navList.slice(start, end) as [path, title, currentlyHere], idx}
        {#if path}
          <a
            href="{base}{path}"
            class="govuk-link--no-underline hack-no-visited-state"
            class:underline={currentlyHere}
          >
            {start + idx + 1}. {title}
          </a>
        {:else}
          <span>{start + idx + 1}. {title}</span>
        {/if}
      {/each}
    </ol>
  {/each}
{/if}

<style>
  ol {
    display: flex;
    justify-content: space-around;
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
