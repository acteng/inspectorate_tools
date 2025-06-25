<script lang="ts">
  import type { StyleSpecification } from "maplibre-gl";
  import {
    MapEvents,
    MapLibre,
    NavigationControl,
    ScaleControl,
    type Map,
  } from "svelte-maplibre";
  import googleLogo from "../assets/images/google_on_non_white_hdpi.png?url";
  import Attributions from "./Attributions.svelte";
  import Geocoder from "./Geocoder.svelte";
  import { styleChoice } from "./stores";

  // TODO Is it worth trying to preserve the map while navigating to other pages?
  export let map: Map | undefined = undefined;

  let styleSpec: string | StyleSpecification | null = null;
  let attribution = "";

  async function changeStyle(choice: string) {
    styleSpec = await getStyle($styleChoice);
    if (
      $styleChoice === "google" &&
      styleSpec.toString().startsWith("https://api.maptiler.com/maps/")
    ) {
      $styleChoice = "maptiler-hybrid";
    }
  }
  $: changeStyle($styleChoice);

  let googleKeys: [string, string] | null = null;

  async function getStyle(
    choice: string,
  ): Promise<string | StyleSpecification> {
    googleKeys = null;
    if (choice == "google" || choice == "os-road") {
      let tiles;
      if (choice == "google") {
        let apiKey = window.localStorage.getItem("google-api-key") || "";
        let sessionKey = await getGoogleSessionKey(apiKey);
        if (sessionKey === "") {
          return getMaptilerStyle("hybrid");
        }

        tiles = `https://tile.googleapis.com/v1/2dtiles/{z}/{x}/{y}?session=${sessionKey}&key=${apiKey}`;
        attribution = await getGoogleAttribution(apiKey, sessionKey);

        googleKeys = [apiKey, sessionKey];
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
    return getMaptilerStyle(style);
  }

  function getMaptilerStyle(style: string): string | StyleSpecification {
    return `https://api.maptiler.com/maps/${style}/style.json?key=${
      import.meta.env.VITE_MAPTILER_API_KEY
    }`;
  }

  async function getGoogleSessionKey(apiKey: string): Promise<string> {
    // See https://developers.google.com/maps/documentation/tile/session_tokens
    // These expire two weeks after being requested, so unless somebody has a tab open longer than that without navigating away or refreshing, we don't need to bother with re-fetching
    try {
      let resp = await fetch(
        `https://tile.googleapis.com/v1/createSession?key=${apiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            mapType: "satellite",
            language: "en-GB",
            region: "GB",
          }),
        },
      );
      let json = await resp.json();
      if ("session" in json) {
        return json.session;
      }
      console.error(
        `Couldn't get Google tile session key: ${JSON.stringify(json)}`,
      );
      return "";
    } catch (err) {
      console.error(`Couldn't get Google tile session key: ${err}`);
      return "";
    }
  }

  async function getGoogleAttribution(
    apiKey: string,
    sessionKey: string,
  ): Promise<string> {
    if (!map) {
      return "Google (attributions loading)";
    }

    let bounds = map.getBounds();
    let url = `https://tile.googleapis.com/tile/v1/viewport?session=${sessionKey}&key=${apiKey}&zoom=${Math.floor(map.getZoom())}&north=${bounds.getNorth()}&south=${bounds.getSouth()}&east=${bounds.getEast()}&west=${bounds.getWest()}`;
    let resp = await fetch(url);
    let json = await resp.json();
    return json.copyright;
  }

  async function updateViewport() {
    if (!map || $styleChoice != "google" || !googleKeys) {
      return;
    }
    let [apiKey, sessionKey] = googleKeys;
    attribution = await getGoogleAttribution(apiKey, sessionKey);
  }
</script>

{#if styleSpec}
  <MapLibre
    style={styleSpec}
    on:error={(e) => {
      // @ts-expect-error Not exported
      console.log(e.detail.error);
    }}
    let:map
    bind:map
    bounds={[-5.96, 49.89, 2.31, 55.94]}
    attributionControl={false}
  >
    <MapEvents on:zoomend={updateViewport} on:moveend={updateViewport} />
    <Attributions {attribution} />
    <NavigationControl />
    <ScaleControl />
    <Geocoder {map} />
    {#if $styleChoice == "google"}
      <img src={googleLogo} alt="Google logo" />
    {/if}
    <slot />
  </MapLibre>
{/if}

<style>
  img {
    position: absolute;
    bottom: 30px;
    left: 10px;
  }
</style>
