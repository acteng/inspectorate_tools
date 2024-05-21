<script lang="ts">
  import { pairs, GenericSelect, ExternalLink } from "$lib";
  import { createEventDispatcher } from "svelte";
  import { WarningText, SecondaryButton, WarningButton } from "govuk-svelte";
  import {
    state,
    streetFeatureTypes,
    type StreetFeatureType,
    type CustomFeatures,
  } from "../data";
  import { getWidths, needBuffers } from "./logic";
  import { references, guidance } from "./guidance";

  export let value: StreetFeatureType | "";
  export let isFirst: boolean;
  export let isLast: boolean;
  export let leftFeature: StreetFeatureType | "";
  export let rightFeature: StreetFeatureType | "";

  $: buffers = value
    ? needBuffers(value, leftFeature, rightFeature)
    : {
        warning: "",
        functionsToDispatch: [],
      };

  $: widths = value
    ? getWidths(
        value,
        $state.proposed.trafficData,
        $state.proposed.customFeatures,
        leftFeature,
        rightFeature,
      )
    : [0, 0];

  let dispatch = createEventDispatcher<{
    delete: void;
    moveLeft: void;
    moveRight: void;
    addLeftBuffer: void;
    addRightBuffer: void;
  }>();

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
</script>

<div style="width: 400px">
  <GenericSelect label="Street feature type" emptyOption {choices} bind:value />

  {#if value}
    <p>Desirable minimum width (m): {widths[0].toFixed(2)}</p>
    <p>Absolute minimum width (m): {widths[1].toFixed(2)}</p>

    <div style="display: flex; justify-content: space-between">
      <SecondaryButton disabled={isFirst} on:click={() => dispatch("moveLeft")}>
        &larr;
      </SecondaryButton>
      <WarningButton on:click={() => dispatch("delete")}>Delete</WarningButton>
      <SecondaryButton disabled={isLast} on:click={() => dispatch("moveRight")}>
        &rarr;
      </SecondaryButton>
    </div>

    {#if buffers.warning !== ""}
      <WarningText>
        {buffers.warning}
        <br />
        <SecondaryButton
          on:click={() => {
            buffers.functionsToDispatch.forEach((functionName) => {
              dispatch(functionName);
            });
          }}
        >
          Add buffer{buffers.functionsToDispatch.length > 1 ? "s" : ""}
        </SecondaryButton>
      </WarningText>
    {/if}

    {#if references(value).length > 0}
      <u>References</u>
      :
      <ul>
        {#each references(value) as [reference, href]}
          {#if href}
            <li><ExternalLink {href}>{reference}</ExternalLink></li>
          {:else}
            <li>{reference}</li>
          {/if}
        {/each}
      </ul>
    {/if}

    {#if guidance(value, $state.proposed.trafficData)}
      <u>Guidance</u>
      :
      <p style="max-width: 400px">
        {guidance(value, $state.proposed.trafficData)}
      </p>
    {/if}
  {/if}
</div>

<style>
  div {
    border: 1px solid black;
    padding: 4px;
  }
</style>
