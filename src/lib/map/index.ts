import turfBbox from "@turf/bbox";
import type { GeoJSON } from "geojson";

export { default as DraggablePin } from "./DraggablePin.svelte";
export { default as MapLibreMap } from "./MapLibreMap.svelte";

// Suitable for passing to map.fitBounds. Work around https://github.com/Turfjs/turf/issues/1807.
export function bbox(gj: GeoJSON): [number, number, number, number] {
  return turfBbox(gj) as [number, number, number, number];
}
