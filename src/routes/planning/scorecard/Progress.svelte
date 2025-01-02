<script lang="ts">
  import { base } from "$app/paths";
  import { state, type State } from "../data";
  import { criteria } from "../lists";

  export let currentIdx: number;

  function formatIndex(idx: number): string {
    return (idx + 1).toString().padStart(2, "0");
  }

  $: completed = getCompleted($state);
  function getCompleted(_: State): boolean[] {
    return Array.from(Array(criteria.length).keys()).map(
      (idx) => $state.ratings[idx] != "",
    );
  }
</script>

<ol>
  {#each criteria as label, idx}
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
