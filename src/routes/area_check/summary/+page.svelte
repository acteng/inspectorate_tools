<script lang="ts">
  import { pairs, DecimalInput, SelectWithCustom } from "$lib";
  import { Select, TextInput, TextArea } from "govuk-svelte";
  import { state } from "../data";
  import {
    authorities,
    transportOrCombinedAuthorities,
    regions,
    fundingProgrammes,
    designStages,
  } from "$lib/lists";
  import NetworkMap from "./NetworkMap.svelte";
  import type { FeatureCollection } from "geojson";
  import turfArea from "@turf/area";

  // TODO https://design-system.service.gov.uk/components/date-input/

  $: areaHint = getAreaHint($state.summary.networkMap);
  function getAreaHint(gj: FeatureCollection): number | null {
    let sum = 0;
    for (let f of gj.features) {
      if (f.geometry.type == "Polygon") {
        sum += turfArea(f);
      }
    }
    return sum > 0 ? sum : null;
  }
</script>

<div class="govuk-width-container">
  <TextInput
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

  <TextInput
    label="Inspector email address"
    bind:value={$state.summary.inspectorEmail}
  />

  {#if areaHint}
    <p>
      Polygons in the Network Map cover a total of <b>
        {(areaHint * 1e-6).toFixed(2)}
      </b>
      squared kilometers. Depending what that map represents, you can use this value
      directly.
    </p>
  {/if}

  <DecimalInput
    label="Scheme area size (km²)"
    bind:value={$state.summary.schemeAreaSizeKm2}
    width={6}
    min={0}
  />

  <TextArea label="Notes" bind:value={$state.summary.notes} />

  <NetworkMap />
</div>
