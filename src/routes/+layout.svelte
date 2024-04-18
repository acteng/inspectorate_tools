<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { WarningText } from "govuk-svelte";
  import { page } from "$app/stores";
  import { getTitle } from "$lib/nav";

  initAll();

  $: pagePath = $page.url.pathname;
</script>

<WarningText>
  This is an experimental tool. Use only for internal testing.
</WarningText>

<p>
  Path = <b>{pagePath}</b>
  , title =
  <b>{getTitle(pagePath)}</b>
</p>

<div class="govuk-prose">
  <slot />
</div>
