<script lang="ts">
  import { Radio, SecondaryButton } from "govuk-svelte";
  import { pairs, ExternalLink, Modal } from "$lib";
  import {
    getGuidance,
    getMovementTypes,
    junctionTypes,
    type JunctionType,
  } from "./data";

  let open = false;

  let junctionType = junctionTypes[0];
  let movementType = getMovementTypes(junctionType)[0];

  function resetMovementType() {
    movementType = getMovementTypes(junctionType)[0];
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
    bind:value={junctionType}
    on:change={resetMovementType}
  />
  {#if getMovementTypes(junctionType).length > 1}
    <Radio
      label="Type of movement"
      choices={pairs(getMovementTypes(junctionType))}
      bind:value={movementType}
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

    {#each getGuidance(junctionType, movementType) as row}
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
