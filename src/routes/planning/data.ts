import { validateAuthorityName } from "$lib/authority_names/authority_names";
import { LocalStorageFiles } from "$lib/files";
import { writable } from "svelte/store";

export let state = writable(emptyState());
export let currentFile = writable("");

export let files = new LocalStorageFiles(
  "planning/",
  emptyState,
  validate,
  describe,
  state,
  currentFile,
);

export interface State {
  version: string;

  summary: {
    siteAddress: string;
    localAuthorityReference: string;
    ateReference: string;
    localPlanningAuthority: string;
    localHighwayAuthority: string;
    completedBy: string;
    date: string;
    applicationType: string;
    proposalSummary: string;
  };

  // Exactly 10 entries, matching up with the assessment questions
  ratings: string[];
  // Optional notes for each entry
  appraiserComments: string[];
  localGuidance: string[];
}

function validate(state: State) {
  if (state.version == "alpha-0") {
    state.version = "alpha-1";
    state.localGuidance = Array(10).fill("");
  }
  if (state.version == "alpha-1") {
    state.version = "alpha-2";
    state.summary = emptyState().summary;
  }

  if (state.version != "alpha-2") {
    throw new Error("File format appears outdated");
  }
  state.summary.localHighwayAuthority = validateAuthorityName(
    state.summary.localHighwayAuthority,
  );
  state.summary.localPlanningAuthority = validateAuthorityName(
    state.summary.localPlanningAuthority,
  );
}

function describe(state: State): string {
  let x = state.summary.siteAddress;
  if (state.summary.ateReference) {
    x += ` (${state.summary.ateReference})`;
  }
  return x;
}

export function emptyState(): State {
  return {
    version: "alpha-2",
    summary: {
      siteAddress: "",
      localAuthorityReference: "",
      ateReference: "",
      localPlanningAuthority: "",
      localHighwayAuthority: "",
      completedBy: "",
      date: "",
      applicationType: "",
      proposalSummary: "",
    },
    ratings: Array(10).fill(""),
    appraiserComments: Array(10).fill(""),
    localGuidance: Array(10).fill(""),
  };
}
