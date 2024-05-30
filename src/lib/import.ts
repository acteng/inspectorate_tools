import ExcelJS, { type CellValue } from "exceljs";
import { emptyState, type State, type Score } from "../routes/route_check/data";
import type { Position } from "$lib/map";

// TODO More cautious error checking
export function getDalog(workbook: ExcelJS.Workbook): {
  [name: string]: string | number | null;
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

export function dalogToState(dalog: {
  [name: string]: string | number | null;
}): State {
  let state = emptyState();

  let normalString = (key: string) => {
    let value = dalog[key];
    if (typeof value == "string") {
      return value;
    }
    // TODO Figure out how to represent these
    // @ts-expect-error TODO also TS fail
    if (typeof value == "object" && value instanceof Date) {
      // @ts-expect-error TODO also TS fail
      return value.toString();
    }
    // TODO RouteFileLength and such
    if (typeof value == "number") {
      return value.toString();
    }
    if (value == null) {
      return "";
    }
    throw new Error(`${key} isn't a string, it's ${value}`);
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
      return "0";
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
    dateDesignReview: normalString("Date of Design Review"),
    schemeReference: normalString("Scheme Ref"),
    schemeName: normalString("Scheme Name"),
    // TODO
    schemeSummary: "",
    // TODO
    schemeInfoReviewed: "",
    authority: normalString("Authority"),
    transportOrCombinedAuthority: normalString("Transport/ Combined Authority"),
    region: normalString("Region"),
    fundingProgramme: normalString("Funding Programme"),
    designStage: normalString("Design Stage"),
    fundingConditions: normalString("Funding Conditions"),
    inspectorEmail: normalString("Inspector"),
    assessedRouteLengthKm: normalString("RouteFileLength"),
    totalRouteLengthKm: normalString("RouteLength"),
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
      conflict: normalString(`${prefix}Typ`).substr(0, 1),
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
      criticalIssue: normalString(`${prefix}Typ`).split(" - ")[0],
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
