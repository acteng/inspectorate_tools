<script lang="ts">
  import ClickableCard from "./ClickableCard.svelte";
  export let cardDetailsList: ClickableCardDetails[]= [];
</script>

{#each cardDetailsList as cardDetails}
  <ClickableCard {cardDetails} />
{/each}
