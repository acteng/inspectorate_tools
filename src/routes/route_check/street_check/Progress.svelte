<script lang="ts">
  import { state, type State } from "../data";
  import { base } from "$app/paths";

  export let currentIdx: number;

  let startIdx = 17;

  let questions = [
    //"ACCESSIBILITY",
    "Gradient",
    "Tactile Information and Signal Equipment",
    "Barriers",
    "Bus Stops",
    "Wheelchair Access",
    "Access to Taxis and Blue Badge Parking",
    "Access to Toilets",
    //"COMFORT",
    "Cycling Surface Material",
    "Walking/Wheeling Surface Material",
    "Effective Width for Cyclists",
    //"DIRECTNESS",
    "Deviation of Cycle Route",
    "Pedestrian Crossing Locations",
    "Cyclist Delay at Junctions",
    "Cyclist Delay on Links",
    "Pedestrian Delay at Junctions",
    "Pedestrian Delay at Standalone Signal Crossings",
    //"ATTRACTIVENESS",
    "Wayfinding",
    "Places to Rest",
    "Places to Shelter",
    "Lighting",
    "Cycle Parking",
    "Impact of Cycling on Walking",
    //"COHESION",
    "Impact of Motor Traffic on Pedestrians and Cyclists",
    "Transitions for Cyclists",
    "Route Continuity ",
    "Consistency of Route",
  ];

  function formatIndex(idx: number): string {
    return (idx + startIdx).toString().padStart(2, "0");
  }

  $: completed = getCompleted($state);
  function getCompleted(_: State): boolean[] {
    return Array.from(Array(questions.length).keys()).map(
      (idx) =>
        $state.streetCheck.existingScores[idx] != "" &&
        $state.streetCheck.proposedScores[idx] != "",
    );
  }
</script>

<ol>
  {#each questions as label, idx}
    <li>
      <div style="display: flex; justify-content: space-between">
        {#if currentIdx - startIdx != idx}
          <a href="{base}/route_check/street_check/st{formatIndex(idx)}">
            {label}
          </a>
        {:else}
          {label}
        {/if}
        {#if completed[idx]}
          <strong class="govuk-tag govuk-tag--green">Done</strong>
        {:else}
          <strong class="govuk-tag govuk-tag--red">Incomplete</strong>
        {/if}
      </div>
    </li>
  {/each}
</ol>
