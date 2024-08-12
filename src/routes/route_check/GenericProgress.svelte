<script lang="ts">
  import { state, type State, type Scorecard } from "./data";
  import { base } from "$app/paths";
  import { sum } from "$lib";
  import { colors, scoreToColor } from "$lib/colors";

  export let sections: Section[];

  export let startIdx: number;
  // When currentIdx is -1, this component renders a large summary table, meant
  // for the scorecard overview page. Otherwise, it renders a thin list for navigation.
  export let currentIdx: number;
  export let scorecardKey: keyof State;
  // Not including {base}
  export let urlBase: string;

  $: scores = $state[scorecardKey] as Scorecard;

  type Section = {
    section: string;
    notes?: string;
    pages: string[];
  };

  type Item =
    | {
        kind: "page";
        idx: number;
        label: string;
      }
    | {
        kind: "section";
        label: string;
        notes?: string;
      };

  function flatten(sections: Section[]): Item[] {
    let items = [];
    let idx = 0;
    for (let section of sections) {
      items.push({
        kind: "section" as const,
        label: section.section,
        notes: section.notes,
      });
      for (let page of section.pages) {
        items.push({
          kind: "page" as const,
          idx,
          label: page,
        });
        idx++;
      }
    }
    return items;
  }

  let numQuestions = sum(sections.map((section) => section.pages.length));

  function formatIndex(idx: number): string {
    return (idx + startIdx).toString().padStart(2, "0");
  }

  $: completed = getCompleted(scores);
  function getCompleted(scores: Scorecard): boolean[] {
    return Array.from(Array(numQuestions).keys()).map(
      (idx) =>
        scores.existingScores[idx] != "" && scores.proposedScores[idx] != "",
    );
  }
</script>

{#if currentIdx == -1}
  <table>
    <tr>
      <th>Metric</th>
      <th>Completed</th>
      <th>Existing</th>
      <th>Proposed</th>
    </tr>
    {#each flatten(sections) as item}
      <tr>
        {#if item.kind == "section"}
          <td colspan="4">
            <b>{item.label}</b>
            {#if item.notes}
              <p>{item.notes}</p>
            {/if}
          </td>
        {:else}
          <td>
            <a href="{base}{urlBase}{formatIndex(item.idx)}">
              {startIdx + item.idx}. {item.label}
            </a>
          </td>
          <td>
            {#if completed[item.idx]}
              <strong class="govuk-tag govuk-tag--green tag-row">
                &#9745;
              </strong>
            {:else}
              <strong class="govuk-tag govuk-tag--red tag-row">&#9746;</strong>
            {/if}
          </td>
          <td>
            <span
              class="box"
              style:background={scoreToColor[scores.existingScores[item.idx]]
                .background}
              style:color={scoreToColor[scores.existingScores[item.idx]].font}
            >
              {@html scores.existingScores[item.idx] || "&nbsp;"}
            </span>
          </td>
          <td>
            <span
              class="box"
              style:background={scoreToColor[scores.proposedScores[item.idx]]
                .background}
              style:color={scoreToColor[scores.proposedScores[item.idx]].font}
            >
              {@html scores.proposedScores[item.idx] || "&nbsp;"}
            </span>
          </td>
        {/if}
      </tr>
    {/each}
  </table>
{:else}
  <ol start={startIdx}>
    {#each flatten(sections) as item}
      {#if item.kind == "section"}
        <h3>
          {item.label}
        </h3>
      {:else}
        <li
          style="list-style-type: none"
          class:current-li={currentIdx - 1 == item.idx}
        >
          <span class="progress-list-item">
            {#if currentIdx - 1 != item.idx}
              <a
                href="{base}{urlBase}{formatIndex(item.idx)}"
                class="govuk-link--no-underline hack-no-visited-state"
              >
                {startIdx + item.idx}. {item.label}
              </a>
            {:else}
              {startIdx + item.idx}. {item.label}
            {/if}

            {#if completed[item.idx]}
              <strong class="govuk-tag govuk-tag--green tag-row">
                &#9745;
              </strong>
            {:else}
              <strong class="govuk-tag govuk-tag--red tag-row">&#9746;</strong>
            {/if}
          </span>
        </li>
      {/if}
    {/each}
  </ol>
{/if}

<style>
  .tag-row {
    margin: 1px;
  }
  .progress-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box {
    display: inline-block;
    width: 40px;
    border: 1px solid black;
    padding: 4px;
    text-align: center;
  }
  h3 {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
  }
  .current-li {
    color: #007161;
    font-weight: bold;
    margin-left: -15px;
    padding-left: 10px;
    border-left: 5px solid #007161;
  }
  /* govuk-link--no-visited-state doesn't have enough specificity to actually work */
  .hack-no-visited-state:visited {
    color: #1d70b8;
  }
</style>
