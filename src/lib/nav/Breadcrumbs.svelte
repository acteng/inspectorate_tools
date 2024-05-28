<script lang="ts">
  import { base } from "$app/paths";

  // TODO Move to govuk-svelte, after deciding how to handle base

  // A list of [URL, label] in order. URLs should start with a leading slash.
  // The base path will be prepended; no need to include it.
  export let links: [string, string][];
  // The current page's label, with no URL
  export let current: string;
</script>

<div class="govuk-breadcrumbs">
  <ol class="govuk-breadcrumbs__list">
    {#each links as [link, label]}
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}{link}">{label}</a>
      </li>
    {/each}
    <li class="govuk-breadcrumbs__list-item">{current}</li>
  </ol>
</div>
