import { writable } from "svelte/store";
import { LocalStorageFiles } from "$lib/files";
import type { FeatureCollection } from "geojson";

export let state = writable(emptyState());
export let currentFile = writable("");

export let files = new LocalStorageFiles(
  "planning/",
  emptyState,
  validate,
  state,
  currentFile,
);

export interface State {
  version: string;

  // Exactly 10 entries, matching up with the scorecard questions
  ratings: string[];
  // Optional notes for each entry
  appraiserComments: string[];
  localGuidance: string[];
}

function validate(state: State) {
  if (state.version == "alpha-0") {
    // Upgrade
    state.version = "alpha-1";
    state.localGuidance = Array(10).fill("");
  }

  if (state.version != "alpha-1") {
    throw new Error("File format appears outdated");
  }
}

export function emptyState(): State {
  return {
    version: "alpha-1",
    ratings: Array(10).fill(""),
    appraiserComments: Array(10).fill(""),
    localGuidance: Array(10).fill(""),
  };
}
