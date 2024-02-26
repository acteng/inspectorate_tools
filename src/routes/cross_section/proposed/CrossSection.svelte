<script lang="ts">
  import LaneCard from "./LaneCard.svelte";
  import { SecondaryButton } from "govuk-svelte";

  export let lanesLeftToRight: string[];

  function addNewLane() {
    lanesLeftToRight = [...lanesLeftToRight, ""];
  }

  function deleteLane(i: number) {
    lanesLeftToRight.splice(i, 1);
    lanesLeftToRight = lanesLeftToRight;
  }
</script>

<SecondaryButton on:click={addNewLane}>Add</SecondaryButton>

<div style="display: flex; flex-direction: row">
  {#each lanesLeftToRight as lane, i (i)}
    <LaneCard bind:value={lane} on:delete={() => deleteLane(i)} />
  {/each}
</div>
