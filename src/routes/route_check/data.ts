import { repeatCloned } from "$lib";
import { validateAuthorityName } from "$lib/authority_names/authority_names";
import { LocalStorageFiles } from "$lib/files";
import type { Position } from "$lib/map";
import type { FeatureCollection, LineString } from "geojson";
import { setPrecision } from "scheme-sketcher-lib/draw/stores";
import { writable } from "svelte/store";

export let state = writable(emptyState());
export let currentFile = writable("");

export let files = new LocalStorageFiles(
  "route_check/",
  emptyState,
  validate,
  describe,
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
    // Note this is now called "reviewer email", but this field is different
    // for backwards compatibility.
    inspectorEmail: string;
    assessedRouteLengthKm: number;
    totalRouteLengthKm: number;
    notes: string;
    // Even if the user switches between these, data from the other page is never erased
    checkType: "street" | "path" | "";
    networkMap: FeatureCollection<LineString>;
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
  horseRiders: "Yes" | "No" | "";

  pathPlacemakingCheck: Scorecard;

  jat: Junction[];

  resultsReviewStatement: string;
}

// Note "C"ritical and "N/A" are only used in some cases
export type Score = "" | "C" | "0" | "1" | "2" | "N/A";

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
  conflict: PolicyConflictCode;
  stage: "Existing" | "Design" | "";
  point: Position;
  locationName: string;
  resolved: "Yes" | "No" | "";
  notes: string;
}
export type PolicyConflictCode = "1" | "2" | "3" | "4" | "5" | "6" | "";

export interface CriticalIssue {
  criticalIssue: CriticalIssueCode;
  stage: "Existing" | "Design" | "";
  point: Position;
  locationName: string;
  resolved: "Yes" | "No" | "";
  notes: string;
}
export type CriticalIssueCode =
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

export interface Junction {
  name: string;
  existing: JunctionAssessment;
  proposed: JunctionAssessment;
}

export interface JunctionAssessment {
  arms: Arm[];
  movements: Movement[];
  notes: string;
}

export interface Arm {
  point: Position;
  name: string;
}

export type MovementKind = "cycling" | "walking & wheeling";

export interface Movement {
  point1: Position;
  point2: Position;
  point3: Position;
  kind: MovementKind;
  score: "0" | "1" | "2" | "X";
  name: string;
  notes: string;
}

function validate(state: State) {
  if (state.version == "alpha-0") {
    // Upgrade
    state.version = "alpha-1";
    // New field, unanswered by default
    state.horseRiders = "";
  }

  if (state.version != "alpha-1") {
    throw new Error("File format appears outdated");
  }

  // Not entirely sure how, but at least one old file is missing this property and causing problems, so fill it in
  state.summary.networkMap ||= { type: "FeatureCollection", features: [] };

  // Ensure any design-stage problems are unresolved
  for (let x of state.policyConflictLog) {
    if (x.stage == "Design") {
      x.resolved = "";
    }
  }
  for (let x of state.criticalIssues) {
    if (x.stage == "Design") {
      x.resolved = "";
    }
  }

  state.criticalIssues.forEach((critical) => {
    const result = setPrecision(critical.point);
    critical.point[0] = result[0];
    critical.point[1] = result[1];
  });

  state.policyConflictLog.forEach((conflict) => {
    const result = setPrecision(conflict.point);
    conflict.point[0] = result[0];
    conflict.point[1] = result[1];
  });

  state.summary.authority = validateAuthorityName(state.summary.authority);
}

function describe(state: State): string {
  let x = state.summary.schemeName;
  if (state.summary.schemeReference) {
    x += ` (${state.summary.schemeReference})`;
  }
  return x;
}

export function emptyState(): State {
  return {
    version: "alpha-1",
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
      assessedRouteLengthKm: 0,
      totalRouteLengthKm: 0,
      notes: "",
      checkType: "",
      networkMap: { type: "FeatureCollection", features: [] },
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
    horseRiders: "",
    pathPlacemakingCheck: emptyScorecard(19),
    jat: [],
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
