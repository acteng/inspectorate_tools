import { writable } from "svelte/store";
import { LocalStorageFiles } from "$lib/files";
import type { FeatureCollection } from "geojson";

export let state = writable(emptyState());
export let currentFile = writable("");

export let files = new LocalStorageFiles(
  "area_check/",
  emptyState,
  validate,
  state,
  currentFile,
);

export interface State {
  version: string;

  summary: {
    dateDesignReview: string;
    schemeReference: string;
    schemeName: string;
    schemeSummary: string;
    schemeInfoReviewed: string;
    authority: string;
    transportOrCombinedAuthority: string;
    region: string;
    fundingProgramme: string;
    designStage: string;
    fundingConditions: string;
    inspectorEmail: string;
    schemeAreaSizeKm2: number;
    notes: string;
    networkMap: FeatureCollection;
  };
  trafficMitigationCheck: {
    q1: string;
    q2: string;
    q3: string;
    majorQ1: string;
    majorQ2: string;
    majorQ3: string;
    majorQ4: string;
    minorQ1: string;
    minorQ2: string;
    notes: string;
  };
  // Exactly 13 entries, matching up with the scorecard questions. The values are the stringified scores.
  existingScores: string[];
  proposedScores: string[];
  // Optional notes for each entry
  existingScoreNotes: string[];
  proposedScoreNotes: string[];
  resultsNotes: string;
}

function validate(state: State) {
  if (state.version != "alpha-0") {
    throw new Error("File format appears outdated");
  }
}

export function emptyState(): State {
  return {
    version: "alpha-0",
    summary: {
      dateDesignReview: "",
      schemeReference: "",
      schemeName: "",
      schemeSummary: "",
      schemeInfoReviewed: "",
      authority: "",
      transportOrCombinedAuthority: "",
      region: "",
      fundingProgramme: "",
      designStage: "",
      fundingConditions: "",
      inspectorEmail: "",
      schemeAreaSizeKm2: 0,
      notes: "",
      networkMap: { type: "FeatureCollection", features: [] },
    },
    trafficMitigationCheck: {
      q1: "",
      q2: "",
      q3: "",
      majorQ1: "",
      majorQ2: "",
      majorQ3: "",
      majorQ4: "",
      minorQ1: "",
      minorQ2: "",
      notes: "",
    },
    existingScores: Array(13).fill(""),
    proposedScores: Array(13).fill(""),
    existingScoreNotes: Array(13).fill(""),
    proposedScoreNotes: Array(13).fill(""),
    resultsNotes: "",
  };
}
