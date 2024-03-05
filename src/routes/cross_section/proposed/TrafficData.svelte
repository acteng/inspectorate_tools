<script lang="ts">
  import { pairs } from "$lib";
  import { CollapsibleCard, Select, NumberInput } from "govuk-svelte";
  import { state } from "../data";

  export let valid: boolean;

  $: valid =
    $state.proposed.trafficData.flowOneWay != "" &&
    $state.proposed.trafficData.flowTwoWay != "" &&
    $state.proposed.trafficData.flowSharedUse != "" &&
    $state.proposed.trafficData.trafficFlow != "" &&
    $state.proposed.trafficData.speedLimit != "" &&
    $state.proposed.trafficData.observedSpeed != undefined &&
    $state.proposed.trafficData.streetFunction != "";
</script>

<CollapsibleCard label="Traffic data and additional information">
  <Select
    label="Expected peak hour cycle flow: 1-way cycle tracks"
    emptyOption
    choices={pairs(["<200", "200-800", ">800"])}
    bind:value={$state.proposed.trafficData.flowOneWay}
  />
  <Select
    label="Expected peak hour cycle flow: 2-way cycle tracks"
    emptyOption
    choices={pairs(["<300", "300-1,000", ">1,000"])}
    bind:value={$state.proposed.trafficData.flowTwoWay}
  />
  <Select
    label="Expected peak hour cycle flow: shared use cycle tracks"
    emptyOption
    choices={pairs(["<300", ">300"])}
    bind:value={$state.proposed.trafficData.flowSharedUse}
  />
  <Select
    label="Traffic flow (vpd)"
    emptyOption
    choices={pairs(["<2,500", "2,500-5,000", "5,000-10,000", ">10,000"])}
    bind:value={$state.proposed.trafficData.trafficFlow}
  />
  <Select
    label="Speed limit (MPH)"
    emptyOption
    choices={pairs(["<30", "30", "40", "50", "60", "70"])}
    bind:value={$state.proposed.trafficData.speedLimit}
  />
  <NumberInput
    label="Observed 85th percentile speed (MPH)"
    width={3}
    min={0}
    max={120}
    bind:value={$state.proposed.trafficData.observedSpeed}
  />
  <Select
    label="Street function"
    emptyOption
    choices={pairs([
      "High Street (active frontages)",
      "Residential street",
      "Local distributor road",
    ])}
    bind:value={$state.proposed.trafficData.streetFunction}
  />
</CollapsibleCard>
