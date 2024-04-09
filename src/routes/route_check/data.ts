import { writable } from "svelte/store";
import { repeatCloned } from "$lib";

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

  safetyCheck: Scorecard;

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

export let state = writable(loadState());
state.subscribe((value) =>
  window.localStorage.setItem("route-check", JSON.stringify(value)),
);

function loadState(): State {
  let x = JSON.parse(window.localStorage.getItem("route-check") || "{}");
  // Could more thoroughly check for validity, but the format won't change much after initial development calms down
  if (x.streetPlacemakingCheck) {
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
    safetyCheck: emptyScorecard(16),
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
