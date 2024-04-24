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
  import { NextButton, PreviousButton, Breadcrumbs } from "$lib";
  import { base } from "$app/paths";

  initAll();

  $: pagePath = $page.url.pathname;
  $: prevPage = getPrevPage(pagePath);
  $: nextPage = getNextPage(pagePath);
</script>

<svelte:head>
  <title>{getTitle(pagePath)}</title>
</svelte:head>

<WarningText>
  This is an experimental tool. Use only for internal testing.
</WarningText>

<div class="govuk-prose">
  <div style="display: flex; justify-content: space-between">
    {#if prevPage}
      <PreviousButton href="{base}{prevPage[0]}" label={prevPage[1]} />
    {/if}

    <Breadcrumbs
      links={getBreadcrumbLinks(pagePath)}
      current={getTitle(pagePath)}
    />

    {#if nextPage}
      <NextButton href="{base}{nextPage[0]}" label={nextPage[1]} />
    {/if}
  </div>

  <hr />

  <slot />

  <hr />

  <div style="display: flex; justify-content: space-between">
    {#if prevPage}
      <PreviousButton href="{base}{prevPage[0]}" label={prevPage[1]} />
    {/if}

    {#if nextPage}
      <NextButton href="{base}{nextPage[0]}" label={nextPage[1]} />
    {/if}
  </div>
</div>
