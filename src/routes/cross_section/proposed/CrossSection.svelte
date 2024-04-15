<script lang="ts">
  import StreetFeatureCard from "./StreetFeatureCard.svelte";
  import { SecondaryButton } from "govuk-svelte";
  import { state, type StreetFeatureType, type State } from "../data";
  import { getWidths } from "./logic";

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

  function calculateTotalWidth(
    state: State,
    sectionType: "Desirable" | "Absolute",
  ): number {
    let sum = 0.0;

    // TODO OK to use not use state here?
    for (let i = 0; i < streetFeaturesLeftToRight.length; i++) {
      let thisFeature = streetFeaturesLeftToRight[i];
      if (!thisFeature) {
        continue;
      }
      let leftFeature = i == 0 ? "" : streetFeaturesLeftToRight[i - 1];
      let rightFeature =
        i == streetFeaturesLeftToRight.length - 1
          ? ""
          : streetFeaturesLeftToRight[i + 1];
      let width = getWidths(
        thisFeature,
        state.proposed.trafficData,
        leftFeature,
        rightFeature,
      )[sectionType == "Desirable" ? 0 : 1];
      sum += width;
    }

    return sum;
  }
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
