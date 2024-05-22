<script lang="ts">
  export let cardDetails: ClickableCardDetails;
</script>

<button
  class="clickable-card govuk-button govuk-button--secondary"
  disabled='{cardDetails.disabled}'
  on:click={cardDetails.disabled ? () => {} : cardDetails.onClick}
>
  <div class="top-section section">
    {cardDetails.name}
  </div>
  <div class="section">
    {cardDetails.additionalText}
  </div>
</button>

<style>
  .clickable-card {
    border: 1px solid black;
    display: block;
  }
  .top-section {
    border-bottom: 1px solid black;
  }
  .section {
    padding: 0.5em;
  }
</style>
