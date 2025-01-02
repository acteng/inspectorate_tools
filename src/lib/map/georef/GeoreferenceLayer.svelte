<script lang="ts">
  import type { Map } from "maplibre-gl";
  import { ImageSource, Marker, RasterLayer } from "svelte-maplibre";
  import {
    bottomRight,
    imgSrc,
    opacity,
    settingImage,
    topLeft,
  } from "./stores";

  export let map: Map;
  export let beforeId: string | undefined;

  $: if ($imgSrc && $settingImage && $topLeft.lng == 0 && $topLeft.lat == 0) {
    // Reset the markers to cover some of the current viewport
    let bounds = map.getBounds();
    $topLeft.lng =
      bounds.getWest() + 0.4 * (bounds.getEast() - bounds.getWest());
    $bottomRight.lng =
      bounds.getWest() + 0.6 * (bounds.getEast() - bounds.getWest());
    $topLeft.lat =
      bounds.getNorth() + 0.4 * (bounds.getSouth() - bounds.getNorth());
    $bottomRight.lat =
      bounds.getNorth() + 0.6 * (bounds.getSouth() - bounds.getNorth());
  }

  // Workaround different module reloading orderings that may occur
  function getBeforeId(): string | undefined {
    if (map && beforeId) {
      if (map.getLayer(beforeId)) {
        return beforeId;
      }
    }
    return undefined;
  }
</script>

{#if $imgSrc && $topLeft.lng != $bottomRight.lng}
  <ImageSource
    url={$imgSrc}
    coordinates={[
      [$topLeft.lng, $topLeft.lat],
      [$bottomRight.lng, $topLeft.lat],
      [$bottomRight.lng, $bottomRight.lat],
      [$topLeft.lng, $bottomRight.lat],
    ]}
  >
    <RasterLayer
      beforeId={getBeforeId()}
      paint={{
        "raster-fade-duration": 0,
        "raster-opacity": $opacity / 100.0,
      }}
    />
  </ImageSource>
{/if}

{#if $imgSrc && $settingImage}
  <Marker bind:lngLat={$topLeft} draggable>
    <span class="dot" style="background-color: red" />
  </Marker>
  <Marker bind:lngLat={$bottomRight} draggable>
    <span class="dot" style="background-color: blue" />
  </Marker>
{/if}

<style>
  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
  }

  .dot:hover {
    border: 1px solid black;
    cursor: pointer;
  }
</style>
