<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { WarningText } from "govuk-svelte";
  import { page } from "$app/stores";
  import {
    getTitle,
    getBreadcrumbLinks,
    getPrevPage,
    getNextPage,
  } from "$lib/nav";
  import { Breadcrumbs } from "$lib";
  import { base } from "$app/paths";

  initAll();

  $: pagePath = $page.url.pathname;
  $: prevPage = getPrevPage(pagePath);
  $: nextPage = getNextPage(pagePath);
</script>

<WarningText>
  This is an experimental tool. Use only for internal testing.
</WarningText>

<div class="govuk-prose">
  <Breadcrumbs
    links={getBreadcrumbLinks(pagePath)}
    current={getTitle(pagePath)}
  />
  {#if prevPage}
    <p>
      Previous: <a href="{base}{prevPage[0]}">{prevPage[1]}</a>
    </p>
  {/if}
  {#if nextPage}
    <p>
      Next: <a href="{base}{nextPage[0]}">{nextPage[1]}</a>
    </p>
  {/if}

  <hr />

  <slot />
</div>
