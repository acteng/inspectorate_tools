import { sum } from "$lib";
import { type Score, type State, type Scorecard, numericScore } from "./data";
import { pathModeIndices } from "$lib/route_check_results/path";
import { streetModeIndices } from "$lib/route_check_results/street";
import { safetyModeIndices } from "$lib/route_check_results/safety";

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

  jat: JunctionResult[];
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

export interface JunctionResult {
  walkingWheeling: JunctionResultScores;
  cycling: JunctionResultScores;
  total: JunctionResultScores;
}

// "50%" or "Not completed"
interface JunctionResultScores {
  existing: string;
  proposed: string;
}

export function getResults(state: State): Results {
  let checkType = state.summary.checkType;
  let isStreet = checkType == "street";
  let isPath = checkType == "path";
  // Note this has special scoring
  let safetyCheck = getResultCategory(
    "Safety",
    checkType,
    state.safetyCheck,
    null,
  );

  let levelOfService = [safetyCheck];
  if (isStreet) {
    levelOfService.push(
      getResultCategory("Accessibility", checkType, state.streetCheck, [0, 6]),
    );
    levelOfService.push(
      getResultCategory("Comfort", checkType, state.streetCheck, [7, 9]),
    );
    levelOfService.push(
      getResultCategory("Directness", checkType, state.streetCheck, [10, 15]),
    );
    levelOfService.push(
      getResultCategory(
        "Attractiveness",
        checkType,
        state.streetCheck,
        [16, 21],
      ),
    );
    levelOfService.push(
      getResultCategory("Cohesion", checkType, state.streetCheck, [22, 25]),
    );
  } else if (isPath) {
    levelOfService.push(
      getResultCategory("Accessibility", checkType, state.pathCheck, [0, 4]),
    );
    levelOfService.push(
      getResultCategory("Comfort", checkType, state.pathCheck, [5, 15]),
    );
    levelOfService.push(
      getResultCategory("Directness", checkType, state.pathCheck, [16, 19]),
    );
    levelOfService.push(
      getResultCategory("Attractiveness", checkType, state.pathCheck, [20, 24]),
    );
    levelOfService.push(
      getResultCategory("Cohesion", checkType, state.pathCheck, [25, 29]),
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
        checkType,
        state.streetPlacemakingCheck,
        [0, 2],
      ),
    );
    placemakingCategories.push(
      getResultCategory(
        "Personal security",
        checkType,
        state.streetPlacemakingCheck,
        [3, 5],
      ),
    );
    placemakingCategories.push(
      getResultCategory(
        "Character and legibility",
        checkType,
        state.streetPlacemakingCheck,
        [6, 15],
      ),
    );
    placemakingCategories.push(
      getResultCategory(
        "Environment",
        checkType,
        state.streetPlacemakingCheck,
        [16, 25],
      ),
    );
  } else if (isPath) {
    placemakingCategories.push(
      getResultCategory(
        "Social activity",
        checkType,
        state.pathPlacemakingCheck,
        [0, 2],
      ),
      getResultCategory(
        "Personal security",
        checkType,
        state.pathPlacemakingCheck,
        [3, 5],
      ),
      getResultCategory(
        "Character and legibility",
        checkType,
        state.pathPlacemakingCheck,
        [6, 9],
      ),
      getResultCategory(
        "Environment",
        checkType,
        state.pathPlacemakingCheck,
        [10, 18],
      ),
    );
  }
  let placemakingOverall = {
    category: "overall",
    existing: sumResults(placemakingCategories.map((x) => x.existing)),
    proposed: sumResults(placemakingCategories.map((x) => x.proposed)),
  };

  let byMode: ResultCategory[] = [];
  if (isStreet) {
    byMode = getByMode(
      state.safetyCheck,
      state.streetCheck,
      streetModeIndices,
      state.summary.checkType,
    );
  } else if (isPath) {
    byMode = getByMode(
      state.safetyCheck,
      state.pathCheck,
      pathModeIndices,
      state.summary.checkType,
    );
  }

  let jat = getJatResults(state);

  return {
    safetyCheck,
    // Safety is included in the Street and Path Check results
    streetCheck: isStreet
      ? sumResultCategories(
          safetyCheck,
          getResultCategory("", checkType, state.streetCheck, null),
        )
      : null,
    streetPlacemaking: isStreet
      ? getResultCategory("", checkType, state.streetPlacemakingCheck, null)
      : null,
    pathCheck: isPath
      ? sumResultCategories(
          safetyCheck,
          getResultCategory("", checkType, state.pathCheck, null),
        )
      : null,
    pathPlacemaking: isPath
      ? getResultCategory("", checkType, state.pathPlacemakingCheck, null)
      : null,

    levelOfService,
    overall,

    placemakingCategories,
    placemakingOverall,

    byMode,

    jat,
  };
}

function getResultCategory(
  category: string,
  checkType: "street" | "path" | "",
  scorecard: Scorecard,
  range: [number, number] | null,
): ResultCategory {
  return {
    category,
    existing: getResult(scorecard.existingScores, category, checkType, range),
    proposed: getResult(scorecard.proposedScores, category, checkType, range),
  };
}

// Range is inclusive
// TODO Remove this indirection now
function getResult(
  scores: Score[],
  category: string,
  checkType: "street" | "path" | "",
  range: [number, number] | null,
): Result {
  let actualRange = range || [0, scores.length - 1];
  let idx1 = actualRange[0];
  let idx2 = actualRange[1] + 1;
  return getResultFromScores(scores.slice(idx1, idx2), category, checkType);
}

// The list of Scores is already filtered
function getResultFromScores(
  scores: Score[],
  category: string,
  checkType: "street" | "path" | "",
): Result {
  let numberMetrics = scores.filter((x) => x != "N/A").length;

  let multiplier = 1;
  if (category == "Safety") {
    multiplier = 3;
  } else if (checkType == "path" && category == "Personal security") {
    multiplier = 2;
  }
  let totalPossibleScore = numberMetrics * 2 * multiplier;

  let score = multiplier * sum(scores.map(numericScore));
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

// TODO Partly duplicate code, because of both the different indexing and due to combining two sources per mode?
function getByMode(
  safetyScores: Scorecard,
  losScores: Scorecard,
  losIndicesPerMode: { [mode: string]: number[] },
  checkType: "street" | "path" | "",
): ResultCategory[] {
  let results = [];
  for (let [mode, losIndices] of Object.entries(losIndicesPerMode)) {
    // TODO No safety questions for horse -- double check the logic is still fine
    // @ts-expect-error The key types aren't precise
    let safetyIndices = safetyModeIndices[mode] || [];
    let safety = {
      category: "Safety",
      existing: getResultFromScores(
        subset(safetyScores.existingScores, safetyIndices),
        "Safety",
        checkType,
      ),
      proposed: getResultFromScores(
        subset(safetyScores.proposedScores, safetyIndices),
        "Safety",
        checkType,
      ),
    };
    let los = {
      category: "",
      existing: getResultFromScores(
        subset(losScores.existingScores, losIndices),
        "",
        checkType,
      ),
      proposed: getResultFromScores(
        subset(losScores.proposedScores, losIndices),
        "",
        checkType,
      ),
    };
    let combined = sumResultCategories(safety, los);
    combined.category = mode;
    results.push(combined);
  }
  return results;
}

function subset<T>(list: T[], indices: number[]): T[] {
  return indices.map((i) => list[i]);
}

function getJatResults(state: State): JunctionResult[] {
  // TODO Duplicate code
  let scoreLookup = {
    0: 0,
    1: 1,
    2: 2,
    X: 0,
  };

  let out = [];
  for (let junction of state.jat) {
    let result = {
      walkingWheeling: {
        existing: "",
        proposed: "",
      },
      cycling: {
        existing: "",
        proposed: "",
      },
      total: {
        existing: "",
        proposed: "",
      },
    };
    for (let stage of ["existing", "proposed"] as const) {
      let scoreWW = 0;
      let totalPossibleWW = 0;
      let scoreCycling = 0;
      let totalPossibleCycling = 0;
      let scoreBoth = 0;
      let totalPossibleBoth = 0;
      for (let m of junction[stage].movements) {
        if (m.kind == "walking & wheeling") {
          scoreWW += scoreLookup[m.score];
          totalPossibleWW += 2;
        } else {
          scoreCycling += scoreLookup[m.score];
          totalPossibleCycling += 2;
        }
        scoreBoth += scoreLookup[m.score];
        totalPossibleBoth += 2;
      }

      result.walkingWheeling[stage] =
        totalPossibleWW > 0
          ? `${(scoreWW / totalPossibleWW) * 100}%`
          : "Not Completed";
      result.cycling[stage] =
        totalPossibleCycling > 0
          ? `${(scoreCycling / totalPossibleCycling) * 100}%`
          : "Not Comleted";
      result.total[stage] =
        totalPossibleBoth > 0
          ? `${(scoreBoth / totalPossibleBoth) * 100}%`
          : "Not Completed";
    }
    out.push(result);
  }
  return out;
}
