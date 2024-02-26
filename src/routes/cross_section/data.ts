import { writable } from "svelte/store";

export interface State {
  trafficData: TrafficData;
}

export let state = writable(loadState());
state.subscribe((value) =>
  window.localStorage.setItem("cross-section", JSON.stringify(value)),
);

// TODO Enums, if it's useful
export interface TrafficData {
  flowOneWay: string;
  flowTwoWay: string;
  flowSharedUse: string;
  trafficFlow: string;
  speedLimit: string;
  observedSpeed: number | undefined;
  streetFunction: string;
}

function loadState(): State {
  let x = JSON.parse(window.localStorage.getItem("cross-section") || "{}");
  // Could more thoroughly check for validity, but the format won't change much after initial development calms down
  if (x.trafficData) {
    return x;
  }
  return emptyState();
}

export function emptyState(): State {
  return {
    trafficData: {
      flowOneWay: "",
      flowTwoWay: "",
      flowSharedUse: "",
      trafficFlow: "",
      speedLimit: "",
      observedSpeed: undefined,
      streetFunction: "",
    },
  };
}
