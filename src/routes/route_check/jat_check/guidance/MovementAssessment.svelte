<script lang="ts">
  import { Modal } from "$lib";
  import { SecondaryButton } from "govuk-svelte";
  export let junctionType: string;
  export let cycleMovement: string;
  export let summary: string = "";
  export let scoreZeroBullets: string[];
  export let scoreOneBullets: string[];
  export let scoreTwoBullets: string[];

  let showModal = false;

  function openModal() {
    showModal = true;
  }
</script>

<div>
  <SecondaryButton on:click={openModal}>Display guidance</SecondaryButton>
</div>
<Modal title={`Guidance`} bind:open={showModal}>
  <h3>{`${junctionType}: ${cycleMovement}`}</h3>
  {#if summary}
    <p>{summary}</p>
  {/if}
  <table>
    <tr>
      <th class="score-zero-header">
        Score = 0
        <br />
        Suitable only for confident existing cyclists, and may be avoided by some
        experienced cyclists Conditions are most likely to give rise to the most
        common collision types
      </th>
      <th class="score-one-header">
        Score = 1
        <br />
        Likely to be more acceptable to most cyclists, but may still pose problems
        for less confident or new cyclists The risk of collisions has been reduced
        by design layout or traffic management interventions
      </th>
      <th class="has-hover score-two-header">
        Score = 2
        <br />
        Suitable for all potential and existing cyclists The potential for collisions
        has been removed, or managed to a high standard of safety for cyclists
      </th>
    </tr>
    <tr>
      <td class="score-zero">
        <ul>
          {#each scoreZeroBullets as bulletPoint}
            <li>{bulletPoint}</li>
          {/each}
        </ul>
      </td>
      <td class="score-one">
        <ul>
          {#each scoreOneBullets as bulletPoint}
            <li>{bulletPoint}</li>
          {/each}
        </ul>
      </td>
      <td class="score-two">
        <ul>
          {#each scoreTwoBullets as bulletPoint}
            <li>{bulletPoint}</li>
          {/each}
        </ul>
      </td>
    </tr>
  </table>
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
