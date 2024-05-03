import { sum } from "$lib";
import { type Score, type State, type Scorecard, numericScore } from "./data";

export interface Results {
  // For the summary's Overview table
  safetyCheck: ResultCategory;
  streetCheck: ResultCategory | null;
  // TODO Now redundant with placemakingOverall
  streetPlacemaking: ResultCategory | null;
  pathCheck: ResultCategory | null;
  pathPlacemaking: ResultCategory | null;

  // For the summary's Level of Service table
  levelOfService: ResultCategory[];
  overall: ResultCategory;

  // For the further analysis breakdown
  // TODO Consider restructuring -- consistently have the category breakdowns,
  // then the overall summary?
  placemakingCategories: ResultCategory[];
  placemakingOverall: ResultCategory;

  byMode: ResultCategory[];
}

export interface ResultCategory {
  category: string;
  existing: Result;
  proposed: Result;
}

interface Result {
  numberMetrics: number;
  totalPossibleScore: number;

  score: number;
  scorePercent: number;
}

export function getResults(state: State): Results {
  let isStreet = state.summary.checkType == "street";
  let isPath = state.summary.checkType == "path";
  // Note this has special scoring
  let safetyCheck = getResultCategory("Safety", state.safetyCheck, null);

  let levelOfService = [safetyCheck];
  if (isStreet) {
    levelOfService.push(
      getResultCategory("Accessibility", state.streetCheck, [0, 6]),
    );
    levelOfService.push(
      getResultCategory("Comfort", state.streetCheck, [7, 9]),
    );
    levelOfService.push(
      getResultCategory("Directness", state.streetCheck, [10, 15]),
    );
    levelOfService.push(
      getResultCategory("Attractiveness", state.streetCheck, [16, 21]),
    );
    levelOfService.push(
      getResultCategory("Cohesion", state.streetCheck, [22, 25]),
    );
  } else if (isPath) {
    levelOfService.push(
      getResultCategory("Accessibility", state.pathCheck, [0, 4]),
    );
    levelOfService.push(getResultCategory("Comfort", state.pathCheck, [5, 15]));
    levelOfService.push(
      getResultCategory("Directness", state.pathCheck, [16, 19]),
    );
    levelOfService.push(
      getResultCategory("Attractiveness", state.pathCheck, [20, 24]),
    );
    levelOfService.push(
      getResultCategory("Cohesion", state.pathCheck, [25, 29]),
    );
  }

  let overall = {
    category: "overall",
    existing: sumResults(levelOfService.map((x) => x.existing)),
    proposed: sumResults(levelOfService.map((x) => x.proposed)),
  };

  let placemakingCategories = [];
  if (isStreet) {
    placemakingCategories.push(
      getResultCategory(
        "Social activity",
        state.streetPlacemakingCheck,
        [0, 2],
      ),
    );
    placemakingCategories.push(
      getResultCategory(
        "Personal security",
        state.streetPlacemakingCheck,
        [3, 5],
      ),
    );
    placemakingCategories.push(
      getResultCategory(
        "Character and legibility",
        state.streetPlacemakingCheck,
        [6, 15],
      ),
    );
    placemakingCategories.push(
      getResultCategory("Environment", state.streetPlacemakingCheck, [16, 25]),
    );
  } else if (isPath) {
    placemakingCategories.push(
      getResultCategory("Social activity", state.pathPlacemakingCheck, [0, 2]),
      getResultCategory(
        "Personal security",
        state.pathPlacemakingCheck,
        [3, 5],
      ),
      getResultCategory(
        "Character and legibility",
        state.pathPlacemakingCheck,
        [6, 9],
      ),
      getResultCategory("Environment", state.pathPlacemakingCheck, [10, 18]),
    );
  }
  let placemakingOverall = {
    category: "overall",
    existing: sumResults(placemakingCategories.map((x) => x.existing)),
    proposed: sumResults(placemakingCategories.map((x) => x.proposed)),
  };

  // TODO
  let byMode: ResultCategory[] = [];
  if (isStreet) {
  } else if (isPath) {
  }

  return {
    safetyCheck,
    // Safety is included in the Street and Path Check results
    streetCheck: isStreet
      ? sumResultCategories(
          safetyCheck,
          getResultCategory("", state.streetCheck, null),
        )
      : null,
    streetPlacemaking: isStreet
      ? getResultCategory("", state.streetPlacemakingCheck, null)
      : null,
    pathCheck: isPath
      ? sumResultCategories(
          safetyCheck,
          getResultCategory("", state.pathCheck, null),
        )
      : null,
    pathPlacemaking: isPath
      ? getResultCategory("", state.pathPlacemakingCheck, null)
      : null,

    levelOfService,
    overall,

    placemakingCategories,
    placemakingOverall,

    byMode,
  };
}

function getResultCategory(
  category: string,
  scorecard: Scorecard,
  range: [number, number] | null,
): ResultCategory {
  return {
    category,
    existing: getResult(scorecard.existingScores, category, range),
    proposed: getResult(scorecard.proposedScores, category, range),
  };
}

// Range is inclusive
function getResult(
  scores: Score[],
  category: string,
  range: [number, number] | null,
): Result {
  let actualRange = range || [0, scores.length - 1];
  let idx1 = actualRange[0];
  let idx2 = actualRange[1] + 1;

  let numberMetrics = scores.slice(idx1, idx2).filter((x) => x != "N/A").length;

  // TODO Personal security is 2x?
  let multiplier = category == "Safety" ? 3 : 1;
  let totalPossibleScore = numberMetrics * 2 * multiplier;

  let score = multiplier * sum(scores.slice(idx1, idx2).map(numericScore));
  let scorePercent = (score / totalPossibleScore) * 100;

  return {
    numberMetrics,
    totalPossibleScore,

    score,
    scorePercent,
  };
}

function sumResults(results: Result[]): Result {
  let numberMetrics = sum(results.map((x) => x.numberMetrics));
  let totalPossibleScore = sum(results.map((x) => x.totalPossibleScore));
  let score = sum(results.map((x) => x.score));
  let scorePercent = (score / totalPossibleScore) * 100;
  return { numberMetrics, totalPossibleScore, score, scorePercent };
}

// The category is left blank
function sumResultCategories(
  x1: ResultCategory,
  x2: ResultCategory,
): ResultCategory {
  return {
    category: "",
    existing: sumResults([x1.existing, x2.existing]),
    proposed: sumResults([x1.proposed, x2.proposed]),
  };
}

export function netDifference(x: ResultCategory): string {
  let percent = Math.round(x.proposed.scorePercent - x.existing.scorePercent);
  return `${percent}%`;
}
