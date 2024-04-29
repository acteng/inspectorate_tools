<script lang="ts">
  import type { StyleSpecification } from "maplibre-gl";
  import { MapLibre, type Map } from "svelte-maplibre";
  import Geocoder from "./Geocoder.svelte";

  // TODO Is it worth trying to preserve the map while navigating to other pages?
  export let map: Map | null = null;

  function getStyle(): string | StyleSpecification {
    let blueskyKey = window.localStorage.getItem("bluesky-api-key") || "";
    if (blueskyKey.length > 0) {
      let tiles = `https://ogc.apps.midgard.airbusds-cint.com/apgb/wmts/rest/apgb:AP-12CM5-GB-LATEST/default/EPSG-3857/EPSG:3857:{z}/{y}/{x}?GUID=${blueskyKey}&format=image/png&TRANSPARENT=FALSE`;
      return {
        version: 8,
        sources: {
          "raster-tiles": {
            type: "raster",
            tiles: [tiles],
            tileSize: 256,
            attribution: "Bluesky",
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
    } else {
      return `https://api.maptiler.com/maps/hybrid/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`;
    }
  }
</script>

<MapLibre
  style={getStyle()}
  standardControls
  on:error={(e) => {
    // @ts-expect-error Not exported
    console.log(e.detail.error);
  }}
  let:map
  bind:map
  bounds={[-5.96, 49.89, 2.31, 55.94]}
>
  <Geocoder {map} />
  <slot />
</MapLibre>
