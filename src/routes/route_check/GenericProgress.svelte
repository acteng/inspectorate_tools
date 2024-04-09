<script lang="ts">
  import { state, type State } from "./data";
  import { base } from "$app/paths";
  import { sum } from "$lib";

  export let sections: Section[];

  export let startIdx: number;
  export let currentIdx: number;
  export let scorecardKey: keyof State;
  // Not including {base}
  export let urlBase: string;

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

  $: completed = getCompleted($state);
  function getCompleted(_: State): boolean[] {
    return Array.from(Array(numQuestions).keys()).map(
      (idx) =>
        // @ts-expect-error TODO Need to further constrain scorecardKey
        $state[scorecardKey].existingScores[idx] != "" &&
        // @ts-expect-error TODO Need to further constrain scorecardKey
        $state[scorecardKey].proposedScores[idx] != "",
    );
  }
</script>

<ol>
  {#each flatten(sections) as item}
    {#if item.kind == "section"}
      <div style="padding: 20px">
        <u>{item.label}</u>
        {#if item.notes}
          <p>{item.notes}</p>
        {/if}
      </div>
    {:else}
      <li>
        <div style="display: flex; justify-content: space-between">
          {#if currentIdx - startIdx != item.idx}
            <a href="{base}{urlBase}{formatIndex(item.idx)}">
              {item.label}
            </a>
          {:else}
            {item.label}
          {/if}
          {#if completed[item.idx]}
            <strong class="govuk-tag govuk-tag--green">Done</strong>
          {:else}
            <strong class="govuk-tag govuk-tag--red">Incomplete</strong>
          {/if}
        </div>
      </li>
    {/if}
  {/each}
</ol>
