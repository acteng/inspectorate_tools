<script lang="ts">
  import {
    DefaultButton,
    SecondaryButton,
    WarningButton,
    WarningText,
  } from "govuk-svelte";
  import {
    state,
    streetFeatureTypes,
    type StreetFeatureType,
    type CustomFeatures,
  } from "../data";
  import { calculateTotalWidths } from "./logic";
  import { afterUpdate } from "svelte";
  import { GenericSelect, ExternalLink } from "$lib";
  import { references, guidance } from "./guidance";
  import { getWidths, needBuffers } from "./logic";

  export let streetFeaturesLeftToRight: Array<StreetFeatureType | "">;
  export let sectionType: "Preferred" | "Compromised";

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

  $: totalWidths = calculateTotalWidths($state, sectionType);

  $: choices = makeChoices($state.proposed.customFeatures);

  function makeChoices(
    customFeatures: CustomFeatures,
  ): [StreetFeatureType | "", string][] {
    let list: [StreetFeatureType | "", string][] = streetFeatureTypes.map(
      (f) => [f, f],
    );
    for (let [id, feature] of Object.entries(customFeatures)) {
      list.push([{ custom: id }, `Custom: ${feature.name}`]);
    }
    return list;
  }

  function addBuffers(i: number, fix: "" | "left" | "right" | "both") {
    // Order matters, since indices will change
    if (fix == "right" || fix == "both") {
      streetFeaturesLeftToRight.splice(i + 1, 0, "Buffer / Verge");
    }
    if (fix == "left" || fix == "both") {
      streetFeaturesLeftToRight.splice(i, 0, "Buffer / Verge");
    }
    streetFeaturesLeftToRight = streetFeaturesLeftToRight;
  }
</script>

<DefaultButton on:click={addNewStreetFeature}>Add feature</DefaultButton>

<p>
  Desirable minimum total width required (m): <b>{totalWidths[0].toFixed(2)}</b>
</p>
<p>
  Absolute minimum total width required (m): <b>{totalWidths[1].toFixed(2)}</b>
</p>

<div
  style="display: flex; flex-direction: row; overflow-x: scroll"
  bind:this={div}
>
  <table>
    <tr>
      <th></th>
      {#each streetFeaturesLeftToRight as value, i (i)}
        <td>
          <div style="display: flex; justify-content: space-between">
            <SecondaryButton disabled={i == 0} on:click={() => moveLeft(i)}>
              &larr;
            </SecondaryButton>
            <WarningButton on:click={() => deleteStreetFeature(i)}>
              Delete
            </WarningButton>
            <SecondaryButton
              disabled={i == streetFeaturesLeftToRight.length - 1}
              on:click={() => moveRight(i)}
            >
              &rarr;
            </SecondaryButton>
          </div>
        </td>
      {/each}
    </tr>

    <tr>
      <th>Street Feature</th>
      {#each streetFeaturesLeftToRight as value, i (i)}
        <td>
          <GenericSelect
            label="Street feature type"
            emptyOption
            {choices}
            bind:value
          />
        </td>
      {/each}
    </tr>

    <tr>
      <th>Buffers</th>
      {#each streetFeaturesLeftToRight as value, i (i)}
        {@const leftFeature = i == 0 ? "" : streetFeaturesLeftToRight[i - 1]}
        {@const rightFeature =
          i == streetFeaturesLeftToRight.length - 1
            ? ""
            : streetFeaturesLeftToRight[i + 1]}
        {@const buffers = needBuffers(value, leftFeature, rightFeature)}

        <td>
          {#if buffers.warning != ""}
            <WarningText>
              {buffers.warning}
              <SecondaryButton
                on:click={() => addBuffers(i, buffers.fix)}
                style="margin-bottom: 0px; float: right"
              >
                Add
              </SecondaryButton>
            </WarningText>
          {/if}
        </td>
      {/each}
    </tr>

    <tr>
      <th>Desirable minimum width (m)</th>
      {#each streetFeaturesLeftToRight as value, i (i)}
        {@const leftFeature = i == 0 ? "" : streetFeaturesLeftToRight[i - 1]}
        {@const rightFeature =
          i == streetFeaturesLeftToRight.length - 1
            ? ""
            : streetFeaturesLeftToRight[i + 1]}
        <td>
          {getWidths(
            value,
            $state.proposed.trafficData,
            $state.proposed.customFeatures,
            leftFeature,
            rightFeature,
          )[0].toFixed(2)}
        </td>
      {/each}
    </tr>

    <tr>
      <th>Absolute minimum width (m)</th>
      {#each streetFeaturesLeftToRight as value, i (i)}
        {@const leftFeature = i == 0 ? "" : streetFeaturesLeftToRight[i - 1]}
        {@const rightFeature =
          i == streetFeaturesLeftToRight.length - 1
            ? ""
            : streetFeaturesLeftToRight[i + 1]}
        <td>
          {getWidths(
            value,
            $state.proposed.trafficData,
            $state.proposed.customFeatures,
            leftFeature,
            rightFeature,
          )[1].toFixed(2)}
        </td>
      {/each}
    </tr>

    <tr>
      <th>References</th>
      {#each streetFeaturesLeftToRight as value, i (i)}
        <td>
          <ul>
            {#each references(value) as [reference, href]}
              {#if href}
                <li><ExternalLink {href}>{reference}</ExternalLink></li>
              {:else}
                <li>{reference}</li>
              {/if}
            {/each}
          </ul>
        </td>
      {/each}
    </tr>

    <tr>
      <th>Guidance</th>
      {#each streetFeaturesLeftToRight as value, i (i)}
        <td>
          <p style="max-width: 400px">
            {guidance(value, $state.proposed.trafficData)}
          </p>
        </td>
      {/each}
    </tr>
  </table>
</div>

<style>
  td {
    border: 1px solid black;
    padding: 4px;
  }
</style>
