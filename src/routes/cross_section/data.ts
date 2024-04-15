import { writable } from "svelte/store";

export interface State {
  summary: {
    schemeReference: string;
    schemeName: string;
    schemeSummary: string;
    authority: string;
    transportOrCombinedAuthority: string;
    region: string;
    fundingProgramme: string;
    designStage: string;
    fundingConditions: string;
    // TODO numbers
    assessedRouteLengthKm: string;
    totalRouteLengthKm: string;
    notes: string;
  };
  proposed: {
    trafficData: TrafficData;
    desirableMinimumCrossSection: Array<StreetFeatureType | "">;
    absoluteMinimumCrossSection: Array<StreetFeatureType | "">;
  };
}

export interface TrafficData {
  flowOneWay: "<200" | "200-800" | ">800" | "";
  flowTwoWay: "<300" | "300-1,000" | ">1,000" | "";
  flowSharedUse: "<300" | ">300" | "";
  trafficFlow: "<2,500" | "2,500-5,000" | "5,000-10,000" | ">10,000" | "";
  speedLimit: "<30" | "30" | "40" | "50" | "60" | "70" | "";
  observedSpeed: number | undefined;
  streetFunction:
    | "High Street (active frontages)"
    | "Residential street"
    | "Local distributor road"
    | "";
}

export let state = writable(loadState());
state.subscribe((value) =>
  window.localStorage.setItem("cross-section", JSON.stringify(value)),
);

function loadState(): State {
  let x = JSON.parse(window.localStorage.getItem("cross-section") || "{}");
  // Could more thoroughly check for validity, but the format won't change much after initial development calms down
  if (x.proposed?.trafficData) {
    return x;
  }
  return emptyState();
}

export function emptyState(): State {
  return {
    summary: {
      schemeReference: "",
      schemeName: "",
      schemeSummary: "",
      authority: "",
      transportOrCombinedAuthority: "",
      region: "",
      fundingProgramme: "",
      designStage: "",
      fundingConditions: "",
      assessedRouteLengthKm: "",
      totalRouteLengthKm: "",
      notes: "",
    },
    proposed: {
      trafficData: {
        flowOneWay: "",
        flowTwoWay: "",
        flowSharedUse: "",
        trafficFlow: "",
        speedLimit: "",
        observedSpeed: undefined,
        streetFunction: "",
      },
      desirableMinimumCrossSection: [],
      absoluteMinimumCrossSection: [],
    },
  };
}

export let streetFeatureTypes = [
  "Footway",
  "Narrow Traffic / Bus Lane",
  "Wide Traffic / Bus Lane",
  "Traffic Lane (no buses): speed limit 20/30",
  "On-highway advisory/mandatory cycle lane",
  "1-way protected cycle track",
  "2-way protected cycle track",
  "Shared use cycle track",
  "Parking Bay",
  "Disabled Parking Bay",
  "Loading Bay",
  "Buffer / Verge",
] as const;
export type StreetFeatureType = (typeof streetFeatureTypes)[number];
