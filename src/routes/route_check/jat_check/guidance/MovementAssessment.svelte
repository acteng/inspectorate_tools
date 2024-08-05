<script lang="ts">
  export let junctionType: string;
  export let cycleMovement: string;
  export let scoreZeroBullets: string[];
  export let scoreOneBullets: string[];
  export let scoreTwoBullets: string[];
</script>

<h3>{junctionType}: {cycleMovement}</h3>
<table>
  <tr>
    <th class="has-hover score-zero-header">
      Score = 0
      <span class="hover-text">
        Suitable only for confident existing cyclists, and may be avoided by
        some experienced cyclists Conditions are most likely to give rise to the
        most common collision types
      </span>
    </th>
    <th class="has-hover score-one-header">
      Score = 1
      <span class="hover-text">
        Likely to be more acceptable to most cyclists, but may still pose
        problems for less confident or new cyclists The risk of collisions has
        been reduced by design layout or traffic management interventions
      </span>
    </th>
    <th class="has-hover score-two-header">
      Score = 2
      <span class="hover-text">
        Suitable for all potential and existing cyclists The potential for
        collisions has been removed, or managed to a high standard of safety for
        cyclists
      </span>
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

  td, th {
    padding: 0.25em;
  }

  .has-hover {
    position: relative;
  }
  .hover-text {
    visibility: hidden;
    position: absolute;
    z-index: 1;
  }
  .has-hover:hover .hover-text {
    visibility: visible;
  }
</style>
