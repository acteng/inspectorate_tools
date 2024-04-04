<script lang="ts">
  import { state, type State } from "../data";
  import { base } from "$app/paths";

  export let currentIdx: number;

  let questions = [
    "Conflict at Side Roads and Priority Junctions",
    "Conflict at Roundabouts and Signal Junctions",
    "Lane Widths",
    "Trip Hazards",
    "Kerbside Activity",
    "Provision of Crossings",
    "Standard of Crossings",
    "Motor Traffic Speed",
    "Motor Traffic Volume",
    "Pedestrian Crossing Speed",
    "Footway Widths",
    "Effective Width next to Tram Lines",
    "Crossing Angle of Tram/Train Rails",
    "Cycling Surface and Maintenance Defects",
    "Walking/Wheeling Surface and Maintenance Defects",
    "Guard Railing",
  ];

  function formatIndex(idx: number): string {
    return (idx + 1).toString().padStart(2, "0");
  }

  $: completed = getCompleted($state);
  function getCompleted(_: State): boolean[] {
    return Array.from(Array(questions.length).keys()).map(
      (idx) =>
        $state.safetyCheck.existingScores[idx] != "" &&
        $state.safetyCheck.proposedScores[idx] != "",
    );
  }
</script>

<ol>
  {#each questions as label, idx}
    <li>
      <div style="display: flex; justify-content: space-between">
        {#if currentIdx - 1 != idx}
          <a href="{base}/route_check/safety_check/sa{formatIndex(idx)}">
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
