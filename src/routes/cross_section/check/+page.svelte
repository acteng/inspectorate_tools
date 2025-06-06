<script lang="ts">
  import { SecondaryButton } from "govuk-svelte";
  import { state } from "../data";
  import { calculateTotalWidths } from "../proposed/logic";
  import HomogeneousCard from "./HomogeneousCard.svelte";
  import PinchPointMap from "./PinchPointMap.svelte";

  // Calculate here and pass down to every card
  $: preferredTotals = calculateTotalWidths($state, "Preferred");
  $: compromisedTotals = calculateTotalWidths($state, "Compromised");

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
</script>

<p>
  <u>Preferred</u>
  cross-section requites a desirable minimum width (m): {preferredTotals[0].toFixed(
    2,
  )}
</p>
<p>
  <u>Preferred</u>
  cross-section requites an absolute minimum width (m): {preferredTotals[1].toFixed(
    2,
  )}
</p>

<p>
  <u>Compromised</u>
  cross-section requites a desirable minimum width (m): {compromisedTotals[0].toFixed(
    2,
  )}
</p>
<p>
  <u>Compromised</u>
  cross-section requites an absolute minimum width (m): {compromisedTotals[1].toFixed(
    2,
  )}
</p>

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
  {#each $state.checks.homogeneousSections as section, i (section)}
    <HomogeneousCard
      {i}
      on:delete={() => deleteHomogeneousSection(i)}
      {preferredTotals}
      {compromisedTotals}
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
  to see if your proposed cross-sections can be accommodated. Click the map to
  add a pinch point.
</p>

<PinchPointMap {preferredTotals} {compromisedTotals} />
