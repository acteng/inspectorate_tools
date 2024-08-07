<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { Footer } from "govuk-svelte";
  import { page } from "$app/stores";
  import { getTitle } from "$lib/nav";
  import logoUrl from "$lib/assets/images/ate_logo.png?url";

  initAll();
</script>

<svelte:head>
  <title>{getTitle($page.url.pathname)}</title>
</svelte:head>

<div class="govuk-prose">
  <div class="black-bar">
    <div class="govuk-width-container">
      <img src={logoUrl} alt="Active Travel England logo" />
    </div>
  </div>

  <div class="green-bar" />

  <!-- It's up to each page to use govuk-width-container or not -->
  <slot />

  <Footer />
</div>

<style>
  .black-bar {
    background: #0b0c0c;
    margin-top: -8px;
    margin-left: -8px;
    margin-right: -8px;
  }

  .green-bar {
    width: 100vw;
    margin-left: -8px;
    border-bottom: 10px solid #007161;
  }

  img {
    height: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
