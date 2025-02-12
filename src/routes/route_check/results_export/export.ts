import { downloadBinaryFile } from "$lib";
import blankUrl from "$lib/assets/blank_route_check.xlsx?url";
import type { Position } from "$lib/map";
import { read, writeXLSX, type WorkBook, type WorkSheet } from "xlsx";
import type { Score, Scorecard, State } from "../data";
import { getFullCriticalIssue, getFullPolicyConflict } from "../lists";

export async function downloadExcelFile(state: State, currentFile: string) {
  console.log("Loading blank route check xlsx");
  let resp = await fetch(blankUrl);
  let bytes = await resp.arrayBuffer();

  let workbook = read(bytes);

  summaryOfScheme(state, workbook);
  policyCheck(state, workbook);
  policyConflictLog(state, workbook);
  criticalIssueLog(state, workbook);

  populateScorecard(
    state.safetyCheck,
    workbook,
    "3.1 Safety Check",
    ["J", "K", "L", "M"],
    makeRanges([[13, 28]]),
  );
  populateScorecard(
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
  populateScorecard(
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
  populateScorecard(
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
  populateScorecard(
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

  jat(state, workbook);

  workbook.Sheets["5.1 Path Check"]["D7"].v = state.horseRiders;
  workbook.Sheets["7.1 Results Summary"]["G7"].v = state.resultsReviewStatement;

  console.log("Writing route check xlsx");
  let outBytes = writeXLSX(workbook, { type: "array" });
  downloadBinaryFile(outBytes, `route_check_${currentFile}.xlsx`);
}

function summaryOfScheme(state: State, workbook: WorkBook) {
  let sheet: WorkSheet = workbook.Sheets["1. Summary of Scheme"];

  // TODO Back in Excel, it looks like there's a leading ' in the value, but it renders fine in the DALOG
  sheet["C6"].v = state.summary.dateDesignReview;
  sheet["C7"].v = state.summary.schemeReference;
  sheet["C8"].v = state.summary.schemeName;
  sheet["C9"].v = state.summary.schemeSummary;
  sheet["C10"].v = state.summary.schemeInfoReviewed;
  sheet["C11"].v = state.summary.authority;
  sheet["C12"].v = state.summary.transportOrCombinedAuthority;
  sheet["C13"].v = state.summary.region;
  sheet["C14"].v = state.summary.fundingProgramme;
  sheet["C15"].v = state.summary.designStage;
  sheet["C16"].v = state.summary.fundingConditions;
  sheet["C17"].v = state.summary.inspectorEmail;
  sheet["C18"].v = state.summary.assessedRouteLengthKm;
  sheet["C19"].v = state.summary.totalRouteLengthKm;
  sheet["C20"].v = state.summary.notes;

  sheet["D22"].v =
    state.summary.checkType == "path" ? "Path Check" : "Street Check";

  // The route could be split into many pieces. Arbitrarily use coordinates from the first LineString.
  for (let f of state.summary.networkMap.features) {
    if (f.geometry.type == "LineString") {
      // Start point
      sheet["C26"].v = f.geometry.coordinates[0][1];
      sheet["D26"].v = f.geometry.coordinates[0][0];
      // End point
      sheet["C27"].v = f.geometry.coordinates[0][1];
      sheet["D27"].v = f.geometry.coordinates[0][0];
      // For the webmap link, just center on the start point
      sheet["C28"].v =
        `https://www.openstreetmap.org/#map=18/${f.geometry.coordinates[0][1]}/${f.geometry.coordinates[0][0]}`;
      break;
    }
  }
}

function policyCheck(state: State, workbook: WorkBook) {
  let sheet = workbook.Sheets["2.1 Policy Check"];

  for (let i = 0; i < 6; i++) {
    sheet["D" + (8 + i)].v = state.policyCheck[i].existing;
    sheet["E" + (8 + i)].v = state.policyCheck[i].proposed;
    sheet["F" + (8 + i)].v = state.policyCheck[i].commentary;
  }
}

function policyConflictLog(state: State, workbook: WorkBook) {
  let sheet = workbook.Sheets["2.2 Policy Conflict Log"];

  for (let [i, pc] of state.policyConflictLog.entries()) {
    sheet["F" + (8 + i)].v = getFullPolicyConflict(pc.conflict);
    sheet["H" + (8 + i)].v = pc.stage;
    sheet["I" + (8 + i)].v = point(pc.point);
    sheet["J" + (8 + i)].v = pc.locationName;
    // if the issue is noted on Design stage then it is not resolved by design
    sheet["K" + (8 + i)].v = pc.stage === "Design" ? "No" : pc.resolved;
    sheet["L" + (8 + i)].v = pc.notes;
  }

  // TODO ExcelJS somehow breaks the dropdown menu on some pages. Manually restore it.
  /*for (let i = 0; i < 42; i++) {
    sheet.getCell("F" + (8 + i)).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ["'8.2 Lookups&Forumlae2'!$B$7:$B$12"],
    };
  }*/
}

function criticalIssueLog(state: State, workbook: WorkBook) {
  let sheet = workbook.Sheets["3.2 Critical Issues Log"];

  for (let [i, ci] of state.criticalIssues.entries()) {
    sheet["F" + (8 + i)].v = getFullCriticalIssue(ci.criticalIssue);
    sheet["H" + (8 + i)].v = ci.stage;
    sheet["I" + (8 + i)].v = point(ci.point);
    sheet["J" + (8 + i)].v = ci.locationName;
    // if the issue is noted on Design stage then it is not resolved by design
    sheet["K" + (8 + i)].v = ci.stage === "Design" ? "No" : ci.resolved;
    sheet["L" + (8 + i)].v = ci.notes;
  }

  /*// Fix the dropdown menu thatExcelJS breaks
  for (let i = 0; i < 42; i++) {
    sheet.getCell("F" + (8 + i)).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ["'8.2 Lookups&Forumlae2'!$B$16:$B$39"],
    };
  }*/
}

function populateScorecard(
  scorecard: Scorecard,
  workbook: WorkBook,
  sheetName: string,
  excelColumns: string[],
  excelRows: number[],
) {
  let sheet = workbook.Sheets[sheetName];
  if (excelRows.length != scorecard.existingScores.length) {
    throw new Error(`Wrong Excel ranges for ${sheetName}`);
  }

  for (let i = 0; i < scorecard.existingScores.length; i++) {
    let row = excelRows[i];
    sheet[excelColumns[0] + row].v = fixScore(scorecard.existingScores[i]);
    sheet[excelColumns[1] + row].v = scorecard.existingScoreNotes[i];
    sheet[excelColumns[2] + row].v = fixScore(scorecard.proposedScores[i]);
    sheet[excelColumns[3] + row].v = scorecard.proposedScoreNotes[i];
  }
}

function jat(state: State, workbook: WorkBook) {
  let sheet = workbook.Sheets["6. JAT Check"];

  let junctionIdx = 0;

  for (let junction of state.jat) {
    for (let assessment of [junction.existing, junction.proposed]) {
      let baseCol = col("H", junctionIdx * 5);

      sheet[col(baseCol, 1) + "9"].v = junction.name;
      sheet[col(baseCol, 1) + "10"].v = assessment.notes;

      for (let [movementIdx, movement] of assessment.movements
        .filter((m) => m.kind == "walking & wheeling")
        .entries()) {
        sheet[baseCol + (13 + movementIdx)].v = movement.name;
        sheet[col(baseCol, 2) + (13 + movementIdx)].v = fixJatScore(
          movement.score,
        );
        sheet[col(baseCol, 3) + (13 + movementIdx)].v = movement.notes;
      }

      for (let [movementIdx, movement] of assessment.movements
        .filter((m) => m.kind == "cycling")
        .entries()) {
        sheet[baseCol + (26 + movementIdx)].v = movement.name;
        sheet[col(baseCol, 2) + (26 + movementIdx)].v = fixJatScore(
          movement.score,
        );
        sheet[col(baseCol, 3) + (26 + movementIdx)].v = movement.notes;
      }

      // Increment twice per junction (once per assessment)
      junctionIdx++;
    }
  }
}

// TODO Needs unit testing
function col(base: string, offset: number): string {
  return numberToCol(colToNumber(base) + offset);
}

function colToNumber(column: string): number {
  let result = 0;
  for (let i = 0; i < column.length; i++) {
    result *= 26;
    result += column.charCodeAt(i) - "A".charCodeAt(0) + 1;
  }
  return result - 1;
}

function numberToCol(num: number): string {
  let result = "";
  num += 1;
  while (num > 0) {
    let remainder = (num - 1) % 26;
    result = String.fromCharCode(remainder + "A".charCodeAt(0)) + result;
    num = Math.floor((num - 1) / 26);
  }
  return result;
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

function fixScore(s: Score): number | string {
  return {
    "": s,
    C: s,
    "0": 0,
    "1": 1,
    "2": 2,
    "N/A": s,
  }[s];
}

function fixJatScore(s: "0" | "1" | "2" | "X"): number | string {
  return {
    "0": 0,
    "1": 1,
    "2": 2,
    X: s,
  }[s];
}

function point(pt: Position): string {
  return `${pt[1]}, ${pt[0]}`;
}
