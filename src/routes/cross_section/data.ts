import { writable } from "svelte/store";
import { LocalStorageFiles } from "$lib/files";
import type { FeatureCollection } from "geojson";
import type { Position } from "$lib/map";

export let state = writable(emptyState());
export let currentFile = writable("");

export let files = new LocalStorageFiles(
  "cross_section/",
  emptyState,
  validate,
  state,
  currentFile,
);

export interface State {
  version: string;
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
    assessedRouteLengthKm: number;
    totalRouteLengthKm: number;
    notes: string;
    networkMap: FeatureCollection;
  };
  proposed: {
    trafficData: TrafficData;
    customFeatures: CustomFeatures;
    // TODO Rename after we've settled on wording
    desirableMinimumCrossSection: Array<StreetFeatureType | "">;
    absoluteMinimumCrossSection: Array<StreetFeatureType | "">;
  };
  checks: {
    homogeneousSections: Array<CheckHomogeneousSection>;
    pinchPoints: Array<CheckPinchPoint>;
  };
  resultsCommentary: string;
}

// Keyed by UUID
export type CustomFeatures = {
  [uuid: string]: {
    // Must be unique and also not the same as streetFeatureTypes
    name: string;
    width: number;
  };
};

export interface TrafficData {
  flowOneWay: "<200" | "200-800" | ">800" | "";
  flowTwoWay: "<300" | "300-1,000" | ">1,000" | "";
  flowSharedUse: "<300" | ">300" | "";
  trafficFlow: "<2,500" | "2,500-5,000" | "5,000-10,000" | ">10,000" | "";
  speedLimit: SpeedLimit;
  observedSpeed: number | undefined;
  streetFunction:
  | "High Street (active frontages)"
  | "Residential street"
  | "Local distributor road"
  | "";
}

export interface CheckHomogeneousSection {
  availableWidth: number;
  notes: string;
}

export interface CheckPinchPoint {
  location: Position;
  availableWidth: number;
  notes: string;
}

function validate(state: State) {
  if (state.version != "alpha-0") {
    throw new Error("File format appears outdated");
  }
}

function emptyState(): State {
  return {
    version: "alpha-0",
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
      assessedRouteLengthKm: 0,
      totalRouteLengthKm: 0,
      notes: "",
      networkMap: { type: "FeatureCollection", features: [] },
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
      customFeatures: {},
      desirableMinimumCrossSection: [],
      absoluteMinimumCrossSection: [],
    },
    checks: {
      homogeneousSections: [],
      pinchPoints: [],
    },
    resultsCommentary: "",
  };
}

export let speedLimits = ["<30", "30", "40", "50", "60", "70", ""] as const;
export type SpeedLimit = (typeof speedLimits)[number];

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
export type BuiltinStreetFeatureType = (typeof streetFeatureTypes)[number];
// Custom features are identified by UUID
export type StreetFeatureType = BuiltinStreetFeatureType | { custom: string };

export type BufferDetails = {
  warning: string;
  functionsToDispatch: ("addRightBuffer" | "addLeftBuffer" | "delete" | "moveLeft" | "moveRight")[];
};
