import { sum } from "$lib";
import { pathModeIndices } from "$lib/route_check_results/path";
import { safetyModeIndices } from "$lib/route_check_results/safety";
import { streetModeIndices } from "$lib/route_check_results/street";
import { numericScore, type Score, type Scorecard, type State } from "./data";

export interface Results {
  // For the summary's Overview table
  safetyCheck: ResultCategory;

  // For the summary's Level of Service table
  levelOfService: ResultCategory[];
  overall: ResultCategory;

  // For the further analysis breakdown
  // TODO Consider restructuring -- consistently have the category breakdowns,
  // then the overall summary?
  placemakingCategories: ResultCategory[];
  placemakingOverall: ResultCategory;

  byMode: ResultCategory[];

  // The last entry will be Overall
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
  name: string;
  walkingWheeling: JunctionResultScores;
  cycling: JunctionResultScores;
  total: JunctionResultScores;
}

// A percentage. Null means "Not completed"
interface JunctionResultScores {
  existing: number | null;
  proposed: number | null;
  netDifference: number | null;
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
    [0, 15],
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
  range: [number, number],
): ResultCategory {
  return {
    category,
    existing: getResultFromScores(
      scorecard.existingScores.slice(range[0], range[1] + 1),
      category,
      checkType,
    ),
    proposed: getResultFromScores(
      scorecard.proposedScores.slice(range[0], range[1] + 1),
      category,
      checkType,
    ),
  };
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
// Note for path checks, this always returns an entry for horse riders, even if they should be disabled.
function getByMode(
  safetyScores: Scorecard,
  losScores: Scorecard,
  losIndicesPerMode: { [mode: string]: number[] },
  checkType: "street" | "path" | "",
): ResultCategory[] {
  let results = [];
  for (let [mode, losIndices] of Object.entries(losIndicesPerMode)) {
    // Note there are no safety questions for horses
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
    let result: JunctionResult = {
      name: junction.name,
      walkingWheeling: {
        existing: null,
        proposed: null,
        netDifference: null,
      },
      cycling: {
        existing: null,
        proposed: null,
        netDifference: null,
      },
      total: {
        existing: null,
        proposed: null,
        netDifference: null,
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
          ? Math.round((scoreWW / totalPossibleWW) * 100)
          : null;
      result.cycling[stage] =
        totalPossibleCycling > 0
          ? Math.round((scoreCycling / totalPossibleCycling) * 100)
          : null;
      result.total[stage] =
        totalPossibleBoth > 0
          ? Math.round((scoreBoth / totalPossibleBoth) * 100)
          : null;
    }
    for (let mode of ["walkingWheeling", "cycling", "total"] as const) {
      let existing = result[mode].existing;
      let proposed = result[mode].proposed;
      if (existing != null && proposed != null) {
        result[mode].netDifference = proposed - existing;
      }
    }
    out.push(result);
  }

  out.push(overallJat(out));

  return out;
}

function overallJat(results: JunctionResult[]): JunctionResult {
  let overall: JunctionResult = {
    name: "Overall",
    walkingWheeling: {
      existing: null,
      proposed: null,
      netDifference: null,
    },
    cycling: {
      existing: null,
      proposed: null,
      netDifference: null,
    },
    total: {
      existing: null,
      proposed: null,
      netDifference: null,
    },
  };

  // Average each entry, handling null
  for (let mode of ["walkingWheeling", "cycling", "total"] as const) {
    for (let key of ["existing", "proposed", "netDifference"] as const) {
      let sum = 0;
      let total = 0;
      for (let result of results) {
        let value = result[mode][key];
        if (value != null) {
          sum += value;
          total += 100;
        }
      }
      if (total > 0) {
        overall[mode][key] = Math.round((sum / total) * 100);
      }
    }
  }

  return overall;
}
