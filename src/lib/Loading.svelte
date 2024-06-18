<script lang="ts">
  // Block the rest of the page while 'loading' is non-empty

  export let loading: string;
</script>

{#if loading}
  <div class="outer">
    <div class="inner">
      <progress />
      <div class="govuk-prose"><h3>{loading}</h3></div>
    </div>
  </div>
{/if}

<style>
  .outer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .inner {
    padding: 16px;
    background-color: white;
  }
</style>
