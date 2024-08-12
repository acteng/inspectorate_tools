<script lang="ts">
  import { Radio, SecondaryButton } from "govuk-svelte";
  import { pairs, ExternalLink, Modal } from "$lib";
  import { guidance, type GuidanceObject, type JunctionType } from "./data";

  let open = false;

  let junctionTypes = Object.keys(guidance) as JunctionType[];
  let selectedJunctionType: JunctionType = junctionTypes[0];
  let selectedMovementType: string = "";

  /*$: {
    movementTypes = getMovementTypes(selectedJunctionType);
    if (movementTypes.length === 1) {
      selectedMovementType = movementTypes[0];
    }
  }*/

  $: guidanceRows = getGuidance(selectedJunctionType, selectedMovementType);

  // TODO Reconsider/rethink
  function getMovementTypes(junctionType: JunctionType): string[] {
    return Object.keys(guidance[junctionType]).filter(
      (key) => key != "otherJunctionTypeWhichApplies",
    );
  }

  // TODO Move to data
  function getGuidance(
    junctionType: JunctionType,
    movementType: string,
  ): GuidanceObject[] {
    // If the user changes the junction type, pre-select the first movement type
    /*
    if (!movementTypes.includes(movementType)) {
      selectedMovementType = movementTypes[0];
      movementType = movementTypes[0];
    }*/

    let result = [];

    // Use both filters, if possible
    // @ts-expect-error Missing keys handled below
    let case1 = guidance[junctionType][movementType];
    if (case1) {
      result.push({
        junctionType,
        movementType,
        ...case1,
      });
    }

    // Same junction type, but ignore the movement type
    // @ts-expect-error Missing keys handled below
    let case2 = guidance[junctionType]["All movements"];
    if (case2 && movementType != "All movements") {
      result.push({
        junctionType,
        movementType: "All movements",
        ...case2,
      });
    }

    // Another specified junction type?
    let otherJunctionType =
      guidance[junctionType].otherJunctionTypeWhichApplies;
    if (otherJunctionType) {
      // There's exactly one time this happens, and the movement types don't match up
      // TODO Wait, then why is this helpful at all?
      // @ts-expect-error Missing keys handled below
      let case3 = guidance[otherJunctionType]["All movements"];
      if (case3) {
        result.push({
          junctionType: otherJunctionType,
          movementType: "All movements",
          ...case3,
        });
      }
    }

    // Fallback to the most general case
    if (junctionType != "Any type of junction") {
      let case4 = guidance["Any type of junction"]["All movements"];
      if (case4) {
        result.push({
          junctionType: "Any type of junction",
          movementType: "All movements",
          ...case4,
        });
      }
    }

    return result;
  }
</script>

<div>
  <SecondaryButton on:click={() => (open = true)}>
    LTN 1/20 scoring guidance
  </SecondaryButton>
</div>
<Modal title="LTN 1/20 scoring guidance" bind:open viewWidth={80}>
  <p>
    Guidance from <ExternalLink
      href="https://assets.publishing.service.gov.uk/media/5ffa1f96d3bf7f65d9e35825/cycle-infrastructure-design-ltn-1-20.pdf"
    >
      LTN 1/20 appendix B
    </ExternalLink>.
  </p>

  <Radio
    label="Type of junction"
    choices={pairs(junctionTypes)}
    bind:value={selectedJunctionType}
  />
  {#if getMovementTypes(selectedJunctionType).length > 1}
    <Radio
      label="Type of movement"
      choices={pairs(getMovementTypes(selectedJunctionType))}
      bind:value={selectedMovementType}
    />
  {/if}

  <table>
    <tr>
      <th class="type-header">Type of junction and movement</th>
      <th class="score-zero-header">
        <u>Score = 0</u>
        <br />
        Suitable only for confident existing cyclists, and may be avoided by some
        experienced cyclists Conditions are most likely to give rise to the most
        common collision types
      </th>
      <th class="score-one-header">
        <u>Score = 1</u>
        <br />
        Likely to be more acceptable to most cyclists, but may still pose problems
        for less confident or new cyclists The risk of collisions has been reduced
        by design layout or traffic management interventions
      </th>
      <th class="score-two-header">
        <u>Score = 2</u>
        <br />
        Suitable for all potential and existing cyclists The potential for collisions
        has been removed, or managed to a high standard of safety for cyclists
      </th>
    </tr>

    {#each guidanceRows as row}
      <tr>
        <td class="type-row">
          {row.junctionType}
          <br />
          <br />
          {row.movementType}
        </td>
        <td class="score-zero">
          <ul>
            {#each row.scoreZero as x}
              <li>{x}</li>
            {/each}
          </ul>
        </td>
        <td class="score-one">
          <ul>
            {#each row.scoreOne as x}
              <li>{x}</li>
            {/each}
          </ul>
        </td>
        <td class="score-two">
          <ul>
            {#each row.scoreTwo as x}
              <li>{x}</li>
            {/each}
          </ul>
        </td>
      </tr>
    {/each}
  </table>

  <SecondaryButton on:click={() => (open = false)}>OK</SecondaryButton>
</Modal>

<style>
  .type-header {
    color: white;
    background-color: #287f6f;
  }
  .score-zero-header {
    color: white;
    background-color: #e40521;
  }
  .score-one-header {
    color: white;
    background-color: #c89213;
  }
  .score-two-header {
    color: white;
    background-color: #61a730;
  }

  .type-row {
    background-color: #cfdbd7;
  }
  .score-zero {
    background-color: #fbd9ce;
  }
  .score-one {
    background-color: #f5e8d3;
  }
  .score-two {
    background-color: #e5edd8;
  }

  td,
  th {
    padding: 0.25em;
  }
</style>
