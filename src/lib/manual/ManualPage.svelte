<script lang="ts">
  import { type ManualSection } from "./data";
  import Section from "./Section.svelte";
  import { ClickableCard } from "$lib";

  export let contents: ManualSection[];

  let selectedSection: ManualSection = contents[0];

  console.log(contents);

  function selectSection(i: number) {
    selectedSection = contents[i];
  }
</script>

<div class="flex-box">
  <div class="contents">
    {#each contents as { sectionName, elements }, i}
      <ClickableCard
        name={sectionName}
        on:click={() => {
          selectSection(i);
        }}
        disabled={selectedSection.name === sectionName}
      >
        {#if selectedSection.sectionName === sectionName}
          You are here
        {/if}
      </ClickableCard>
    {/each}
  </div>

  <Section section={selectedSection} />
</div>

<style>
  .flex-box {
    display: flex;
  }

  .contents {
    max-width: 25vw;
    margin-right: 1em;
  }
  img {
    /* max-height: 50px; */
  }
</style>
