<script lang="ts">
  import StreetFeatureCard from "./StreetFeatureCard.svelte";
  import { SecondaryButton } from "govuk-svelte";
  import { state, type StreetFeatureType, type State } from "../data";
  import { calculateTotalWidth } from "./logic";

  export let streetFeaturesLeftToRight: Array<StreetFeatureType | "">;
  export let sectionType: "Desirable" | "Absolute";

  function addNewStreetFeature() {
    streetFeaturesLeftToRight = [...streetFeaturesLeftToRight, ""];
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

  $: totalWidth = calculateTotalWidth($state, sectionType);
</script>

<SecondaryButton on:click={addNewStreetFeature}>Add</SecondaryButton>

<div style="display: flex; flex-direction: row">
  {#each streetFeaturesLeftToRight as streetFeature, i (i)}
    <StreetFeatureCard
      bind:value={streetFeature}
      on:delete={() => deleteStreetFeature(i)}
      on:moveLeft={() => moveLeft(i)}
      on:moveRight={() => moveRight(i)}
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
