<script lang="ts">
  import { base } from "$app/paths";

  export let idx: number;
  export let total: number;
  export let urlPath: string;
  export let startIdx = 1;
  export let questionType: string = "metric";

  function formatIndex(idx: number): string {
    return (idx + startIdx - 1).toString().padStart(2, "0");
  }

  function capitaliseFirstCharacter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
</script>

<nav
  class="govuk-pagination"
  aria-label="Pagination"
  style="display: flex; justify-content: space-between"
>
  {#if idx != 1}
    <div class="govuk-pagination__prev">
      <a
        class="govuk-link govuk-pagination__link"
        href="{base}/{urlPath}{formatIndex(idx - 1)}"
        rel="prev"
      >
        <svg
          class="govuk-pagination__icon govuk-pagination__icon--prev"
          xmlns="http://www.w3.org/2000/svg"
          height="13"
          width="15"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 15 13"
        >
          <path
            d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"
          ></path>
        </svg>
        <span class="govuk-pagination__link-title">
          Previous {questionType}
        </span>
      </a>
    </div>
  {:else}
    &nbsp;
  {/if}

  <ul class="govuk-pagination__list">
    <li class="govuk-pagination__item">
      {capitaliseFirstCharacter(questionType)}
      {idx} / {total}
    </li>
  </ul>

  {#if idx != total}
    <div class="govuk-pagination__next">
      <a
        class="govuk-link govuk-pagination__link"
        href="{base}/{urlPath}{formatIndex(idx + 1)}"
        rel="next"
      >
        <span class="govuk-pagination__link-title">Next {questionType}</span>
        <svg
          class="govuk-pagination__icon govuk-pagination__icon--next"
          xmlns="http://www.w3.org/2000/svg"
          height="13"
          width="15"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 15 13"
        >
          <path
            d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"
          ></path>
        </svg>
      </a>
    </div>
  {:else}
    &nbsp;
  {/if}
</nav>
