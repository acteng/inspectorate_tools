<script lang="ts">
  import "../style/main.css";
  import { page } from "$app/stores";
  import logoUrl from "$lib/assets/images/ate_logo.png?url";
  import { canonicalizePath, getTitle } from "$lib/nav";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { Footer } from "govuk-svelte";

  initAll();

  // The license footer takes valuable vertical screen space on map pages,
  // where the user is likely to scroll down to see the full map.
  let useFooter = ![
    "/route_check/route_map",
    "/route_check/problems_map",
    "/route_check/jat_check",
  ].includes(canonicalizePath($page.url.pathname));
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

  <div class="green-bar do-not-print" />

  <!-- It's up to each page to use govuk-width-container or not -->
  <slot />

  {#if useFooter}
    <div class="do-not-print">
      <Footer />
    </div>
  {/if}
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

  @media print {
    .do-not-print {
      display: none;
    }
  }
</style>
