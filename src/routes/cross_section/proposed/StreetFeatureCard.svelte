<script lang="ts">
  import { pairs } from "$lib";
  import { createEventDispatcher } from "svelte";
  import { SecondaryButton, WarningButton, Select } from "govuk-svelte";
  import { state, streetFeatureTypes, type StreetFeatureType } from "../data";
  import { getWidth, references } from "./tables";

  export let value: StreetFeatureType | "";
  export let isFirst: boolean;
  export let isLast: boolean;
  export let sectionType: "Desirable" | "Absolute";

  let dispatch = createEventDispatcher<{
    delete: void;
    moveLeft: void;
    moveRight: void;
  }>();

  // @ts-expect-error TODO Need to make pairs handle readonly types
  let choices = pairs(streetFeatureTypes);
</script>

<div>
  <Select label="Street feature type" emptyOption {choices} bind:value />

  {#if value}
    <p>
      {sectionType} minimum width (m): {getWidth(
        value,
        $state.proposed.trafficData.streetFunction,
        sectionType,
      )}
    </p>
    <u>References:</u>
    <ul>
      {#each references[value] as reference}
        <li>{reference}</li>
      {/each}
    </ul>
  {/if}

  <div style="display: flex; justify-content: space-between">
    <SecondaryButton disabled={isFirst} on:click={() => dispatch("moveLeft")}>
      &larr;
    </SecondaryButton>
    <WarningButton on:click={() => dispatch("delete")}>Delete</WarningButton>
    <SecondaryButton disabled={isLast} on:click={() => dispatch("moveRight")}>
      &rarr;
    </SecondaryButton>
  </div>
</div>

<style>
  div {
    border: 1px solid black;
    padding: 4px;
  }
</style>
