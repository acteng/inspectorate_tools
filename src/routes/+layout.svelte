<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { WarningText } from "govuk-svelte";
  import { page } from "$app/stores";
  import { getTitle, getBreadcrumbLinks } from "$lib/nav";
  import { Breadcrumbs } from "$lib";

  initAll();

  $: pagePath = $page.url.pathname;
</script>

<WarningText>
  This is an experimental tool. Use only for internal testing.
</WarningText>

<div class="govuk-prose">
  <Breadcrumbs
    links={getBreadcrumbLinks(pagePath)}
    current={getTitle(pagePath)}
  />

  <hr />

  <slot />
</div>
