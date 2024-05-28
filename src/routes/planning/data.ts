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
}

function validate(state: State) {
  if (state.version != "alpha-0") {
    throw new Error("File format appears outdated");
  }
}

export function emptyState(): State {
  return {
    version: "alpha-0",
    ratings: Array(10).fill(""),
    appraiserComments: Array(10).fill(""),
  };
}
