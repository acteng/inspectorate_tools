<script lang="ts">
  import { state, type State } from "../data";
  import { base } from "$app/paths";

  export let currentIdx: number;

  let startIdx = 1;

  let questions = [
    //"SOCIAL ACTIVITY",
    "Street Engagement for Children",
    "Social Space",
    "Diversity of Activities",
    //"PERSONAL SECURITY ",
    "Surveillance and Activity",
    "Forward Visibility and Escape Routes",
    "Visibility of Others",
    //"CHARACTER AND LEGIBILITY",
    "Maintenance and Upkeep",
    "Street Network Layout",
    "Place and Movement",
    "Impact of Street Design on Behaviour",
    "Enforcement of Loading and Parking",
    "Street Clutter",
    "Consistency of Materials and Street Furniture",
    "Visual Interest",
    "Cultural Significance",
    "Street Features that Support Walking, Wheeling and Cycling",
    //"ENVIRONMENT",
    "Drainage and Water",
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
        $state.streetPlacemakingCheck.existingScores[idx] != "" &&
        $state.streetPlacemakingCheck.proposedScores[idx] != "",
    );
  }
</script>

<ol>
  {#each questions as label, idx}
    <li>
      <div style="display: flex; justify-content: space-between">
        {#if currentIdx - startIdx != idx}
          <a
            href="{base}/route_check/street_placemaking_check/sp{formatIndex(
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
