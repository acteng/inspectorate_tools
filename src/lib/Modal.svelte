<script lang="ts">
  import { SecondaryButton } from "govuk-svelte";
  import { tick } from "svelte";

  export let title: string;
  export let open = false;
  export let displayEscapeButton = true;
  export let canCloseByClickingBackground = true;
  export let viewWidth: number | undefined = undefined;

  // Svelte sometimes reuses the same modal. Always reset scroll when opening.
  let innerContent: HTMLDivElement;
  $: resetScroll(open);
  async function resetScroll(open: boolean) {
    if (open && innerContent) {
      await tick();
      innerContent.scrollTop = 0;
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="background"
  on:click={() => {
    if (canCloseByClickingBackground) open = false;
  }}
  class:open
  class:closed={!open}
>
  <div
    class="content centered-fullscreen"
    style={viewWidth ? `width: ${viewWidth}vw;` : ""}
    on:click|stopPropagation={() => null}
    bind:this={innerContent}
  >
    <div style="display: flex; justify-content: space-between;">
      <h1 class="govuk-heading-l">{title}</h1>
      {#if displayEscapeButton}
        <SecondaryButton on:click={() => (open = false)}>X</SecondaryButton>
      {/if}
    </div>
    <slot />
  </div>
</div>

<style>
  .background {
    position: fixed;
    /* TODO Not showing up */
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
  }

  .content {
    background: white;
    padding: 30px;
    border: 1px solid black;
  }

  .centered-fullscreen {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    overflow: scroll;
  }

  .open {
    display: block;
  }

  .closed {
    display: none;
  }
</style>
