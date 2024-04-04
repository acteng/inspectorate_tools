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
  };

  policyCheck: {
    existing: "Yes" | "No" | "";
    proposed: "Yes" | "No" | "";
    commentary: string;
  }[];

  safetyCheck: {
    // Exactly 13 entries, matching up with the scorecard questions. The values are the stringified scores.
    // TODO Enum?
    existingScores: string[];
    proposedScores: string[];
    // Optional notes for each entry
    existingScoreNotes: string[];
    proposedScoreNotes: string[];
  };
}

export let state = writable(loadState());
state.subscribe((value) =>
  window.localStorage.setItem("route-check", JSON.stringify(value)),
);

function loadState(): State {
  let x = JSON.parse(window.localStorage.getItem("route-check") || "{}");
  // Could more thoroughly check for validity, but the format won't change much after initial development calms down
  if (x.summary) {
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
    },
    policyCheck: repeatCloned(6, {
      existing: "",
      proposed: "",
      commentary: "",
    }),
    safetyCheck: {
      existingScores: Array(16).fill(""),
      proposedScores: Array(16).fill(""),
      existingScoreNotes: Array(16).fill(""),
      proposedScoreNotes: Array(16).fill(""),
    },
  };
}
