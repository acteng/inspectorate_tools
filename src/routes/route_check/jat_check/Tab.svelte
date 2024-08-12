<script lang="ts">
  // Based on https://design-system.service.gov.uk/components/tabs/, with
  // modifications to work on this page and fix problems with the link jumping to
  // the top of the page.

  export let label: string;
  export let isCurrent: boolean;
</script>

{#if isCurrent}
  <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
    {label}
  </li>
{:else}
  <li class="govuk-tabs__list-item">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a class="govuk-tabs__tab" href="#" on:click|preventDefault>
      {label}
    </a>
  </li>
{/if}
