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

  $: effectiveSpeedLimit = calculateEffectiveSpeedLimit(
    $state.proposed.trafficData.speedLimit,
    $state.proposed.trafficData.observedSpeed,
  );

  // TODO Move to a .ts and add tests:

  // normal cases
  // 50, 54 -> 50
  // 50, 56 -> 60

  // highest entry becomes 80
  // 70, 78 -> 80

  // lowest entry counts as 20
  // <30, 15 -> 20
  // <30, 25 -> 30
  function calculateEffectiveSpeedLimit(
    speedLimit: string,
    observed: number | undefined,
  ): number | null {
    if (!speedLimit || !observed) {
      return null;
    }

    // TODO Maybe change the value stored to be more clear
    let speed = speedLimit == "<30" ? 20 : parseInt(speedLimit);

    if (observed > speed * 1.1) {
      // Next highest
      // what happens for <30 and 70?
      return speed + 10;
    }
    return speed;
  }
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

  {#if effectiveSpeedLimit}
    <p>
      Effective speed limit, based on the limit and 85 percentile: {effectiveSpeedLimit}
      mph
    </p>
  {/if}

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
