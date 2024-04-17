<script lang="ts">
  import { pairs, ExternalLink } from "$lib";
  import { createEventDispatcher } from "svelte";
  import {
    WarningText,
    SecondaryButton,
    WarningButton,
    Select,
  } from "govuk-svelte";
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
  export let sectionType: "Desirable" | "Absolute";
  export let leftFeature: StreetFeatureType | "";
  export let rightFeature: StreetFeatureType | "";

  $: buffers = value && needBuffers(value, leftFeature, rightFeature);

  let dispatch = createEventDispatcher<{
    delete: void;
    moveLeft: void;
    moveRight: void;
    addBuffer: -1 | 1;
  }>();

  // TODO Select only understands string values, but we want to set
  // StreetFeatureType. This approach works, but it could be wrapped more
  // nicely in a generic Select component
  let stringValue: string =
    typeof value == "object" ? `custom_${value.custom}` : value;

  $: updateValue(stringValue);
  // If the value is changed by the parent, update stringValue
  $: updateStringValue(value);

  function updateValue(s: string) {
    if (s.startsWith("custom_")) {
      value = { custom: s.slice("custom_".length) };
    } else {
      value = s as StreetFeatureType | "";
    }
  }

  function updateStringValue(v: StreetFeatureType | "") {
    stringValue = typeof v == "object" ? `custom_${v.custom}` : v;
  }

  $: choices = makeChoices($state.proposed.customFeatures);

  function makeChoices(customFeatures: CustomFeatures): [string, string][] {
    // @ts-expect-error TODO Need to make pairs handle readonly types
    let list = pairs(streetFeatureTypes);
    for (let [id, feature] of Object.entries(customFeatures)) {
      list.push([`custom_${id}`, `Custom: ${feature.name}`]);
    }
    return list;
  }
</script>

<div>
  <Select
    label="Street feature type"
    emptyOption
    {choices}
    bind:value={stringValue}
  />

  {#if value}
    <p>
      {sectionType} minimum width (m): {getWidths(
        value,
        $state.proposed.trafficData,
        $state.proposed.customFeatures,
        leftFeature,
        rightFeature,
      )[sectionType == "Desirable" ? 0 : 1]}
    </p>

    {#if buffers == "left"}
      <WarningText>
        Consider buffer to left <SecondaryButton
          on:click={() => dispatch("addBuffer", -1)}
        >
          Add
        </SecondaryButton>
      </WarningText>
    {:else if buffers == "right"}
      <WarningText>
        Consider buffer to right <SecondaryButton
          on:click={() => dispatch("addBuffer", 1)}
        >
          Add
        </SecondaryButton>
      </WarningText>
    {:else if buffers == "both"}
      <WarningText>
        Consider buffer to left and right <SecondaryButton
          on:click={() => {
            dispatch("addBuffer", -1);
            dispatch("addBuffer", 1);
          }}
        >
          Add
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
