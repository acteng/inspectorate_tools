<script lang="ts">
  import rightArrow from "./assets/images/right-arrow.svg?url";

  export let name: string;
  export let disabled: boolean = false;
  export let hasSlot = true;
</script>

<button
  class="clickable-card govuk-button govuk-button--secondary"
  {disabled}
  on:click
  on:mouseenter
  on:mouseleave
>
  <div class="top-section section" class:bordered={hasSlot}>
    <span>{name}</span>
    <img class="arrow" src={rightArrow} alt="Select {name}" />
  </div>
  {#if hasSlot}
    <div class="section">
      <slot />
    </div>
  {/if}
</button>

<style>
  .clickable-card {
    border: 1px solid black;
    display: block;
    width: 100%;
  }
  .top-section {
    justify-content: space-between;
  }
  .bordered {
    border-bottom: 1px solid black;
  }
  .section {
    display: flex;
    padding: 0.5em;
  }
  .arrow {
    max-height: 0.75em;
  }
</style>
