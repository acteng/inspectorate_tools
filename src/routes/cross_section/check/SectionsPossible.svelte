<script lang="ts">
  export let available: number;
  export let desirableTotal: number;
  export let absoluteTotal: number;
</script>

{#if available >= desirableTotal}
  <p>
    Cross sections possible: <strong class="govuk-tag govuk-tag--green">
      Desirable Minimum
    </strong>
  </p>
{:else if available > absoluteTotal}
  <p>
    Cross sections possible: <strong class="govuk-tag govuk-tag--yellow">
      Absolute Minimum
    </strong>
  </p>
{:else}
  <p>
    Cross sections possible: <strong class="govuk-tag govuk-tag--red">
      Insufficient Space
    </strong>
  </p>
{/if}
