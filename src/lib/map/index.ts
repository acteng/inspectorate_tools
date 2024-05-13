import turfBbox from "@turf/bbox";
import type { GeoJSON } from "geojson";

export { default as BlueskyKey } from "./BlueskyKey.svelte";
export { default as ContextualMap } from "./ContextualMap.svelte";
export { default as MapLibreMap } from "./MapLibreMap.svelte";
export { default as Popup } from "./Popup.svelte";
export { default as StreetView } from "./StreetView.svelte";

// Suitable for passing to map.fitBounds. Work around https://github.com/Turfjs/turf/issues/1807.
export function bbox(gj: GeoJSON): [number, number, number, number] {
  return turfBbox(gj) as [number, number, number, number];
}

export function streetviewUrl(point: [number, number]): string {
  return `http://maps.google.com/maps?q=&layer=c&cbll=${point[1]},${point[0]}&cbp=11,0,0,0,0`;
}

export function bingUrl(point: [number, number]): string {
  return `https://www.bing.com/maps?cp=${point[1]}~${point[0]}&style=x`;
}
