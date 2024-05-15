import { type State, type Scorecard } from "../data";
import { type Results, type ResultCategory, getResults } from "../results";
import {
  criticalIssueChoices,
  policyConflictChoices,
} from "../problems_map/lists";

type Value = string | number | null;

// Generates an enormous Excel row that encodes the full state, for use in other tools.
export function encodeDalog(state: State): [string, Value][] {
  let results = getResults(state);
  let isStreet = state.summary.checkType == "street";
  let isPath = state.summary.checkType == "path";

  let losCodes = {
    Safety: "Sa",
    Accessibility: "Ac",
    Comfort: "Cf",
    Directness: "Di",
    Attractiveness: "At",
    Cohesion: "Co",
    overall: "To",
  };
  let placemakingCodes = {
    "Social activity": "SA",
    "Personal security": "PS",
    "Character and legibility": "CL",
    Environment: "En",
    overall: "To",
  };

  return [
    ...schemeSummary(state),
    ...policyCheck(state),
    ...scorecardMetrics("SA", 0, state.safetyCheck),
    ...scorecardMetrics("ST", 16, state.streetCheck),
    ...scorecardMetrics("SP", 0, state.streetPlacemakingCheck),
    ...scorecardMetrics("PA", 16, state.pathCheck),
    ...scorecardMetrics("PP", 0, state.pathPlacemakingCheck),
    ...policyCheckSummary(state),
    ...safetyCheckSummary(state),

    // TODO If it's neither path or street, levelOfService will be empty
    ...categoryBreakdowns(
      "ST-LOS",
      [...results.levelOfService, results.overall],
      isStreet,
      losCodes,
    ),
    // TODO If this is a path check, we'll have Horse Riding, but it won't be in this mapping, nor should it be
    ...categoryBreakdowns("ST-LOS", results.byMode, isStreet, {
      Walking: "Wa",
      Wheeling: "Wh",
      Cycling: "Cy",
    }),
    ...categoryBreakdowns(
      "SP-LOS",
      [...results.placemakingCategories, results.placemakingOverall],
      isStreet,
      placemakingCodes,
    ),

    ...categoryBreakdowns(
      "PA-LOS",
      [...results.levelOfService, results.overall],
      isPath,
      losCodes,
    ),
    ...categoryBreakdowns("PA-LOS", results.byMode, isPath, {
      Walking: "Wa",
      Wheeling: "Wh",
      Cycling: "Cy",
      "Horse Riding": "HR",
    }),
    ...categoryBreakdowns(
      "PP-LOS",
      [...results.placemakingCategories, results.placemakingOverall],
      isPath,
      placemakingCodes,
    ),

    ...jat(state, results),
    ...policyConflictLog(state),
    ...criticalIssues(state),
    ...areaCheck(),
  ];
}

function schemeSummary(state: State): [string, Value][] {
  let x = state.summary;
  return [
    ["Scheme Ref", x.schemeReference],
    ["Date of Design Review", x.dateDesignReview],
    ["Scheme Name", x.schemeName],
    ["Authority", x.authority],
    ["Transport/ Combined Authority", x.transportOrCombinedAuthority],
    ["Region", x.region],
    ["Funding Programme", x.fundingProgramme],
    ["Design Stage", x.designStage],
    ["Funding Conditions", x.fundingConditions],
    ["Inspector", x.inspectorEmail],
    ["RouteLength", x.totalRouteLengthKm],
    ["RouteFileLength", x.assessedRouteLengthKm],
    ["Notes", x.notes],
    ["Tool", "Route Check online-alpha"],
    // Don't worry about the blank case; the output of this log wouldn't matter anyway
    ["Sub-tool", x.checkType == "street" ? "Street Check" : "Path Check"],
  ];
}

function policyCheck(state: State): [string, Value][] {
  let out: [string, Value][] = [];
  for (let [i, x] of state.policyCheck.entries()) {
    out.push([`PC${num(i)}-E`, x.existing]);
    out.push([`PC${num(i)}-D`, x.proposed]);
  }
  return out;
}

function scorecardMetrics(
  prefix: string,
  offset: number,
  scorecard: Scorecard,
): [string, Value][] {
  let out: [string, Value][] = [];
  for (let i = 0; i < scorecard.existingScores.length; i++) {
    out.push([`${prefix}${num(i + offset)}-E`, scorecard.existingScores[i]]);
    out.push([`${prefix}${num(i + offset)}-D`, scorecard.proposedScores[i]]);
  }
  return out;
}

function num(idx: number): string {
  return (idx + 1).toString().padStart(2, "0");
}

function policyCheckSummary(state: State): [string, Value][] {
  // TODO Some duplication with results_analysis, but not worth folding into Results yet
  let policyConflicts = {
    existing: state.policyConflictLog.filter((x) => x.stage == "Existing")
      .length,
    designed: state.policyConflictLog.filter((x) => x.stage == "Design").length,
    removed: state.policyConflictLog.filter((x) => x.resolved == "Yes").length,
  };
  return [
    ["PC-E", policyConflicts.existing],
    ["PC-D", policyConflicts.designed],
    ["PC-Rem", policyConflicts.removed],
    ["PC-Int", policyConflicts.designed],
    [
      "PC-Tot",
      policyConflicts.designed +
        policyConflicts.existing -
        policyConflicts.removed,
    ],
  ];
}

function safetyCheckSummary(state: State): [string, Value][] {
  let criticalIssues = {
    existing: state.criticalIssues.filter((x) => x.stage == "Existing").length,
    designed: state.criticalIssues.filter((x) => x.stage == "Design").length,
    removed: state.criticalIssues.filter((x) => x.resolved == "Yes").length,
  };
  return [
    ["SA-E", criticalIssues.existing],
    ["SA-D", criticalIssues.designed],
    ["SA-Rem", criticalIssues.removed],
    ["SA-Int", criticalIssues.designed],
    [
      "SA-Tot",
      criticalIssues.designed +
        criticalIssues.existing -
        criticalIssues.removed,
    ],
  ];
}

function categoryBreakdowns(
  prefix: string,
  categories: ResultCategory[],
  useAnswers: boolean,
  categoryCodes: { [category: string]: string },
): [string, Value][] {
  let out: [string, Value][] = [];
  for (let result of categories) {
    let code = categoryCodes[result.category];
    out.push([
      `${prefix}-${code}-E`,
      useAnswers ? result.existing.scorePercent / 100 : null,
    ]);
    out.push([
      `${prefix}-${code}-D`,
      useAnswers ? result.proposed.scorePercent / 100 : null,
    ]);
  }
  return out;
}

function jat(state: State, results: Results): [string, Value][] {
  let out: [string, Value][] = [];
  let numJunctions = 12;

  for (let i = 1; i <= numJunctions; i++) {
    for (let [mode, code] of [
      ["walkingWheeling", "WW"],
      ["cycling", "Cy"],
      ["total", "To"],
    ] as const) {
      out.push([
        `J${i}-LOS-${code}-E`,
        i <= results.jat.length
          ? results.jat[i - 1][mode].existing
          : "Not Completed",
      ]);
      out.push([
        `J${i}-LOS-${code}-D`,
        i <= results.jat.length
          ? results.jat[i - 1][mode].proposed
          : "Not Completed",
      ]);
    }
  }

  for (let i = 1; i <= numJunctions; i++) {
    if (i <= results.jat.length) {
      // TODO Maybe need -E and -D variants here
      out.push([`J${i}-Arms`, state.jat[i - 1].proposed.arms.length]);
    } else {
      out.push([`J${i}-Arms`, null]);
    }
  }

  return out;
}

function policyConflictId(state: State, i: number): string {
  let conflict = state.policyConflictLog[i];

  // This conflict is what instance of this type?
  let count = 0;
  for (let j = 0; j <= i; j++) {
    if (state.policyConflictLog[j].conflict == conflict.conflict) {
      count++;
    }
  }

  let parts = [
    state.summary.schemeReference,
    `P${conflict.conflict.padStart(3, "0")}`,
    `${count.toString().padStart(2, "0")}P`,
  ];
  return parts.join("_");
}

function policyConflictLog(state: State): [string, Value][] {
  let out: [string, Value][] = [];
  let numConflicts = 35;

  for (let i = 0; i < numConflicts; i++) {
    let values;
    if (i < state.policyConflictLog.length) {
      let conflict = state.policyConflictLog[i];
      values = {
        Ref: policyConflictId(state, i),
        Typ: policyConflictChoices.find(
          (pair) => pair[0] == conflict.conflict,
        )![1],
        Sta: conflict.stage,
        LaL: `${conflict.point[1]}, ${conflict.point[0]}`,
        Loc: conflict.locationName,
        Res: conflict.resolved,
        Com: conflict.notes,
      };
    } else {
      values = {
        Ref: "",
        Typ: "",
        Sta: "",
        LaL: "",
        Loc: "",
        Res: "",
        Com: "",
      };
    }
    for (let [k, v] of Object.entries(values)) {
      out.push([`${num(i)}PC${k}`, v]);
    }
  }
  return out;
}

function criticalIssueId(state: State, i: number): string {
  let critical = state.criticalIssues[i];

  // This critical is what instance of this type?
  let count = 0;
  for (let j = 0; j <= i; j++) {
    if (state.criticalIssues[j].criticalIssue == critical.criticalIssue) {
      count++;
    }
  }

  let parts = [
    state.summary.schemeReference,
    `SA${critical.criticalIssue.padStart(2, "0")}`,
    `${count.toString().padStart(2, "0")}P`,
  ];
  return parts.join("_");
}

function criticalIssues(state: State): [string, Value][] {
  let out: [string, Value][] = [];
  let numCriticals = 35;

  for (let i = 0; i < numCriticals; i++) {
    let values;
    if (i < state.criticalIssues.length) {
      let critical = state.criticalIssues[i];
      values = {
        Ref: criticalIssueId(state, i),
        Typ: criticalIssueChoices.find(
          (pair) => pair[0] == critical.criticalIssue,
        )![1],
        Sta: critical.stage,
        LaL: `${critical.point[1]}, ${critical.point[0]}`,
        Loc: critical.locationName,
        Res: critical.resolved,
        Com: critical.notes,
      };
    } else {
      values = {
        Ref: "",
        Typ: "",
        Sta: "",
        LaL: "",
        Loc: "",
        Res: "",
        Com: "",
      };
    }
    for (let [k, v] of Object.entries(values)) {
      out.push([`${num(i)}SA${k}`, v]);
    }
  }
  return out;
}

// Unused keys in route check
function areaCheck(): [string, Value][] {
  let keys = [
    "Area-E",
    "Area-D",
    "Po-WW-E",
    "Po-WW-D",
    "Po-Cy-E",
    "Po-Cy-D",
    "Cr-WW-E",
    "Cr-WW-D",
    "Cr-Cy-E",
    "Cr-Cy-D",
    "Pe-WW-D",
    "Pe-WW-E",
    "Pe-Cy-D",
    "Pe-Cy-E",
    "MD-WW-D",
    "MD-WW-E",
    "MD-Cy-D",
    "MD-Cy-E",
    "MT-E",
    "MT-D",
    "PT-E",
    "PT-D",
    "GI-E",
    "GI-D",
    "IT-E",
    "IT-D",
    "EP-E",
    "EP-D",
    "TM-Comments",
    "AC-Comments",
  ];
  return keys.map((k) => [k, ""]);
}
