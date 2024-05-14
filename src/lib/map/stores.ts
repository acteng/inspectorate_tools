import { writable } from "svelte/store";

export let styleChoice = writable(getDefaultStyle());

function getDefaultStyle(): string {
  let blueskyKey = window.localStorage.getItem("bluesky-api-key") || "";
  if (blueskyKey.length > 0) {
    return "bluesky";
  }

  let osKey = window.localStorage.getItem("os-api-key") || "";
  if (osKey.length > 0) {
    return "os-road";
  }

  return "maptiler-hybrid";
}
