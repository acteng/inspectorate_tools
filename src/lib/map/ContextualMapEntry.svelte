<script lang="ts">
  import { bbox, ContextualMap, MapLibreMap } from "$lib/map";
  import type { FeatureCollection } from "geojson";
  import {
    ErrorMessage,
    FileInput,
    SecondaryButton,
    WarningButton,
  } from "govuk-svelte";
  import type { Map } from "maplibre-gl";
  import { onMount } from "svelte";

  export let gj: FeatureCollection;

  let map: Map;
  let errorMessage = "";

  // TODO Wait for loaded
  onMount(() => {
    zoom(false);
  });

  function clear() {
    // TODO Modals
    if (window.confirm("Do you really want to erase the map data?")) {
      gj = {
        type: "FeatureCollection",
        features: [],
      };
    }
  }

  function importFile(filename: string, contents: string) {
    errorMessage = "";
    try {
      let json = JSON.parse(contents);

      // Does it look valid? Many checks possible, start simple
      if (json.type != "FeatureCollection") {
        throw new Error("This doesn't look like a GeoJSON file");
      }
      if (!json.origin?.startsWith("atip-")) {
        throw new Error("This file wasn't produced with the Scheme Sketcher");
      }
      if (json.crs) {
        throw new Error(
          "This file has a Coordinate Reference System set; it's not suitable for a web map",
        );
      }

      gj = json;
      zoom(true);
    } catch (err) {
      errorMessage = `Error importing ${filename}: ${err}`;
    }
  }

  function zoom(animate: boolean) {
    if (gj.features.length > 0) {
      map.fitBounds(bbox(gj), {
        padding: 20,
        animate,
      });
    }
  }
</script>

<h2>Network Map</h2>

<div style="display: flex; height: 80vh">
  <div
    style="width: 30%; overflow-y: scroll; padding: 10px; border: 1px solid black;"
  >
    <p>
      Please add a map showing the section of route being scored in this file.
      If the route is part of a longer route of multiple sections (covered in
      other files), please show this on the map for context too.
    </p>

    <FileInput label="Import from GeoJSON file" onLoad={importFile} />
    <ErrorMessage {errorMessage} />

    {#if gj.features.length > 0}
      <WarningButton on:click={clear}>Clear map</WarningButton>
      <SecondaryButton on:click={() => zoom(true)}>Zoom to fit</SecondaryButton>
    {/if}

    <slot />
  </div>

  <div style="position: relative; width: 70%;">
    <MapLibreMap bind:map>
      <ContextualMap {gj} show />
    </MapLibreMap>
  </div>
</div>
