<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { WarningText } from "govuk-svelte";
  import { page } from "$app/stores";
  import { getTitle } from "$lib/nav";

  initAll();
</script>

<svelte:head>
  <title>{getTitle($page.url.pathname)}</title>
</svelte:head>

<WarningText>
  This is an experimental tool. Use only for internal testing.
</WarningText>

<div class="govuk-prose">
  <slot />
</div>
