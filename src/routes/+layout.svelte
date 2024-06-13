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
  This is an experimental tool by <a href="mailto:dcarlino@turing.ac.uk">
    Dustin
  </a>
  and
  <a href="mailto:Peter.York@activetravelengland.gov.uk">Pete</a>
  . Use only for internal testing. Please give feedback in the
  <a
    href="https://departmentfortransportuk.sharepoint.com/:x:/r/sites/ATE-Data-and-DigitalRLG-ATE-ATE/Shared%20Documents/ATIP/ATE%20Tools%202024%20Feedback%20Log_V2.xlsx?d=w31a14d35e31f46a8b9cf6f4f697b2692&csf=1&web=1&e=jLUWFN"
    target="_blank"
  >
    Web Tools tab
  </a>
  .
</WarningText>

<div class="govuk-prose">
  <slot />
</div>
