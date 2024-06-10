<script lang="ts">
  import { type ManualSection } from "./data";
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

  <div class="body">
    <h2>{selectedSection.sectionName}</h2>
    <ol>
      {#each selectedSection.elements as element}
        {#if typeof element === "string"}
          <p><li>{element}</li></p>
        {:else}
          <img src={element.routeToImage} alt={element.explanation} />
          <p>Figure {element.number} - {element.explanation}</p>
        {/if}
      {/each}
    </ol>
  </div>
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
