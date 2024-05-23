<script lang="ts">
  import rightArrow from "./assets/images/right-arrow.svg?url";
  export let name: string;
  export let disabled: boolean = false;
</script>

<button
  class="clickable-card govuk-button govuk-button--secondary"
  {disabled}
  on:click
  on:mouseenter
>
  <div class="top-section section">
    <span>{name}</span>
    <img class="arrow" src={rightArrow} alt="arrow pointing right" />
  </div>
  <div class="section">
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
    justify-content: space-between;
  }
  .section {
    display: flex;
    padding: 0.5em;
  }
  .arrow {
    max-height: 0.75em;
  }
</style>
