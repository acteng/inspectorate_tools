import { writable } from "svelte/store";
import { repeatCloned } from "$lib";
import { LocalStorageFiles } from "$lib/files";

export let state = writable(emptyState());
export let currentFile = writable("");

export let files = new LocalStorageFiles(
  "route_check/",
  emptyState,
  validate,
  state,
  currentFile,
);

// geojson library allows for 3D coordinates
export type Position = [number, number];

export interface State {
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
    // TODO number
    assessedRouteLengthKm: string;
    totalRouteLengthKm: string;
    notes: string;
    // Even if the user switches between these, data from the other page is never erased
    checkType: "street" | "path" | "";
  };

  policyCheck: {
    existing: "Yes" | "No" | "";
    proposed: "Yes" | "No" | "";
    commentary: string;
  }[];
  policyConflictLog: PolicyConflict[];

  safetyCheck: Scorecard;
  criticalIssues: CriticalIssue[];

  streetCheck: Scorecard;

  streetPlacemakingCheck: Scorecard;

  pathCheck: Scorecard;

  pathPlacemakingCheck: Scorecard;

  jat: {
    movements: Movement[];
  };

  resultsReviewStatement: string;
}

// Note "C"ritical and "N/A" are only used in some cases
type Score = "" | "C" | "0" | "1" | "2" | "N/A";

export function numericScore(score: Score): number {
  return {
    "": 0,
    C: 0,
    "0": 0,
    "1": 1,
    "2": 2,
    "N/A": 0,
  }[score];
}

// A collection of metrics. For each one, the user gives a score to describe
// the existing and proposed state.
export interface Scorecard {
  // The values are the stringified scores
  existingScores: Score[];
  proposedScores: Score[];
  // Optional notes for each entry
  existingScoreNotes: string[];
  proposedScoreNotes: string[];
}

export interface PolicyConflict {
  id: string;
  // TODO
  conflict: "1" | "2" | "3" | "4" | "5" | "6" | "";
  stage: "Existing" | "Design" | "";
  point: Position;
  locationName: string;
  resolved: "Yes" | "No" | "";
  notes: "";
}

export interface CriticalIssue {
  id: string;
  // TODO
  criticalIssue:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5A"
    | "5B"
    | "6A"
    | "6B"
    | "7A"
    | "7B"
    | "8"
    | "9A"
    | "9B"
    | "10"
    | "11A"
    | "11B"
    | "11C"
    | "11D"
    | "12A"
    | "12B"
    | "13"
    | "14"
    | "15"
    | "16"
    | "";
  stage: "Existing" | "Design" | "";
  point: Position;
  locationName: string;
  resolved: "Yes" | "No" | "";
  notes: "";
}

export interface Movement {
  point1: Position;
  point2: Position;
  kind: "cycling-straight" | "cycling-turn" | "pedestrian";
  color: "green" | "amber" | "red" | "critical";
  name: string;
  notes: string;
}

function validate(state: State) {
  // Could more thoroughly check for validity, but the format won't change
  // much after initial development calms down
  if (
    !state.jat ||
    (state.policyConflictLog.length > 0 &&
      typeof state.policyConflictLog[0] == "string")
  ) {
    throw new Error("File format appears outdated");
  }
}

function emptyState(): State {
  return {
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
      assessedRouteLengthKm: "",
      totalRouteLengthKm: "",
      notes: "",
      checkType: "",
    },
    policyCheck: repeatCloned(6, {
      existing: "",
      proposed: "",
      commentary: "",
    }),
    policyConflictLog: [],
    safetyCheck: emptyScorecard(16),
    criticalIssues: [],
    streetCheck: emptyScorecard(26),
    streetPlacemakingCheck: emptyScorecard(26),
    pathCheck: emptyScorecard(30),
    pathPlacemakingCheck: emptyScorecard(19),
    jat: {
      movements: [],
    },
    resultsReviewStatement: "",
  };
}

function emptyScorecard(n: number): Scorecard {
  return {
    existingScores: Array(n).fill(""),
    proposedScores: Array(n).fill(""),
    existingScoreNotes: Array(n).fill(""),
    proposedScoreNotes: Array(n).fill(""),
  };
}
