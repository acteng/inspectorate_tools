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
    // Exactly 16 entries, matching up with the scorecard questions. The values are the stringified scores.
    // TODO Enum?
    existingScores: string[];
    proposedScores: string[];
    // Optional notes for each entry
    existingScoreNotes: string[];
    proposedScoreNotes: string[];
  };

  streetCheck: {
    // 26 entries
    existingScores: string[];
    proposedScores: string[];
    existingScoreNotes: string[];
    proposedScoreNotes: string[];
  };

  streetPlacemakingCheck: {
    // 26 entries
    existingScores: string[];
    proposedScores: string[];
    existingScoreNotes: string[];
    proposedScoreNotes: string[];
  };

  pathCheck: {
    // 30 entries
    existingScores: string[];
    proposedScores: string[];
    existingScoreNotes: string[];
    proposedScoreNotes: string[];
  };

  pathPlacemakingCheck: {
    // 19 entries
    existingScores: string[];
    proposedScores: string[];
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
    streetCheck: {
      existingScores: Array(26).fill(""),
      proposedScores: Array(26).fill(""),
      existingScoreNotes: Array(26).fill(""),
      proposedScoreNotes: Array(26).fill(""),
    },
    streetPlacemakingCheck: {
      existingScores: Array(26).fill(""),
      proposedScores: Array(26).fill(""),
      existingScoreNotes: Array(26).fill(""),
      proposedScoreNotes: Array(26).fill(""),
    },
    pathCheck: {
      existingScores: Array(30).fill(""),
      proposedScores: Array(30).fill(""),
      existingScoreNotes: Array(30).fill(""),
      proposedScoreNotes: Array(30).fill(""),
    },
    pathPlacemakingCheck: {
      existingScores: Array(19).fill(""),
      proposedScores: Array(19).fill(""),
      existingScoreNotes: Array(19).fill(""),
      proposedScoreNotes: Array(19).fill(""),
    },
  };
}
