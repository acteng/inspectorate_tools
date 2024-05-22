<script lang="ts">
  export let name: string = "";
  export let additionalText: string = "";
  export let onClick: Function = () =>{};
  export let disabled: boolean = false;
</script>

<button
  class="clickable-card govuk-button govuk-button--secondary"
  disabled={disabled}
  on:click={onClick}
>
  <div class="top-section section">
    <span>{name}</span>
    <img src="/assets/right-arrow.svg" alt="arrow pointing right" />
  </div>
  <div class="section">
    {additionalText}
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
