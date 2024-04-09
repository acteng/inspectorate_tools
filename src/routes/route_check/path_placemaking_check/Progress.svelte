<script lang="ts">
  import { state, type State } from "../data";
  import { base } from "$app/paths";
  import { sum } from "$lib";

  export let currentIdx: number;

  let startIdx = 1;

  type Section = {
    section: string;
    notes?: string;
    pages: string[];
  };
  let sections: Section[] = [
    {
      section: "Social activity",
      pages: ["Engagement for Children", "Social Space", "Points of Interest"],
    },
    {
      section: "Personal security",
      notes:
        "Note: All three personal security metrics below are double weighted when the Path Placemaking score is calculated. This is explained further in the Route Check user manual.",
      pages: [
        "Surveillance and Activity",
        "Forward Visibility and Escape Routes",
        "Visibility of Others",
      ],
    },
    {
      section: "Character and legibility",
      pages: [
        "Maintenance and Upkeep",
        "Consistency of Materials and Path Furniture",
        "Visual Interest",
        "Features to Support Walking, Wheeling and Cycling",
      ],
    },
    {
      section: "Environment",
      pages: [
        "Trees",
        "Planting",
        "Ancillary Features to Support Fauna",
        "Sustainable Materials",
        "Air Pollution - Exposure",
        "Air Pollution - Proximity",
        "Noise Pollution",
        "Light Pollution",
        "Sunlight",
      ],
    },
  ];

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
        $state.pathPlacemakingCheck.existingScores[idx] != "" &&
        $state.pathPlacemakingCheck.proposedScores[idx] != "",
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
            <a
              href="{base}/route_check/path_placemaking_check/pp{formatIndex(
                item.idx,
              )}"
            >
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
