<script lang="ts">
  import { Radio } from "govuk-svelte";
  import { pairs } from "$lib";
  import MovementAssesment from "./MovementAssessment.svelte";
  import { guidance } from "./data.ts";

  let junctionTypes: string[] = Object.keys(guidance);
  let selectedJunctionType: string = junctionTypes[0];
  let movementTypes: string[] = [];
  let selectedMovementType: string = "";

  $: {
    movementTypes = Object.keys(guidance[selectedJunctionType]).filter(
      (key) => key !== "summary",
    );
    if (movementTypes.length === 1) {
      selectedMovementType = movementTypes[0];
    }
  }
</script>

<Radio
  label="What type of junction do you need guidance for"
  choices={pairs(junctionTypes)}
  bind:value={selectedJunctionType}
/>
{#if movementTypes.length > 1}
  <Radio
    label="What type of movement do you need guidance for"
    choices={pairs(movementTypes)}
    bind:value={selectedMovementType}
  />
{/if}

{#if guidance[selectedJunctionType][selectedMovementType]}
  <MovementAssesment
    junctionType={selectedJunctionType}
    cycleMovement={selectedMovementType}
    summary={guidance[selectedJunctionType].summary}
    scoreZeroBullets={guidance[selectedJunctionType][selectedMovementType]
      .scoreZero}
    scoreOneBullets={guidance[selectedJunctionType][selectedMovementType]
      .scoreOne}
    scoreTwoBullets={guidance[selectedJunctionType][selectedMovementType]
      .scoreTwo}
  />
{/if}
