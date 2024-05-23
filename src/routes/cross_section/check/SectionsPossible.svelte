<script lang="ts">
  export let available: number;
  export let preferredTotals: [number, number];
  export let compromisedTotals: [number, number];
  export let verbose = true;

  let sections: [string, [number, number]][] = [
    ["Preferred", preferredTotals],
    ["Compromised", compromisedTotals],
  ];
</script>

{#each sections as [label, [desirableTotal, absoluteTotal]]}
  <p>
    {label}{verbose ? "cross sections possible:" : ":"}
    {#if available >= desirableTotal}
      <strong class="govuk-tag govuk-tag--green">Desirable Minimum</strong>
    {:else if available > absoluteTotal}
      <strong class="govuk-tag govuk-tag--yellow">Absolute Minimum</strong>
    {:else}
      <strong class="govuk-tag govuk-tag--red">Insufficient Space</strong>
    {/if}
  </p>
{/each}

<style>
  p {
    padding: 2px;
  }
</style>
