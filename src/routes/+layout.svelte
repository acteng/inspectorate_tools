<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { AlphaBanner } from "govuk-svelte";
  import { page } from "$app/stores";
  import { getTitle } from "$lib/nav";
  import logoUrl from "$lib/assets/images/ate_logo.png?url";

  initAll();
</script>

<svelte:head>
  <title>{getTitle($page.url.pathname)}</title>
</svelte:head>

<div class="govuk-prose">
  <div class="govuk-width-container">
    <img src={logoUrl} alt="Active Travel England logo" height="30" />
  </div>

  <div class="green-bar" />

  <div class="govuk-width-container" style="margin-bottom: 30px">
    <AlphaBanner />
  </div>

  <!-- It's up to each page to use govuk-width-container or not -->
  <slot />
</div>

<style>
  .green-bar {
    width: 100vw;
    margin-left: -8px;
    border-bottom: 0.5rem solid #007161;
  }
</style>
