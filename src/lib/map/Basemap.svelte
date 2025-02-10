<script lang="ts">
  import { CollapsibleCard, SecondaryButton, Select } from "govuk-svelte";
  import { styleChoice } from "./stores";

  let os = "os-api-key";
  let google = "google-api-key";
  let privateChoices = [
    [google, "Google satellite imagery"],
    [os, "Ordnance Survey"],
  ];

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

    // Immediately switch to the new basemap after entering a key
    if (value && value.length > 0) {
      if (key == os) {
        $styleChoice = "os-road";
      } else if (key == google) {
        $styleChoice = "google";
      }
    }
  }

  let choices = makeChoices();
  function makeChoices(): [string, string][] {
    let list: [string, string][] = [];
    if (checkKey(google)) {
      list.push(["google", "Google satellite"]);
    }
    if (checkKey(os)) {
      list.push(["os-road", "Ordnance Survey MasterMap"]);
    }
    list.push(["maptiler-hybrid", "MapTiler Satellite"]);
    list.push(["maptiler-streets-v2", "MapTiler Streets"]);
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
    {#each privateChoices as [key, label]}
      <p>
        {label}
        : {#if checkKey(key)}enabled{:else}disabled{/if}
      </p>
      {#if key == google}
        <p>
          Google <a
            href="https://cloud.google.com/maps-platform/terms/"
            target="_blank"
          >
            Terms of Use
          </a>
          and
          <a href="https://www.google.com/policies/privacy/" target="_blank">
            Privacy Policy
          </a>
        </p>
      {/if}
      <SecondaryButton on:click={() => setKey(key)}>
        Set {label} API key
      </SecondaryButton>
    {/each}
  {/key}
</CollapsibleCard>
