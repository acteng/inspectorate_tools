<script lang="ts">
  import { CollapsibleCard, Select, NumberInput } from "govuk-svelte";

  let flowOneWay = "";
  let flowTwoWay = "";
  let flowSharedUse = "";
  let trafficFlow = "";
  let speedLimit = "";
  let observedSpeed: number | undefined = undefined;
  let streetFunction = "";

  export let valid: boolean;

  $: valid =
    flowOneWay != "" &&
    flowTwoWay != "" &&
    flowSharedUse != "" &&
    trafficFlow != "" &&
    speedLimit != "" &&
    observedSpeed != undefined &&
    streetFunction != "";

  function pairs(list: string[]): [string, string][] {
    return list.map((x) => [x, x]);
  }
</script>

<CollapsibleCard label="Traffic data and additional information">
  <Select
    label="Expected peak hour cycle flow: 1-way cycle tracks"
    emptyOption
    choices={pairs(["<200", "200-800", ">800"])}
    bind:value={flowOneWay}
  />
  <Select
    label="Expected peak hour cycle flow: 2-way cycle tracks"
    emptyOption
    choices={pairs(["<300", "300-1,000", ">1,000"])}
    bind:value={flowTwoWay}
  />
  <Select
    label="Expected peak hour cycle flow: shared use cycle tracks"
    emptyOption
    choices={pairs(["<300", ">300"])}
    bind:value={flowSharedUse}
  />
  <Select
    label="Traffic flow (vpd)"
    emptyOption
    choices={pairs(["<2,500", "2,500-5,000", "5,000-10,000", ">10,000"])}
    bind:value={trafficFlow}
  />
  <Select
    label="Speed limit (MPH)"
    emptyOption
    choices={pairs(["<30", "30", "40", "50", "60", "70"])}
    bind:value={speedLimit}
  />
  <NumberInput
    label="Observed 85th percentile speed (MPH)"
    width={3}
    min={0}
    max={120}
    bind:value={observedSpeed}
  />
  <Select
    label="Street function"
    emptyOption
    choices={pairs([
      "High Street (active frontages)",
      "Residential street",
      "Local distributor road",
    ])}
    bind:value={streetFunction}
  />
</CollapsibleCard>
