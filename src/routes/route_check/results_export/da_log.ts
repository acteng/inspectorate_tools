import { type State, type Scorecard } from "../data";
import { type Results, type ResultCategory, getResults } from "../results";

// Generates an enormous Excel row that encodes the full state, for use in other tools.
export function encode(state: State): [string, any][] {
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
    ...scorecardMetrics("PP", 16, state.pathPlacemakingCheck),
    ...policyCheckSummary(state),
    ...safetyCheckSummary(state),

    // TODO If it's neither path or street, levelOfService will be empty
    ...categoryBreakdowns(
      "ST-LOS",
      [...results.levelOfService, results.overall],
      isStreet,
      losCodes,
    ),
    ...categoryBreakdowns("ST-LOS", results.byMode, isStreet, {
      // TODO Remember to rename when changing these
      walking: "Wa",
      wheeling: "Wh",
      cycling: "Cy",
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
      // TODO Remember to rename when changing these
      walking: "Wa",
      wheeling: "Wh",
      cycling: "Cy",
      horse: "HR",
    }),
    ...categoryBreakdowns(
      "PP-LOS",
      [...results.placemakingCategories, results.placemakingOverall],
      isPath,
      placemakingCodes,
    ),

    ...jat(state, results),
    ...policyConflictLog(state),
  ];
}

function schemeSummary(state: State): [string, any][] {
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

function policyCheck(state: State): [string, any][] {
  let out: [string, any][] = [];
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
): [string, any][] {
  let out: [string, any][] = [];
  for (let i = 0; i < scorecard.existingScores.length; i++) {
    out.push([`${prefix}${num(i + offset)}-E`, scorecard.existingScores[i]]);
    out.push([`${prefix}${num(i + offset)}-D`, scorecard.proposedScores[i]]);
  }
  return out;
}

function num(idx: number): string {
  return (idx + 1).toString().padStart(2, "0");
}

function policyCheckSummary(state: State): [string, any][] {
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

function safetyCheckSummary(state: State): [string, any][] {
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
  blankAnswers: boolean,
  categoryCodes: { [category: string]: string },
): [string, any][] {
  let out: [string, any][] = [];
  for (let result of categories) {
    let code = categoryCodes[result.category];
    // TODO Double check if the % should be there
    out.push([
      `${prefix}-${code}-E`,
      blankAnswers ? "" : `${Math.round(result.existing.scorePercent)}%`,
    ]);
    out.push([
      `${prefix}-${code}-D`,
      blankAnswers ? "" : `${Math.round(result.proposed.scorePercent)}%`,
    ]);
  }
  return out;
}

function jat(state: State, results: Results): [string, any][] {
  let out: [string, any][] = [];
  let numJunctions = 12;

  for (let i = 1; i <= numJunctions; i++) {
    for (let [mode, code] of [
      ["walkingWheeling", "WW"],
      ["cycling", "Cy"],
      ["total", "To"],
    ] as const) {
      out.push([
        `J${i}-LOS-${code}-E`,
        i <= results.jat.length ? results.jat[i - 1][mode].existing : "",
      ]);
      out.push([
        `J${i}-LOS-${code}-D`,
        i <= results.jat.length ? results.jat[i - 1][mode].proposed : "",
      ]);
    }
  }

  for (let i = 1; i <= numJunctions; i++) {
    if (i <= results.jat.length) {
      // TODO Maybe need -E and -D variants here
      // TODO Use movement types as a proxy for arms
      out.push([
        `J${i}-Arms`,
        state.jat[i - 1].proposed.movements.filter(
          (m) => m.kind == "pedestrian",
        ).length,
      ]);
    } else {
      out.push([`J${i}-Arms`, 0]);
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

function policyConflictLog(state: State): [string, any][] {
  let out: [string, any][] = [];
  let numConflicts = 35;

  for (let i = 0; i < numConflicts; i++) {
    let values;
    if (i < state.policyConflictLog.length) {
      let conflict = state.policyConflictLog[i];
      values = {
        Ref: policyConflictId(state, i),
        // TODO n - description
        Typ: conflict.conflict,
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

/*
[
["01SARef", ],
["01SATyp", ],
["01SASta", ],
["01SALaL", ],
["01SALoc", ],
["01SARes", ],
["01SACom", ],
["02SARef", ],
["02SATyp", ],
["02SASta", ],
["02SALaL", ],
["02SALoc", ],
["02SARes", ],
["02SACom", ],
["03SARef", ],
["03SATyp", ],
["03SASta", ],
["03SALaL", ],
["03SALoc", ],
["03SARes", ],
["03SACom", ],
["04SARef", ],
["04SATyp", ],
["04SASta", ],
["04SALaL", ],
["04SALoc", ],
["04SARes", ],
["04SACom", ],
["05SARef", ],
["05SATyp", ],
["05SASta", ],
["05SALaL", ],
["05SALoc", ],
["05SARes", ],
["05SACom", ],
["06SARef", ],
["06SATyp", ],
["06SASta", ],
["06SALaL", ],
["06SALoc", ],
["06SARes", ],
["06SACom", ],
["07SARef", ],
["07SATyp", ],
["07SASta", ],
["07SALaL", ],
["07SALoc", ],
["07SARes", ],
["07SACom", ],
["08SARef", ],
["08SATyp", ],
["08SASta", ],
["08SALaL", ],
["08SALoc", ],
["08SARes", ],
["08SACom", ],
["09SARef", ],
["09SATyp", ],
["09SASta", ],
["09SALaL", ],
["09SALoc", ],
["09SARes", ],
["09SACom", ],
["10SARef", ],
["10SATyp", ],
["10SASta", ],
["10SALaL", ],
["10SALoc", ],
["10SARes", ],
["10SACom", ],
["11SARef", ],
["11SATyp", ],
["11SASta", ],
["11SALaL", ],
["11SALoc", ],
["11SARes", ],
["11SACom", ],
["12SARef", ],
["12SATyp", ],
["12SASta", ],
["12SALaL", ],
["12SALoc", ],
["12SARes", ],
["12SACom", ],
["13SARef", ],
["13SATyp", ],
["13SASta", ],
["13SALaL", ],
["13SALoc", ],
["13SARes", ],
["13SACom", ],
["14SARef", ],
["14SATyp", ],
["14SASta", ],
["14SALaL", ],
["14SALoc", ],
["14SARes", ],
["14SACom", ],
["15SARef", ],
["15SATyp", ],
["15SASta", ],
["15SALaL", ],
["15SALoc", ],
["15SARes", ],
["15SACom", ],
["16SARef", ],
["16SATyp", ],
["16SASta", ],
["16SALaL", ],
["16SALoc", ],
["16SARes", ],
["16SACom", ],
["17SARef", ],
["17SATyp", ],
["17SASta", ],
["17SALaL", ],
["17SALoc", ],
["17SARes", ],
["17SACom", ],
["18SARef", ],
["18SATyp", ],
["18SASta", ],
["18SALaL", ],
["18SALoc", ],
["18SARes", ],
["18SACom", ],
["19SARef", ],
["19SATyp", ],
["19SASta", ],
["19SALaL", ],
["19SALoc", ],
["19SARes", ],
["19SACom", ],
["20SARef", ],
["20SATyp", ],
["20SASta", ],
["20SALaL", ],
["20SALoc", ],
["20SARes", ],
["20SACom", ],
["21SARef", ],
["21SATyp", ],
["21SASta", ],
["21SALaL", ],
["21SALoc", ],
["21SARes", ],
["21SACom", ],
["22SARef", ],
["22SATyp", ],
["22SASta", ],
["22SALaL", ],
["22SALoc", ],
["22SARes", ],
["22SACom", ],
["23SARef", ],
["23SATyp", ],
["23SASta", ],
["23SALaL", ],
["23SALoc", ],
["23SARes", ],
["23SACom", ],
["24SARef", ],
["24SATyp", ],
["24SASta", ],
["24SALaL", ],
["24SALoc", ],
["24SARes", ],
["24SACom", ],
["25SARef", ],
["25SATyp", ],
["25SASta", ],
["25SALaL", ],
["25SALoc", ],
["25SARes", ],
["25SACom", ],
["26SARef", ],
["26SATyp", ],
["26SASta", ],
["26SALaL", ],
["26SALoc", ],
["26SARes", ],
["26SACom", ],
["27SARef", ],
["27SATyp", ],
["27SASta", ],
["27SALaL", ],
["27SALoc", ],
["27SARes", ],
["27SACom", ],
["28SARef", ],
["28SATyp", ],
["28SASta", ],
["28SALaL", ],
["28SALoc", ],
["28SARes", ],
["28SACom", ],
["29SARef", ],
["29SATyp", ],
["29SASta", ],
["29SALaL", ],
["29SALoc", ],
["29SARes", ],
["29SACom", ],
["30SARef", ],
["30SATyp", ],
["30SASta", ],
["30SALaL", ],
["30SALoc", ],
["30SARes", ],
["30SACom", ],
["31SARef", ],
["31SATyp", ],
["31SASta", ],
["31SALaL", ],
["31SALoc", ],
["31SARes", ],
["31SACom", ],
["32SARef", ],
["32SATyp", ],
["32SASta", ],
["32SALaL", ],
["32SALoc", ],
["32SARes", ],
["32SACom", ],
["33SARef", ],
["33SATyp", ],
["33SASta", ],
["33SALaL", ],
["33SALoc", ],
["33SARes", ],
["33SACom", ],
["34SARef", ],
["34SATyp", ],
["34SASta", ],
["34SALaL", ],
["34SALoc", ],
["34SARes", ],
["34SACom", ],
["35SARef", ],
["35SATyp", ],
["35SASta", ],
["35SALaL", ],
["35SALoc", ],
["35SARes", ],
["35SACom", ],
["Area-E", ],
["Area-D", ],
["Po-WW-E", ],
["Po-WW-D", ],
["Po-Cy-E", ],
["Po-Cy-D", ],
["Cr-WW-E", ],
["Cr-WW-D", ],
["Cr-Cy-E", ],
["Cr-Cy-D", ],
["Pe-WW-D", ],
["Pe-WW-E", ],
["Pe-Cy-D", ],
["Pe-Cy-E", ],
["MD-WW-D", ],
["MD-WW-E", ],
["MD-Cy-D", ],
["MD-Cy-E", ],
["MT-E", ],
["MT-D", ],
["PT-E", ],
["PT-D", ],
["GI-E", ],
["GI-D", ],
["IT-E", ],
["IT-D", ],
["EP-E", ],
["EP-D", ],
["TM-Comments", ],
["AC-Comments", ],
]
*/
