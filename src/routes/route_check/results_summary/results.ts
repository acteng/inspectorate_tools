import { sum } from "$lib";
import { type Score, type State, type Scorecard, numericScore } from "../data";

export interface Results {
  categories: ResultCategory[];
  overall: ResultCategory;
}

interface ResultCategory {
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
  let categories = [getResultCategory("Safety", state.safetyCheck, null)];
  if (state.summary.checkType == "street") {
    categories.push(
      getResultCategory("Accessibility", state.streetCheck, [0, 6]),
    );
    categories.push(getResultCategory("Comfort", state.streetCheck, [7, 9]));
    categories.push(
      getResultCategory("Directness", state.streetCheck, [10, 15]),
    );
    categories.push(
      getResultCategory("Attractiveness", state.streetCheck, [16, 21]),
    );
    categories.push(getResultCategory("Cohesion", state.streetCheck, [22, 25]));
  } else if (state.summary.checkType == "path") {
    categories.push(
      getResultCategory("Accessibility", state.pathCheck, [0, 4]),
    );
    categories.push(getResultCategory("Comfort", state.pathCheck, [5, 15]));
    categories.push(getResultCategory("Directness", state.pathCheck, [16, 19]));
    categories.push(
      getResultCategory("Attractiveness", state.pathCheck, [20, 24]),
    );
    categories.push(getResultCategory("Cohesion", state.pathCheck, [25, 29]));
  }

  let overall = {
    category: "overall",
    existing: sumResults(categories.map((x) => x.existing)),
    proposed: sumResults(categories.map((x) => x.proposed)),
  };

  return { categories, overall };
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
