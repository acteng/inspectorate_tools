<script lang="ts">
  import StreetFeatureCard from "./StreetFeatureCard.svelte";
  import { SecondaryButton } from "govuk-svelte";
  import { state, type StreetFeatureType } from "../data";
  import { calculateTotalWidth } from "./logic";
  import { afterUpdate } from "svelte";

  export let streetFeaturesLeftToRight: Array<StreetFeatureType | "">;
  export let sectionType: "Desirable" | "Absolute";

  let div: HTMLDivElement;
  let justAdded = false;

  afterUpdate(() => {
    if (justAdded) {
      justAdded = false;
      div.scrollLeft = div.scrollWidth;
    }
  });

  function addNewStreetFeature() {
    streetFeaturesLeftToRight = [...streetFeaturesLeftToRight, ""];
    justAdded = true;
  }

  function deleteStreetFeature(i: number) {
    streetFeaturesLeftToRight.splice(i, 1);
    streetFeaturesLeftToRight = streetFeaturesLeftToRight;
  }

  function moveLeft(i: number) {
    [streetFeaturesLeftToRight[i - 1], streetFeaturesLeftToRight[i]] = [
      streetFeaturesLeftToRight[i],
      streetFeaturesLeftToRight[i - 1],
    ];
  }

  function moveRight(i: number) {
    [streetFeaturesLeftToRight[i + 1], streetFeaturesLeftToRight[i]] = [
      streetFeaturesLeftToRight[i],
      streetFeaturesLeftToRight[i + 1],
    ];
  }

  function insertBuffer(i: number) {
    streetFeaturesLeftToRight.splice(i, 0, "Buffer / Verge");
    streetFeaturesLeftToRight = streetFeaturesLeftToRight;
  }

  $: totalWidth = calculateTotalWidth($state, sectionType);
</script>

<SecondaryButton on:click={addNewStreetFeature}>Add</SecondaryButton>

<div
  style="display: flex; flex-direction: row; overflow-x: scroll"
  bind:this={div}
>
  {#each streetFeaturesLeftToRight as streetFeature, i (i)}
    <StreetFeatureCard
      bind:value={streetFeature}
      on:delete={() => deleteStreetFeature(i)}
      on:moveLeft={() => moveLeft(i)}
      on:moveRight={() => moveRight(i)}
      on:addLeftBuffer={() => insertBuffer(i)}
      on:addRightBuffer={() => insertBuffer(i + 1)}
      isFirst={i == 0}
      isLast={i == streetFeaturesLeftToRight.length - 1}
      leftFeature={i == 0 ? "" : streetFeaturesLeftToRight[i - 1]}
      rightFeature={i == streetFeaturesLeftToRight.length - 1
        ? ""
        : streetFeaturesLeftToRight[i + 1]}
      {sectionType}
    />
  {/each}
</div>

<p>
  Total width required (m): <b>{totalWidth.toFixed(2)}</b>
</p>
