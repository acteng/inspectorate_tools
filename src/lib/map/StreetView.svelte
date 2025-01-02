<script lang="ts">
  import { Checkbox, Radio } from "govuk-svelte";
  import type { Map, MapMouseEvent } from "maplibre-gl";
  import { onDestroy } from "svelte";
  import { bingUrl, streetviewUrl } from "./";

  export let map: Map | undefined;

  export let enabled = false;

  let source = "google";

  function on() {
    if (!map) {
      return;
    }
    map.on("click", onClick);
    map.getCanvas().style.cursor = "zoom-in";
  }
  function off() {
    if (!map) {
      return;
    }
    map.off("click", onClick);
    map.getCanvas().style.cursor = "auto";
  }
  onDestroy(off);

  $: if (enabled) {
    on();
  } else {
    off();
  }

  function onClick(e: MapMouseEvent) {
    window.open(
      source == "google"
        ? streetviewUrl(e.lngLat.toArray())
        : bingUrl(e.lngLat.toArray()),
      "_blank",
    );
    enabled = false;
  }

  function onKeyDown(e: KeyboardEvent) {
    if (enabled && e.key == "Escape") {
      enabled = false;
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<Checkbox bind:checked={enabled}>StreetView</Checkbox>
{#if enabled}
  <Radio
    label="Source"
    choices={[
      ["google", "Google StreetView"],
      ["bing", "Bing Streetside"],
    ]}
    inlineSmall
    bind:value={source}
  />
{/if}
