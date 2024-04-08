<script lang="ts">
  import { state, type State } from "../data";
  import { base } from "$app/paths";

  export let currentIdx: number;

  let startIdx = 1;

  let questions = [
    //"SOCIAL ACTIVITY",
    "Engagement for Children",
    "Social Space",
    "Points of Interest",
    //"PERSONAL SECURITY ",
    //"Note: All three personal security metrics below are double weighted when the Path Placemaking score is calculated. This is explained further in the Route Check user manual.",
    "Surveillance and Activity",
    "Forward Visibility and Escape Routes",
    "Visibility of Others",
    //"CHARACTER AND LEGIBILITY",
    "Maintenance and Upkeep",
    "Consistency of Materials and Path Furniture",
    "Visual Interest",
    "Features to Support Walking, Wheeling and Cycling",
    //"ENVIRONMENT",
    "Trees",
    "Planting",
    "Ancillary Features to Support Fauna",
    "Sustainable Materials",
    "Air Pollution - Exposure",
    "Air Pollution - Proximity",
    "Noise Pollution",
    "Light Pollution",
    "Sunlight",
  ];

  function formatIndex(idx: number): string {
    return (idx + startIdx).toString().padStart(2, "0");
  }

  $: completed = getCompleted($state);
  function getCompleted(_: State): boolean[] {
    return Array.from(Array(questions.length).keys()).map(
      (idx) =>
        $state.pathPlacemakingCheck.existingScores[idx] != "" &&
        $state.pathPlacemakingCheck.proposedScores[idx] != "",
    );
  }
</script>

<ol>
  {#each questions as label, idx}
    <li>
      <div style="display: flex; justify-content: space-between">
        {#if currentIdx - startIdx != idx}
          <a
            href="{base}/route_check/path_placemaking_check/pp{formatIndex(
              idx,
            )}"
          >
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
