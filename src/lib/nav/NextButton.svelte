<script lang="ts">
  // TODO Not properly following https://design-system.service.gov.uk/components/pagination/; this is conflating two patterns
  export let href: string;
  export let label: string;
</script>

<div class="govuk-pagination__next">
  <a class="govuk-link govuk-pagination__link" {href} rel="next">
    <span class="govuk-pagination__link-title">{label}</span>
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
