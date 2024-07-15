<script lang="ts">
  import { pairs, ExternalLink, DateInput } from "$lib";
  import {
    Select,
    TextInput,
    TextArea,
    DecimalInput,
    SelectWithCustom,
    Radio,
  } from "govuk-svelte";
  import { state } from "../data";
  import {
    authorities,
    transportOrCombinedAuthorities,
    regions,
    fundingProgrammes,
    designStages,
  } from "$lib/lists";
  import { ContextualMapEntry } from "$lib/map";
  import type { FeatureCollection } from "geojson";
  import turfLength from "@turf/length";

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
  <DateInput
    label="Date of design review"
    bind:value={$state.summary.dateDesignReview}
  />
  <TextInput
    label="Scheme reference"
    bind:value={$state.summary.schemeReference}
  />
  <TextInput label="Scheme name" bind:value={$state.summary.schemeName} />
  <TextArea label="Scheme summary" bind:value={$state.summary.schemeSummary} />
  <TextArea
    label="Scheme information reviewed"
    bind:value={$state.summary.schemeInfoReviewed}
  />

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
  <Radio
    legend="Funding programme"
    choices={pairs(fundingProgrammes)}
    bind:value={$state.summary.fundingProgramme}
  />
  <Radio
    legend="Design stage"
    choices={pairs(designStages)}
    bind:value={$state.summary.designStage}
  />
  <TextArea
    label="Funding conditions"
    bind:value={$state.summary.fundingConditions}
  />

  <TextInput
    label="Inspector email address"
    bind:value={$state.summary.inspectorEmail}
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

  <hr />

  <Radio
    legend="Route Check Type (Street or Path)"
    hint="What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)"
    choices={[
      ["street", "Street Check"],
      ["path", "Path Check"],
    ]}
    bind:value={$state.summary.checkType}
  />

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
