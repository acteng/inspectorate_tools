import { writable } from "svelte/store";

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
    schemeAreaSizeKm2: string;
    notes: string;
  };
  // Exactly 13 entries, matching up with the scorecard questions. The values are the stringified scores.
  existingScores: string[];
  proposedScores: string[];
  // Optional notes for each entry
  existingScoreNotes: string[];
  proposedScoreNotes: string[];
}

export let state = writable(loadState());
state.subscribe((value) =>
  window.localStorage.setItem("area-check", JSON.stringify(value)),
);

function loadState(): State {
  let x = JSON.parse(window.localStorage.getItem("area-check") || "{}");
  // Could more thoroughly check for validity, but the format won't change much after initial development calms down
  if (x.summary && x.existingScores && x.existingScoreNotes) {
    return x;
  }
  return emptyState();
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
      schemeAreaSizeKm2: "",
      notes: "",
    },
    // The default settings for the radio buttons go from worst to best case
    existingScores: Array(13).fill("0"),
    proposedScores: [4, 4, 4, 4, 4, 4, 4, 4, 8, 16, 12, 16, 16].map((x) =>
      x.toString(),
    ),
    existingScoreNotes: Array(13).fill(""),
    proposedScoreNotes: Array(13).fill(""),
  };
}
