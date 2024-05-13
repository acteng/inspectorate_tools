<script lang="ts">
  import type { FeatureCollection } from "geojson";
  import {
    GeoJSON,
    hoverStateFilter,
    CircleLayer,
    FillLayer,
    LineLayer,
  } from "svelte-maplibre";
  import { Popup } from "./";

  export let gj: FeatureCollection;
  export let show: boolean;

  let color = "cyan";
</script>

<GeoJSON data={gj}>
  <FillLayer
    filter={["==", ["geometry-type"], "Polygon"]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "fill-color": color,
      "fill-opacity": hoverStateFilter(0.5, 1.0),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      {#if props.name}
        <p>
          <u>Name</u>
          : {props.name}
        </p>
      {/if}
      {#if props.description}
        <p>
          <u>Description</u>
          : {props.description}
        </p>
      {/if}
    </Popup>
  </FillLayer>

  <LineLayer
    filter={["==", ["geometry-type"], "LineString"]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-width": 8,
      "line-color": color,
      "line-opacity": hoverStateFilter(0.5, 1.0),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      {#if props.name}
        <p>
          <u>Name</u>
          : {props.name}
        </p>
      {/if}
      {#if props.description}
        <p>
          <u>Description</u>
          : {props.description}
        </p>
      {/if}
    </Popup>
  </LineLayer>

  <CircleLayer
    filter={["==", ["geometry-type"], "Point"]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "circle-radius": 10,
      "circle-color": color,
      "circle-opacity": hoverStateFilter(0.5, 1.0),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      {#if props.name}
        <p>
          <u>Name</u>
          : {props.name}
        </p>
      {/if}
      {#if props.description}
        <p>
          <u>Description</u>
          : {props.description}
        </p>
      {/if}
    </Popup>
  </CircleLayer>
</GeoJSON>
