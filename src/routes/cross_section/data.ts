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
    // TODO Enums, if it's useful
    trafficData: {
      flowOneWay: string;
      flowTwoWay: string;
      flowSharedUse: string;
      trafficFlow: string;
      speedLimit: string;
      observedSpeed: number | undefined;
      streetFunction: string;
    };
    desirableMinimumCrossSection: string[];
    absoluteMinimumCrossSection: string[];
  };
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

// TODO Is "lane" the correct term?
export let laneTypes = [
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
];
