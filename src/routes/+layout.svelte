<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { AlphaBanner, WarningText } from "govuk-svelte";
  import { page } from "$app/stores";
  import { getTitle } from "$lib/nav";

  initAll();
</script>

<svelte:head>
  <title>{getTitle($page.url.pathname)}</title>
</svelte:head>
<div class="govuk-width-container">
  <header class="govuk-header">
    <img
      class="ate-logo"
      alt="Active Travel England logo"
      src="/assets/images/ATE-Logo.webp"
    />
  </header>
</div>
<div class="sub-header-border" />
<div class="govuk-width-container">
  <AlphaBanner />
</div>

<div class="govuk-prose">
  <slot />
</div>

<style>
  .govuk-header {
    background: white;
    height: 150px;
  }
  .sub-header-border {
    width: 100vw;
    margin-left: -8px;
    border-bottom: 0.5rem solid #007161;
  }
  .ate-logo {
    height: 90%;
    background: white;
  }
</style>
