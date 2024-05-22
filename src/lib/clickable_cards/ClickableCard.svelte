<script lang="ts">
    import { type CardDetails} from "./data"

  export let cardDetails: CardDetails;
</script>

<button
  class="clickable-card govuk-button govuk-button--secondary"
  on:click={cardDetails.onClick}
  disabled={cardDetails.disabled}
>
  <div class="top-section section">
    <span>{cardDetails.name}</span>
    <img src="/assets/right-arrow.svg" alt="arrow pointing right" />
  </div>
  <div class="section">
    {cardDetails.additionalText}
    <slot />
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
</style>
