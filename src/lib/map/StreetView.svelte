<script lang="ts">
  import { Checkbox, Radio } from "govuk-svelte";
  import type { Map, MapMouseEvent } from "maplibre-gl";
  import { onDestroy } from "svelte";

  export let map: Map;

  export let enabled = false;

  let source = "google";

  function on() {
    map.on("click", onClick);
    map.getCanvas().style.cursor = "zoom-in";
  }
  function off() {
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
    let lon = e.lngLat.lng;
    let lat = e.lngLat.lat;
    if (source == "google") {
      window.open(
        `http://maps.google.com/maps?q=&layer=c&cbll=${lat},${lon}&cbp=11,0,0,0,0`,
        "_blank",
      );
    } else if (source == "bing") {
      window.open(
        `https://www.bing.com/maps?cp=${lat}~${lon}&style=x`,
        "_blank",
      );
    }
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
    legend="Source"
    choices={[
      ["google", "Google StreetView"],
      ["bing", "Bing Streetside"],
    ]}
    inlineSmall
    bind:value={source}
  />
{/if}
