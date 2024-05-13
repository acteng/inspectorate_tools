<script lang="ts">
  import { ExternalLink } from "$lib";
  import { MapLibreMap, ContextualMap } from "$lib/map";
  import { state } from "../data";
  import { FileInput, WarningButton } from "govuk-svelte";

  function clear() {
    // TODO Modals
    if (window.confirm("Do you really want to erase the map data?")) {
      $state.summary.networkMap = {
        type: "FeatureCollection",
        features: [],
      };
    }
  }

  function importFile(filename: string, contents: string) {
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

      $state.summary.networkMap = json;
    } catch (err) {
      // TODO display errors
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

    {#if $state.summary.networkMap.features.length > 0}
      <WarningButton on:click={clear}>Clear map</WarningButton>
    {/if}

    <p>You can use the external Scheme Sketcher tool to draw this map:</p>
    <ol>
      <li>
        Go to the <ExternalLink href="https://acteng.github.io/atip">
          Scheme Sketcher
        </ExternalLink> tool
      </li>
      <li>Choose the area best covering this scheme</li>
      <li>
        Use the <i>New route</i>
        tool to sketch the route. It can contain segments snapped to existing roads
        or free-hand segments.
      </li>
      <li>
        Optionally, use the <i>Split route</i>
        tool to denote just the sections assessed in this file.
      </li>
      <li>
        You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map
      </li>
      <li>
        Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>
      </li>
      <li>Load the saved file above</li>
    </ol>
  </div>

  <div style="position: relative; width: 70%;">
    <MapLibreMap>
      <ContextualMap gj={$state.summary.networkMap} show />
    </MapLibreMap>
  </div>
</div>
