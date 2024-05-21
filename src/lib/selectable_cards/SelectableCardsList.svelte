<script lang="ts">
  import  SelectableCard  from './SelectableCard.svelte'
    export let cardDetailsList:any[] = ["hello", "world"];

</script>

  {#each cardDetailsList as cardDetails}
    <SelectableCard {cardDetails} />
  {/each}