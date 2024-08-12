<script lang="ts">
  import { Radio, SecondaryButton } from "govuk-svelte";
  import { pairs, ExternalLink, Modal } from "$lib";
  import { guidance, type GuidanceObject, type JunctionType } from "./data";

  let open = false;

  let junctionTypes = Object.keys(guidance) as JunctionType[];
  let selectedJunctionType: JunctionType = junctionTypes[0];
  let movementTypes: string[] = [];
  let selectedMovementType: string = "";

  $: {
    movementTypes = getMovementTypes(selectedJunctionType);
    if (movementTypes.length === 1) {
      selectedMovementType = movementTypes[0];
    }
  }

  $: guidanceObject = getGuidanceObject(
    selectedJunctionType,
    selectedMovementType,
  );

  function getMovementTypes(junctionType: JunctionType): string[] {
    let result = Object.keys(guidance[junctionType]).filter(
      (key) => key !== "summary" && key !== "otherJunctionTypeWhichApplies",
    );
    let otherJunctionTypeWhichApplies = guidance[junctionType]
      .otherJunctionTypeWhichApplies as JunctionType | "";
    if (otherJunctionTypeWhichApplies) {
      result = result.concat(
        Object.keys(guidance[otherJunctionTypeWhichApplies]).filter(
          (key) => key !== "summary" && key !== "otherJunctionTypeWhichApplies",
        ),
      );
    }
    return result;
  }

  function getGuidanceObject(
    junctionType: JunctionType,
    movementType: string,
  ): GuidanceObject {
    if (!movementTypes.includes(movementType)) {
      selectedMovementType = movementTypes[0];
      movementType = movementTypes[0];
    }

    // @ts-expect-error it's a faff to properly scope the type of this data
    let specificGuidance = guidance[junctionType][movementType];

    let otherJunctionTypeWhichApplies =
      guidance[junctionType].otherJunctionTypeWhichApplies;

    // @ts-expect-error it's a faff to properly scope the type of this data
    if (!specificGuidance && guidance[otherJunctionTypeWhichApplies]) {
      // @ts-expect-error it's a faff to properly scope the type of this data
      specificGuidance = guidance[otherJunctionTypeWhichApplies][movementType];
    }

    let result = JSON.parse(
      JSON.stringify(guidance["Any type of junction"]["All movements"]),
    );
    if (
      junctionType === "Any type of junction" &&
      movementType === "All movements"
    ) {
      return result;
    }

    if (
      // @ts-expect-error it's a faff to properly scope the type of this data
      guidance[junctionType]["All movements"]
    ) {
      // @ts-expect-error it's a faff to properly scope the type of this data
      let guidanceToAdd = guidance[junctionType]["All movements"];
      result.scoreZero = result.scoreZero.concat(guidanceToAdd.scoreZero);
      result.scoreOne = result.scoreOne.concat(guidanceToAdd.scoreOne);
      result.scoreTwo = result.scoreTwo.concat(guidanceToAdd.scoreTwo);
    }
    if (specificGuidance) {
      result.scoreZero = result.scoreZero.concat(specificGuidance.scoreZero);
      result.scoreOne = result.scoreOne.concat(specificGuidance.scoreOne);
      result.scoreTwo = result.scoreTwo.concat(specificGuidance.scoreTwo);
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
  {#if guidanceObject}
    <h3>{`${selectedJunctionType}: ${selectedMovementType}`}</h3>
    <table>
      <tr>
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
      <tr>
        <td class="score-zero">
          <ul>
            {#each guidanceObject.scoreZero as bulletPoint}
              <li>{bulletPoint}</li>
            {/each}
          </ul>
        </td>
        <td class="score-one">
          <ul>
            {#each guidanceObject.scoreOne as bulletPoint}
              <li>{bulletPoint}</li>
            {/each}
          </ul>
        </td>
        <td class="score-two">
          <ul>
            {#each guidanceObject.scoreTwo as bulletPoint}
              <li>{bulletPoint}</li>
            {/each}
          </ul>
        </td>
      </tr>
    </table>
  {/if}

  <SecondaryButton on:click={() => (open = false)}>OK</SecondaryButton>
</Modal>

<style>
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
