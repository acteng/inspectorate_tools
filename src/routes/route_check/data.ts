import { get, writable } from "svelte/store";
import { repeatCloned } from "$lib";

let prefix = "route-check/";

export let state = writable(emptyState());
export let currentFile = writable("");

initialLoad();

function initialLoad() {
  console.log(`Initial load; trying to open last opened file`);
  let lastFile = window.localStorage.getItem(`${prefix}last-opened-file`);
  if (lastFile) {
    try {
      let x = loadFile(lastFile);
      currentFile.set(lastFile);
      state.set(x);
      return;
    } catch (error) {
      window.alert(`The last opened file ${lastFile} has a problem: ${error}`);
    }
  }

  console.log(`Starting with a new file`);
  let file = newFilename();
  currentFile.set(file);
}

state.subscribe((value) => {
  let file = get(currentFile);
  if (file) {
    window.localStorage.setItem(file, JSON.stringify(value));
  }
});

currentFile.subscribe((value) => {
  if (value) {
    window.localStorage.setItem(`${prefix}last-opened-file`, value);
  }
});

// Loads a key from local storage. Throws an exception if the stored state is missing or invalid.
export function loadFile(file: string): State {
  console.log(`Loading ${file}`);
  let json = window.localStorage.getItem(file);
  if (!json) {
    throw new Error(`Key not in local storage: ${file}`);
  }
  let x = JSON.parse(json);
  // Could more thoroughly check for validity, but the format won't change
  // much after initial development calms down
  if (!x.criticalIssues) {
    throw new Error("File format appears outdated");
  }
  return x;
}

// Returns an unused filename.
export function newFilename(): string {
  let fileList = getFileList();
  for (let n = 1; n <= fileList.length + 1; n++) {
    let file = `${prefix}untitled${n}`;
    if (!fileList.includes(file)) {
      return file;
    }
  }
  throw new Error("Couldn't make a new filename; this shouldn't be possible");
}

// Returns a sorted list of all filenames in local storage.
export function getFileList(): string[] {
  let list = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i)!;
    if (key.startsWith(prefix) && key != `${prefix}last-opened-file`) {
      list.push(key);
    }
  }
  list.sort();
  return list;
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
