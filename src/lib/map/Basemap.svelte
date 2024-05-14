<script lang="ts">
  import { CollapsibleCard, SecondaryButton, Select } from "govuk-svelte";
  import { styleChoice } from "./stores";

  let bluesky = "bluesky-api-key";
  let os = "os-api-key";

  let updates = 0;

  function checkKey(key: string): boolean {
    let apiKey = window.localStorage.getItem(key);
    return apiKey != null && apiKey.length > 0;
  }

  function setKey(key: string) {
    let value = window.prompt(
      "Enter the API key provided to you",
      window.localStorage.getItem(key) || "",
    );
    window.localStorage.setItem(key, value || "");
    choices = makeChoices();
    updates += 1;
  }

  let choices = makeChoices();
  function makeChoices(): [string, string][] {
    let list: [string, string][] = [];
    if (checkKey(bluesky)) {
      list.push(["bluesky", "Bluesky Satellite (12.5cm)"]);
    }
    if (checkKey(os)) {
      list.push(["os-road", "OS Road"]);
    }
    list.push(["maptiler-hybrid", "MapTiler Satellite"]);
    list.push(["maptiler-streets", "MapTiler Streets"]);
    list.push(["maptiler-dataviz", "MapTiler Dataviz"]);
    list.push(["maptiler-uk-openzoomstack-light", "OS Open Zoomstack"]);
    return list;
  }
</script>

<CollapsibleCard label="Basemap">
  <Select label="Basemap" bind:value={$styleChoice} {choices} />

  <p>
    If you have internal access, you can opt into higher-quality satellite
    imagery.
  </p>

  {#key updates}
    {#each [[bluesky, "Bluesky"], [os, "Ordnance Survey"]] as [key, label]}
      <p>
        <u>{label}</u>
        : {#if checkKey(key)}enabled{:else}disabled{/if}
      </p>
      <SecondaryButton on:click={() => setKey(key)}>
        Set {label} API key
      </SecondaryButton>
    {/each}
  {/key}
</CollapsibleCard>
