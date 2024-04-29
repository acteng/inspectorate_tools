<script lang="ts">
  import { CollapsibleCard, SecondaryButton } from "govuk-svelte";

  let key = "bluesky-api-key";

  function checkKey(): boolean {
    let apiKey = window.localStorage.getItem(key);
    return apiKey != null && apiKey.length > 0;
  }

  function setKey() {
    let value = window.prompt(
      "Enter the API key provided to you",
      window.localStorage.getItem(key) || "",
    );
    window.localStorage.setItem(key, value || "");
    // MapLibreMap doesn't detect this change; just do a full reload
    window.location.reload();
  }
</script>

<CollapsibleCard label="Bluesky imagery">
  {#if checkKey()}
    <p>The map should be showing Bluesky imagery.</p>
  {:else}
    <p>
      You can manually use high-quality Bluesky imagery if you have a valid key.
    </p>
  {/if}
  <p>
    <i>
      Note this feature is temporary -- in the future, you will login and
      automatically have access to this imagery.
    </i>
  </p>
  <SecondaryButton on:click={setKey}>Set Bluesky API key</SecondaryButton>
</CollapsibleCard>
