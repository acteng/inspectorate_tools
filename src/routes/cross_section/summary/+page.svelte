<script lang="ts">
  import turfLength from "@turf/length";
  import { ExternalLink, pairs } from "$lib";
  import {
    authorities,
    designStages,
    fundingProgrammes,
    regions,
    transportOrCombinedAuthorities,
  } from "$lib/lists";
  import { ContextualMapEntry } from "$lib/map";
  import type { FeatureCollection } from "geojson";
  import {
    DecimalInput,
    Select,
    SelectWithCustom,
    TextArea,
    TextInput,
  } from "govuk-svelte";
  import { state } from "../data";

  $: lengthHint = getLengthHint($state.summary.networkMap);
  function getLengthHint(gj: FeatureCollection): number | null {
    let sum = 0;
    for (let f of gj.features) {
      if (f.geometry.type == "LineString") {
        sum += turfLength(f, { units: "kilometers" });
      }
    }
    return sum > 0 ? sum : null;
  }
</script>

<div class="govuk-width-container">
  <TextInput
    label="Scheme reference"
    bind:value={$state.summary.schemeReference}
  />
  <TextInput label="Scheme name" bind:value={$state.summary.schemeName} />
  <TextArea label="Scheme summary" bind:value={$state.summary.schemeSummary} />

  <Select
    label="Authority"
    emptyOption
    choices={pairs(authorities)}
    bind:value={$state.summary.authority}
  />
  <Select
    label="Transport / Combined Authority"
    emptyOption
    choices={pairs(transportOrCombinedAuthorities)}
    bind:value={$state.summary.transportOrCombinedAuthority}
  />
  <SelectWithCustom
    label="Region"
    emptyOption
    choices={pairs(regions)}
    bind:value={$state.summary.region}
  />
  <SelectWithCustom
    label="Funding programme"
    emptyOption
    choices={pairs(fundingProgrammes)}
    bind:value={$state.summary.fundingProgramme}
  />
  <SelectWithCustom
    label="Design stage"
    emptyOption
    choices={pairs(designStages)}
    bind:value={$state.summary.designStage}
  />
  <TextArea
    label="Funding conditions"
    bind:value={$state.summary.fundingConditions}
  />

  {#if lengthHint}
    <p>
      LineStrings in the Network Map cover a total of <b>
        {lengthHint.toFixed(2)}
      </b>
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.
    </p>
  {/if}

  <DecimalInput
    label="Route length assessed here (km)"
    bind:value={$state.summary.assessedRouteLengthKm}
    width={6}
    min={0}
  />
  <DecimalInput
    label="Total route length (km)"
    bind:value={$state.summary.totalRouteLengthKm}
    width={6}
    min={0}
  />

  <TextArea label="Notes" bind:value={$state.summary.notes} />

  <ContextualMapEntry bind:gj={$state.summary.networkMap}>
    <ol>
      <li>
        Go to the <ExternalLink href="https://acteng.github.io/atip">
          Scheme Sketcher
        </ExternalLink> tool
      </li>
      <li>Choose the area best covering this scheme</li>
      <li>
        Use the <i>New route</i>
        tool to sketch the route. It can contain segments snapped to existing roads
        or free-hand segments.
      </li>
      <li>
        Optionally, use the <i>Split route</i>
        tool to denote just the sections assessed in this file.
      </li>
      <li>
        You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map
      </li>
      <li>
        Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>
      </li>
      <li>Load the saved file above</li>
    </ol>
  </ContextualMapEntry>
</div>
