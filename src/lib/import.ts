import type { Position } from "$lib/map";
import ExcelJS, { type Cell, type CellValue } from "exceljs";
import {
  emptyState,
  type Score,
  type Scorecard,
  type State,
} from "../routes/route_check/data";
import { dateToString } from "./";

// TODO More cautious error checking
export function getDalog(workbook: ExcelJS.Workbook): {
  [name: string]: string | number | Date | null;
} {
  let sheet = workbook.getWorksheet("DALog")!;

  // @ts-expect-error TODO
  let keys: string[] = sheet.getRow(1).values.map((v: CellValue) => {
    if (typeof v == "string") {
      return v;
    } else {
      // @ts-expect-error TODO
      return v.result;
    }
  });
  // @ts-expect-error TODO
  let values = sheet.getRow(2).values.map((v: CellValue) => {
    if (typeof v == "string") {
      return v;
    } else {
      // TODO Missing vs 0 is hard to detect
      // @ts-expect-error TODO
      return v.result ?? null;
    }
  });

  // The first two entries are null
  keys.shift();
  keys.shift();
  values.shift();
  values.shift();

  let pairs = keys.map((key, i) => [key, values[i]]);
  return Object.fromEntries(pairs);
}

function num(idx: number): string {
  return (idx + 1).toString().padStart(2, "0");
}

// TODO Don't export?
export function dalogToState(dalog: {
  [name: string]: string | number | Date | null;
}): State {
  let state = emptyState();

  let normalString = (key: string) => {
    let value = dalog[key];
    if (typeof value == "string") {
      return value;
    }
    if (value == null) {
      return "";
    }
    throw new Error(`${key} isn't a string, it's ${value}`);
  };
  // Log warnings and return 0 for invalid values
  let numberOrZero = (key: string) => {
    let value = dalog[key];
    if (typeof value == "number") {
      return value;
    }
    if (value == null) {
      return 0;
    }
    console.warn(`${key} isn't a number, it's ${value}. Defaulting to 0`);
    return 0;
  };
  let yesNoBlank = (key: string) => {
    let value = dalog[key];
    if (value == "" || value == "Yes" || value == "No") {
      return value;
    }
    if (value == null) {
      return "";
    }
    throw new Error(`${key} isn't yesNoBlank, it's ${value}`);
  };
  let score = (key: string) => {
    let value = dalog[key];
    if (value == "" || value == "C" || value == "N/A") {
      return value;
    }
    if (value == 0 || value == 1 || value == 2) {
      return value.toString() as Score;
    }
    // TODO Depends on the check type
    if (value == null) {
      return "";
    }
    throw new Error(`${key} isn't score, it's ${value}`);
  };
  let point = (key: string) => {
    let parts: number[] = normalString(key).split(", ").map(parseFloat);
    return [parts[1], parts[0]] as Position;
  };

  let checkType: "street" | "path" =
    normalString("Sub-tool") == "Street Check" ? "street" : "path";

  state.summary = {
    dateDesignReview: "",
    schemeReference: normalString("Scheme Ref"),
    schemeName: normalString("Scheme Name"),
    // Not in the DALOG
    schemeSummary: "",
    schemeInfoReviewed: "",
    authority: normalString("Authority"),
    transportOrCombinedAuthority: normalString("Transport/ Combined Authority"),
    region: normalString("Region"),
    fundingProgramme: normalString("Funding Programme"),
    designStage: normalString("Design Stage"),
    fundingConditions: normalString("Funding Conditions"),
    inspectorEmail: normalString("Inspector"),
    // TODO These seem to be swapped in Excel, so fix here
    assessedRouteLengthKm: numberOrZero("RouteLength"),
    totalRouteLengthKm: numberOrZero("RouteFileLength"),
    notes: normalString("Notes"),
    checkType,
    networkMap: { type: "FeatureCollection", features: [] },
  };

  // The horse rider question isn't directly in the DALOG, but the LOS column is derived from it
  state.horseRiders = dalog["PA-LOS-HR-E"] == "N/A" ? "No" : "Yes";

  for (let [i, pc] of state.policyCheck.entries()) {
    pc.existing = yesNoBlank(`PC${num(i)}-E`);
    pc.proposed = yesNoBlank(`PC${num(i)}-D`);
  }

  for (let [scorecard, prefix, offset] of [
    [state.safetyCheck, "SA", 0],
    [state.streetCheck, "ST", 16],
    [state.streetPlacemakingCheck, "SP", 0],
    [state.pathCheck, "PA", 16],
    [state.pathPlacemakingCheck, "PP", 0],
  ] as const) {
    for (let i = 0; i < scorecard.existingScores.length; i++) {
      scorecard.existingScores[i] = score(`${prefix}${num(i + offset)}-E`);
      scorecard.proposedScores[i] = score(`${prefix}${num(i + offset)}-D`);
    }
  }

  for (let i = 0; i < 35; i++) {
    let prefix = `${num(i)}PC`;
    if (dalog[`${prefix}Ref`] == null) {
      // Blank rows are possible
      continue;
    }
    state.policyConflictLog.push({
      // Just a single digit code
      // @ts-expect-error TODO Check more carefully for enum errors
      conflict: normalString(`${prefix}Typ`).substr(0, 1),
      // @ts-expect-error TODO Check more carefully for enum errors
      stage: normalString(`${prefix}Sta`),
      point: point(`${prefix}LaL`),
      locationName: normalString(`${prefix}Loc`),
      resolved: yesNoBlank(`${prefix}Res`),
      notes: normalString(`${prefix}Com`),
    });
  }

  for (let i = 0; i < 35; i++) {
    let prefix = `${num(i)}SA`;
    if (dalog[`${prefix}Ref`] == null) {
      // Blank rows are possible
      continue;
    }
    state.criticalIssues.push({
      // @ts-expect-error TODO Check more carefully for enum errors
      criticalIssue: normalString(`${prefix}Typ`).split(" - ")[0],
      // @ts-expect-error TODO Check more carefully for enum errors
      stage: normalString(`${prefix}Sta`),
      point: point(`${prefix}LaL`),
      locationName: normalString(`${prefix}Loc`),
      resolved: yesNoBlank(`${prefix}Res`),
      notes: normalString(`${prefix}Com`),
    });
  }

  // JAT level-of-service stats are included, but not enough for us to import anything

  return state;
}

export function importFromExcel(workbook: ExcelJS.Workbook): State {
  let dalog = getDalog(workbook);
  let state = dalogToState(dalog);

  // More fields for scheme summary
  let sheet = workbook.getWorksheet("1. Summary of Scheme")!;
  state.summary.schemeSummary = strValue(sheet.getCell("C9"));
  state.summary.schemeInfoReviewed = strValue(sheet.getCell("C10"));

  // Policy check commentary
  sheet = workbook.getWorksheet("2.1 Policy Check")!;
  for (let i = 0; i < 6; i++) {
    state.policyCheck[i].commentary = strValue(sheet.getCell("F" + (8 + i)));
  }

  // Note some code is adapted from export.ts and could be refactored
  importScorecardComments(
    state.safetyCheck,
    workbook,
    "3.1 Safety Check",
    ["J", "K", "L", "M"],
    makeRanges([[13, 28]]),
  );
  importScorecardComments(
    state.streetCheck,
    workbook,
    "4.1 Street Check",
    ["J", "K", "L", "M"],
    makeRanges([
      [13, 19],
      [23, 25],
      [29, 34],
      [38, 43],
      [47, 50],
    ]),
  );
  importScorecardComments(
    state.streetPlacemakingCheck,
    workbook,
    "4.2 Street Placemaking Check",
    ["I", "J", "K", "L"],
    makeRanges([
      [13, 15],
      [19, 21],
      [25, 34],
      [38, 47],
    ]),
  );
  importScorecardComments(
    state.pathCheck,
    workbook,
    "5.1 Path Check",
    ["J", "K", "L", "M"],
    makeRanges([
      [15, 19],
      [23, 33],
      [37, 40],
      [44, 48],
      [52, 56],
    ]),
  );
  importScorecardComments(
    state.pathPlacemakingCheck,
    workbook,
    "5.2 Path Placemaking Check",
    ["I", "J", "K", "L"],
    makeRanges([
      [12, 14],
      [20, 22],
      [26, 29],
      [33, 41],
    ]),
  );

  // Results
  sheet = workbook.getWorksheet("7.1 Results Summary")!;
  state.resultsReviewStatement = strValue(sheet.getCell("G7"));
  if (
    state.resultsReviewStatement ==
    "Use the space to provide overall feedback for the proposed scheme."
  ) {
    state.resultsReviewStatement = "";
  }

  return state;
}

function strValue(cell: Cell): string {
  if (typeof cell.value == "string") {
    return cell.value;
  }
  if (cell.value == null) {
    return "";
  }
  throw new Error(`Input cell isn't a string, it's ${cell.value}`);
}

function makeRanges(ranges: [number, number][]): number[] {
  let results = [];
  for (let [a, b] of ranges) {
    for (let i = a; i <= b; i++) {
      results.push(i);
    }
  }
  return results;
}

function importScorecardComments(
  scorecard: Scorecard,
  workbook: ExcelJS.Workbook,
  sheetName: string,
  excelColumns: string[],
  excelRows: number[],
) {
  let sheet = workbook.getWorksheet(sheetName)!;
  if (excelRows.length != scorecard.existingScores.length) {
    throw new Error(`Wrong Excel ranges for ${sheetName}`);
  }

  for (let i = 0; i < scorecard.existingScores.length; i++) {
    let row = excelRows[i];
    scorecard.existingScoreNotes[i] = strValue(
      sheet.getCell(excelColumns[1] + row),
    );
    scorecard.proposedScoreNotes[i] = strValue(
      sheet.getCell(excelColumns[3] + row),
    );
  }
}
