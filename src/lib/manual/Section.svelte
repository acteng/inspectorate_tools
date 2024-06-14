<script lang="ts">
    import { type ManualSection } from "./data";
    export let section: ManualSection;
    export let link: string = "";
</script>

<div class="body">
    {#if link !== ""} 
        <a href={link}>Go to rest of Manual</a>
    {/if}
    <h2>{section.sectionName}</h2>
    <ol>
      {#each section.elements as element}
        {#if typeof element === "string"}
          <p><li>{element}</li></p>
        {:else}
          <img src={element.routeToImage} alt={element.explanation} />
          <p>Figure {element.number} - {element.explanation}</p>
        {/if}
      {/each}
    </ol>
  </div>