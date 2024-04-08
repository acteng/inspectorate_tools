<script lang="ts">
  import { state, type State } from "../data";
  import { base } from "$app/paths";

  export let currentIdx: number;

  let startIdx = 17;

  let questions = [
    //"ACCESSIBILITY",
    "Barriers",
    "Steps",
    "Gradient",
    "Tactile Information and Signal Equipment",
    "Ability to Turn Around",
    //"COMFORT",
    "Width of Shared Use Spaces",
    "Width of Walking and Wheeling Spaces",
    "Width of Cycling Spaces",
    "Width of Horse Riding Spaces",
    "Shared Use Surface",
    "Walking and Wheeling Surface",
    "Cycling Surface",
    "Horse Riding Surface",
    "Suitability of Crossings",
    "Accessibility of Access Points",
    "Drainage",
    //"DIRECTNESS",
    "Deviation of Path Against Straight Line",
    "Deviation of Path Against Nearest Alternative Route",
    "Crossing Locations",
    "Delay at Crossings",
    //"ATTRACTIVENESS",
    "Places to Rest",
    "Places to Shelter",
    "Lighting",
    "Cycle Parking",
    "Impact of Users on Each Other",
    //"COHESION",
    "Ease of Navigation",
    "Wayfinding",
    "Proximity to Destinations",
    "Quality of Connections",
    "Connectivity with Other Horse Riding Routes",
  ];

  function formatIndex(idx: number): string {
    return (idx + startIdx).toString().padStart(2, "0");
  }

  $: completed = getCompleted($state);
  function getCompleted(_: State): boolean[] {
    return Array.from(Array(questions.length).keys()).map(
      (idx) =>
        $state.pathCheck.existingScores[idx] != "" &&
        $state.pathCheck.proposedScores[idx] != "",
    );
  }
</script>

<ol>
  {#each questions as label, idx}
    <li>
      <div style="display: flex; justify-content: space-between">
        {#if currentIdx - startIdx != idx}
          <a href="{base}/route_check/path_check/pa{formatIndex(idx)}">
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
