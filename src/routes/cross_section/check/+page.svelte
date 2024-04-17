<script lang="ts">
  import { SecondaryButton } from "govuk-svelte";
  import { state } from "../data";
  import { Breadcrumbs } from "$lib";
  import HomogeneousCard from "./HomogeneousCard.svelte";
  import PinchPointCard from "./PinchPointCard.svelte";
  import { calculateTotalWidth } from "../proposed/logic";

  // Calculate here and pass down to every card
  $: desirableTotal = calculateTotalWidth($state, "Desirable");
  $: absoluteTotal = calculateTotalWidth($state, "Absolute");

  function addHomogeneousSection() {
    $state.checks.homogeneousSections = [
      ...$state.checks.homogeneousSections,
      {
        availableWidth: 0.0,
        notes: "",
      },
    ];
  }

  function deleteHomogeneousSection(i: number) {
    $state.checks.homogeneousSections.splice(i, 1);
    $state.checks.homogeneousSections = $state.checks.homogeneousSections;
  }

  function addPinchPoint() {
    $state.checks.pinchPoints = [
      ...$state.checks.pinchPoints,
      {
        location: "",
        availableWidth: 0.0,
        notes: "",
      },
    ];
  }

  function deletePinchPoint(i: number) {
    $state.checks.pinchPoints.splice(i, 1);
    $state.checks.pinchPoints = $state.checks.pinchPoints;
  }
</script>

<Breadcrumbs
  links={[
    ["Tools", "/"],
    ["Route cross-section", "/cross_section"],
  ]}
  current="Cross-Section Check"
/>

<p>Desirable Minimum requires: {desirableTotal} m</p>
<p>Absolute Minimum requires: {absoluteTotal} m</p>

<h2>
  Checking possible cross-sections of <u>homogeneous sections</u>
  of route along the proposed corridor
</h2>
<p>
  At regular intervals along the corridor measure and enter the available width
  to see if your proposed cross-sections can be accommodated
</p>

<SecondaryButton on:click={addHomogeneousSection}>Add</SecondaryButton>

<div style="display: flex; flex-direction: row; overflow-x: scroll">
  {#each $state.checks.homogeneousSections as _, i (i)}
    <HomogeneousCard
      {i}
      on:delete={() => deleteHomogeneousSection(i)}
      {desirableTotal}
      {absoluteTotal}
    />
  {/each}
</div>

<hr />

<h2>
  Checking possible cross-sections of any <u>
    constrained or atypical locations
  </u>
  along the proposed corridor
</h2>
<p>
  At key constraints along the corridor, measure and enter the available width
  to see if your proposed cross-sections can be accommodated
</p>

<SecondaryButton on:click={addPinchPoint}>Add</SecondaryButton>

<div style="display: flex; flex-direction: row: overflow-x: scroll">
  {#each $state.checks.pinchPoints as _, i (i)}
    <PinchPointCard
      {i}
      on:delete={() => deletePinchPoint(i)}
      {desirableTotal}
      {absoluteTotal}
    />
  {/each}
</div>
