import ExcelJS from "exceljs";
import blankUrl from "$lib/assets/blank_route_check.xlsx?url";
import type { State, Scorecard, Score } from "../data";
import type { Position } from "$lib/map";
import { getFullPolicyConflict, getFullCriticalIssue } from "../lists";
import { downloadBinaryFile } from "$lib";

export async function downloadExcelFile(state: State, currentFile: string) {
  console.log("Loading blank route check xlsx");
  let resp = await fetch(blankUrl);
  let bytes = await resp.arrayBuffer();
  let workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(bytes);

  // TODO There's some bug writing conditional formatting, so just clear it all out
  workbook.eachSheet((worksheet, _sheetId) => {
    // @ts-expect-error This really is there
    worksheet.conditionalFormattings = [];
  });

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

  workbook.getWorksheet("5.1 Path Check")!.getCell("D7").value =
    state.horseRiders;
  workbook.getWorksheet("7.1 Results Summary")!.getCell("G7").value =
    state.resultsReviewStatement;

  console.log("Writing route check xlsx");
  let outBytes = await workbook.xlsx.writeBuffer();
  downloadBinaryFile(outBytes, `route_check_${currentFile}.xlsx`);
}

function summaryOfScheme(state: State, workbook: ExcelJS.Workbook) {
  let sheet = workbook.getWorksheet("1. Summary of Scheme")!;

  // TODO Back in Excel, it looks like there's a leading ' in the value, but it renders fine in the DALOG
  sheet.getCell("C6").value = state.summary.dateDesignReview;
  sheet.getCell("C7").value = state.summary.schemeReference;
  sheet.getCell("C8").value = state.summary.schemeName;
  sheet.getCell("C9").value = state.summary.schemeSummary;
  sheet.getCell("C10").value = state.summary.schemeInfoReviewed;
  sheet.getCell("C11").value = state.summary.authority;
  sheet.getCell("C12").value = state.summary.transportOrCombinedAuthority;
  sheet.getCell("C13").value = state.summary.region;
  sheet.getCell("C14").value = state.summary.fundingProgramme;
  sheet.getCell("C15").value = state.summary.designStage;
  sheet.getCell("C16").value = state.summary.fundingConditions;
  sheet.getCell("C17").value = state.summary.inspectorEmail;
  sheet.getCell("C18").value = state.summary.assessedRouteLengthKm;
  sheet.getCell("C19").value = state.summary.totalRouteLengthKm;
  sheet.getCell("C20").value = state.summary.notes;

  if (state.summary.checkType == "path") {
    sheet.getCell("D22").value = "Path Check";
  }

  // The route could be split into many pieces. Arbitrarily use coordinates from the first LineString.
  for (let f of state.summary.networkMap.features) {
    if (f.geometry.type == "LineString") {
      // Start point
      sheet.getCell("C26").value = f.geometry.coordinates[0][1];
      sheet.getCell("D26").value = f.geometry.coordinates[0][0];
      // End point
      sheet.getCell("C27").value = f.geometry.coordinates[0][1];
      sheet.getCell("D27").value = f.geometry.coordinates[0][0];
      // For the webmap link, just center on the start point
      sheet.getCell("C28").value =
        `https://www.openstreetmap.org/#map=18/${f.geometry.coordinates[0][1]}/${f.geometry.coordinates[0][0]}`;
      break;
    }
  }
}

function policyCheck(state: State, workbook: ExcelJS.Workbook) {
  let sheet = workbook.getWorksheet("2.1 Policy Check")!;

  for (let i = 0; i < 6; i++) {
    sheet.getCell("D" + (8 + i)).value = state.policyCheck[i].existing;
    sheet.getCell("E" + (8 + i)).value = state.policyCheck[i].proposed;
    sheet.getCell("F" + (8 + i)).value = state.policyCheck[i].commentary;
  }
}

function policyConflictLog(state: State, workbook: ExcelJS.Workbook) {
  let sheet = workbook.getWorksheet("2.2 Policy Conflict Log")!;

  for (let [i, pc] of state.policyConflictLog.entries()) {
    sheet.getCell("F" + (8 + i)).value = getFullPolicyConflict(pc.conflict);
    sheet.getCell("H" + (8 + i)).value = pc.stage;
    sheet.getCell("I" + (8 + i)).value = point(pc.point);
    sheet.getCell("J" + (8 + i)).value = pc.locationName;
    // if the issue is noted on Design stage then it is not resolved by design
    sheet.getCell("K" + (8 + i)).value =
      pc.stage === "Design" ? "No" : pc.resolved;
    sheet.getCell("L" + (8 + i)).value = pc.notes;
  }

  for (let i = 0; i < 42; i++) {
    sheet.getCell("F" + (8 + i)).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ["'8.2 Lookups&Forumlae2'!$B$7:$B$12"],
    };
  }
}

function criticalIssueLog(state: State, workbook: ExcelJS.Workbook) {
  let sheet = workbook.getWorksheet("3.2 Critical Issues Log")!;

  for (let [i, ci] of state.criticalIssues.entries()) {
    sheet.getCell("F" + (8 + i)).value = getFullCriticalIssue(ci.criticalIssue);
    sheet.getCell("H" + (8 + i)).value = ci.stage;
    sheet.getCell("I" + (8 + i)).value = point(ci.point);
    sheet.getCell("J" + (8 + i)).value = ci.locationName;
    // if the issue is noted on Design stage then it is not resolved by design
    sheet.getCell("K" + (8 + i)).value =
      ci.stage === "Design" ? "No" : ci.resolved;
    sheet.getCell("L" + (8 + i)).value = ci.notes;
  }

  for (let i = 0; i < 42; i++) {
    sheet.getCell("F" + (8 + i)).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ["'8.2 Lookups&Forumlae2'!$B$16:$B$39"],
    };
  }
}

function populateScorecard(
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
    sheet.getCell(excelColumns[0] + row).value = fixScore(
      scorecard.existingScores[i],
    );
    sheet.getCell(excelColumns[1] + row).value =
      scorecard.existingScoreNotes[i];
    sheet.getCell(excelColumns[2] + row).value = fixScore(
      scorecard.proposedScores[i],
    );
    sheet.getCell(excelColumns[3] + row).value =
      scorecard.proposedScoreNotes[i];
  }
}

function jat(state: State, workbook: ExcelJS.Workbook) {
  let sheet = workbook.getWorksheet("6. JAT Check")!;

  let junctionIdx = 0;

  for (let junction of state.jat) {
    for (let assessment of [junction.existing, junction.proposed]) {
      let baseCol = col("H", junctionIdx * 5);

      sheet.getCell(col(baseCol, 1) + "9").value = junction.name;
      sheet.getCell(col(baseCol, 1) + "10").value = assessment.notes;

      for (let [movementIdx, movement] of assessment.movements
        .filter((m) => m.kind == "walking & wheeling")
        .entries()) {
        sheet.getCell(baseCol + (13 + movementIdx)).value = movement.name;
        sheet.getCell(col(baseCol, 2) + (13 + movementIdx)).value = fixJatScore(
          movement.score,
        );
        sheet.getCell(col(baseCol, 3) + (13 + movementIdx)).value =
          movement.notes;
      }

      for (let [movementIdx, movement] of assessment.movements
        .filter((m) => m.kind == "cycling")
        .entries()) {
        sheet.getCell(baseCol + (26 + movementIdx)).value = movement.name;
        sheet.getCell(col(baseCol, 2) + (26 + movementIdx)).value = fixJatScore(
          movement.score,
        );
        sheet.getCell(col(baseCol, 3) + (26 + movementIdx)).value =
          movement.notes;
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
