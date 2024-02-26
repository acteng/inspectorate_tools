<script lang="ts">
  import TrafficData from "./TrafficData.svelte";
  import { base } from "$app/paths";

  let trafficDataOk = false;
</script>

<div class="govuk-prose">
  <div class="govuk-breadcrumbs">
    <ol class="govuk-breadcrumbs__list">
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/">Tools</a>
      </li>
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/cross_section">
          Route cross-section
        </a>
      </li>
      <li class="govuk-breadcrumbs__list-item">Proposed Cross-Sections</li>
    </ol>
  </div>

  <TrafficData bind:valid={trafficDataOk} />

  {#if trafficDataOk}{:else}
    <p>Fill out all data above to continue</p>
  {/if}
</div>
