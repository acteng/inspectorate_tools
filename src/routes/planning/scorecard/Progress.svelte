<script lang="ts">
  import { state, type State } from "../data";
  import { base } from "$app/paths";

  export let currentIdx: number;

  let questions = [
    "Trip generation and assignment",
    "Active travel route audit",
    "Pedestrian access to local amenities",
    "Cycling accessibility",
    "Access to public transport",
    "Off-site transport infrastructure",
    "Site permeability",
    "Placemaking",
    "Cycle parking and trip-end facilities",
    "Travel planning",
  ];

  function formatIndex(idx: number): string {
    return (idx + 1).toString().padStart(2, "0");
  }

  $: completed = getCompleted($state);
  function getCompleted(_: State): boolean[] {
    return Array.from(Array(questions.length).keys()).map(
      (idx) => $state.ratings[idx] != "",
    );
  }
</script>

<ol>
  {#each questions as label, idx}
    <li>
      <div class="progress-list-item">
        {#if currentIdx - 1 != idx}
          <a href="{base}/planning/scorecard/q{formatIndex(idx)}">{label}</a>
        {:else}
          {label}
        {/if}
        {#if completed[idx]}
          <strong class="govuk-tag govuk-tag--green tag-row">&#9745;</strong>
        {:else}
          <strong class="govuk-tag govuk-tag--red tag-row">&#9746;</strong>
        {/if}
      </div>
    </li>
  {/each}
</ol>

<style>
  .tag-row {
    margin: 1px;
  }

  .progress-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
