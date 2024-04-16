import { writable } from "svelte/store";
import type { Feature, Polygon } from "geojson";

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
    polygon: Feature<Polygon> | null;
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
      polygon: null,
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
  };
}
