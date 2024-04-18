export { default as Breadcrumbs } from "./Breadcrumbs.svelte";
export { default as DecimalInput } from "./DecimalInput.svelte";
export { default as FancyRadio } from "./FancyRadio.svelte";
export { default as Geocoder } from "./Geocoder.svelte";
export { default as ExternalLink } from "./ExternalLink.svelte";
export { default as Modal } from "./Modal.svelte";
export { default as PrevNext } from "./PrevNext.svelte";
export { default as YesNo } from "./YesNo.svelte";

export function pairs(list: string[]): [string, string][] {
  return list.map((x) => [x, x]);
}

export function repeatCloned<T>(length: number, x: T): T[] {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(JSON.parse(JSON.stringify(x)));
  }
  return result;
}

export function sum(list: number[]): number {
  return list.reduce((total, x) => total + x, 0);
}

type ScorecardState = {
  existingScores: string[];
  proposedScores: string[];
};

export function getCompletedForScorecard(
  scorecardState: ScorecardState,
  length: number,
): boolean[] {
  return Array.from(Array(length).keys()).map(
    (idx) =>
      scorecardState.existingScores[idx] != "" &&
      scorecardState.proposedScores[idx] != "",
  );
}

export function isScorecardCompleted(scorecardState: ScorecardState): boolean {
  return (
    getCompletedForScorecard(
      scorecardState,
      scorecardState.existingScores.length,
    ).filter((questionComplete) => questionComplete === false).length === 0
  );
}

export function getScorecardDifference(scorecardState: ScorecardState): number {
  let existingSum: number = 0;
  let proposedSum: number = 0;
  Array.from(Array(scorecardState.existingScores.length).keys()).forEach(
    (idx) => {
      let existing = parseInt(scorecardState.existingScores[idx]);
      let proposed = parseInt(scorecardState.proposedScores[idx]);
      if (!Number.isNaN(existing)) {
        existingSum += existing;
      }
      if (!Number.isNaN(proposed)) {
        proposedSum += proposed;
      }
    },
  );
  return proposedSum - existingSum;
}
