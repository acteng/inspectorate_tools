<script lang="ts">
  import type { StyleSpecification } from "maplibre-gl";
  import {
    MapLibre,
    type Map,
    NavigationControl,
    ScaleControl,
  } from "svelte-maplibre";
  import Geocoder from "./Geocoder.svelte";
  import { styleChoice } from "./stores";

  // TODO Is it worth trying to preserve the map while navigating to other pages?
  export let map: Map | null = null;

  function getStyle(choice: string): string | StyleSpecification {
    if (choice == "bluesky" || choice == "os-road") {
      let tiles, attribution;
      if (choice == "bluesky") {
        let apiKey = window.localStorage.getItem("bluesky-api-key") || "";
        tiles = `https://ogc.apps.midgard.airbusds-cint.com/apgb/wmts/rest/apgb:AP-12CM5-GB-LATEST/default/EPSG-3857/EPSG:3857:{z}/{y}/{x}?GUID=${apiKey}&format=image/png&TRANSPARENT=FALSE`;
        attribution = "Bluesky";
      } else {
        let apiKey = window.localStorage.getItem("os-api-key") || "";
        tiles = `https://api.os.uk/maps/raster/v1/zxy/Road_3857/{z}/{x}/{y}.png?key=${apiKey}`;
        attribution =
          "Contains OS data &copy; Crown copyright and database rights 2024";
      }
      return {
        version: 8,
        sources: {
          "raster-tiles": {
            type: "raster",
            tiles: [tiles],
            tileSize: 256,
            attribution,
          },
        },
        layers: [
          {
            id: "raster-basemap",
            type: "raster",
            source: "raster-tiles",
          },
        ],
        // Raster basemaps don't include glyphs; use the MapTiler ones
        glyphs: `https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=${
          import.meta.env.VITE_MAPTILER_API_KEY
        }`,
      };
    }

    let style = choice.slice("maptiler-".length);
    return `https://api.maptiler.com/maps/${style}/style.json?key=${
      import.meta.env.VITE_MAPTILER_API_KEY
    }`;
  }
</script>

<MapLibre
  style={getStyle($styleChoice)}
  on:error={(e) => {
    // @ts-expect-error Not exported
    console.log(e.detail.error);
  }}
  let:map
  bind:map
  bounds={[-5.96, 49.89, 2.31, 55.94]}
>
  <NavigationControl />
  <ScaleControl />
  <Geocoder {map} />
  <slot />
</MapLibre>
