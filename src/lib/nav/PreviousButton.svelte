<script lang="ts">
  // TODO Not properly following https://design-system.service.gov.uk/components/pagination/; this is conflating two patterns
  export let href: string;
  export let label: string;
</script>

<div class="govuk-pagination__prev">
  <a class="govuk-link govuk-pagination__link" {href} rel="prev">
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
    <span class="govuk-pagination__link-title">{label}</span>
  </a>
</div>
