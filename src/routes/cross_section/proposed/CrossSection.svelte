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

  function moveLeft(i: number) {
    [lanesLeftToRight[i - 1], lanesLeftToRight[i]] = [
      lanesLeftToRight[i],
      lanesLeftToRight[i - 1],
    ];
  }

  function moveRight(i: number) {
    [lanesLeftToRight[i + 1], lanesLeftToRight[i]] = [
      lanesLeftToRight[i],
      lanesLeftToRight[i + 1],
    ];
  }
</script>

<SecondaryButton on:click={addNewLane}>Add</SecondaryButton>

<div style="display: flex; flex-direction: row">
  {#each lanesLeftToRight as lane, i (i)}
    <LaneCard
      bind:value={lane}
      on:delete={() => deleteLane(i)}
      on:moveLeft={() => moveLeft(i)}
      on:moveRight={() => moveRight(i)}
      isFirst={i == 0}
      isLast={i == lanesLeftToRight.length - 1}
    />
  {/each}
</div>
