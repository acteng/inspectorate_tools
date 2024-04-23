import { get, writable } from "svelte/store";
import { repeatCloned } from "$lib";
import { LocalStorageFiles } from "$lib/files";

export let files = new LocalStorageFiles("route_check/", emptyState, validate);

export let state = writable(emptyState());
// A key into local storage, excluding prefix
export let currentFile = writable("");

initialLoad();

function initialLoad() {
  console.log(`Initial load; trying to open last opened file`);
  let lastFile = window.localStorage.getItem(files.key("last-opened-file"));
  if (lastFile) {
    try {
      let x = files.loadFile(lastFile);
      currentFile.set(lastFile);
      state.set(x);
      return;
    } catch (error) {
      window.alert(`The last opened file ${lastFile} has a problem: ${error}`);
    }
  }

  console.log(`Starting with a new file`);
  let file = files.newFilename();
  currentFile.set(file);
}

state.subscribe((value) => {
  let file = get(currentFile);
  if (file) {
    window.localStorage.setItem(files.key(file), JSON.stringify(value));
  }
});

currentFile.subscribe((value) => {
  if (value) {
    window.localStorage.setItem(files.key("last-opened-file"), value);
  }
});

function validate(state: State) {
  // Could more thoroughly check for validity, but the format won't change
  // much after initial development calms down
  if (!state.criticalIssues) {
    throw new Error("File format appears outdated");
  }
}

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
}

// Note "C"ritical is only used in some cases
type Score = "" | "C" | "0" | "1" | "2";

// A collection of metrics. For each one, the user gives a score to describe
// the existing and proposed state.
interface Scorecard {
  // The values are the stringified scores
  existingScores: Score[];
  proposedScores: Score[];
  // Optional notes for each entry
  existingScoreNotes: string[];
  proposedScoreNotes: string[];
}

interface PolicyConflict {
  id: string;
  // TODO
  conflict: "1" | "2" | "3" | "4" | "5" | "6" | "";
  stage: "Existing" | "Design" | "";
  // TODO GJ point type?
  point: string;
  locationName: string;
  resolved: "Yes" | "No" | "";
  notes: "";
}

interface CriticalIssue {
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
  // TODO GJ point type?
  point: string;
  locationName: string;
  resolved: "Yes" | "No" | "";
  notes: "";
}

export function emptyState(): State {
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
