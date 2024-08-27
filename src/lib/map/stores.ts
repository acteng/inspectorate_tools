import { writable } from "svelte/store";

export let styleChoice = writable(getDefaultStyle());

function getDefaultStyle(): string {
  let googleKey = window.localStorage.getItem("google-api-key") || "";
  if (googleKey.length > 0) {
    return "google";
  }

  let osKey = window.localStorage.getItem("os-api-key") || "";
  if (osKey.length > 0) {
    return "os-road";
  }

  return "maptiler-hybrid";
}
