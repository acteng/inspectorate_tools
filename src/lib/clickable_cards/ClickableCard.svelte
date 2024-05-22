<script lang="ts">
  export let cardDetails: ClickableCardDetails;
</script>

<button
  class="clickable-card govuk-button govuk-button--secondary"
  disabled={cardDetails.disabled}
  on:click={cardDetails.disabled ? () => {} : cardDetails.onClick}
>
  <div class="top-section section">
    <span>{cardDetails.name}</span>
    <i class="arrow" />
  </div>
  <div class="section">
    {cardDetails.additionalText}
  </div>
</button>

<style>
  .clickable-card {
    border: 1px solid black;
    display: block;
    width: 100%;
  }
  .top-section {
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
  }
  .section {
    padding: 0.5em;
  }
  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    height: 0.1em;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
</style>
