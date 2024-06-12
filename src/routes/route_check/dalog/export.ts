import ExcelJS from "exceljs";
import blankUrl from "$lib/assets/blank_route_check.xlsx?url";
import type { State, Scorecard, Score } from "../data";
import type { Position } from "$lib/map";

export async function downloadExcelFile(state: State) {
  console.log("Loading blank route check xlsx");
  let resp = await fetch(blankUrl);
  let bytes = await resp.arrayBuffer();
  let workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(bytes);

  // TODO There's some bug writing conditional formatting, so just clear it all out
  workbook.eachSheet((worksheet, sheetId) => {
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

  console.log("Writing route check xlsx");
  let outBytes = await workbook.xlsx.writeBuffer();
  downloadGeneratedFile(outBytes, "out.xlsx");
}

function summaryOfScheme(state: State, workbook: ExcelJS.Workbook) {
  let sheet = workbook.getWorksheet("1. Summary of Scheme")!;

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

  // TODO Fill out coordinates
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
    // TODO Need the full name
    sheet.getCell("F" + (8 + i)).value = pc.conflict;
    sheet.getCell("H" + (8 + i)).value = pc.stage;
    sheet.getCell("I" + (8 + i)).value = point(pc.point);
    sheet.getCell("J" + (8 + i)).value = pc.locationName;
    sheet.getCell("K" + (8 + i)).value = pc.resolved;
    sheet.getCell("L" + (8 + i)).value = pc.notes;
  }
}

function criticalIssueLog(state: State, workbook: ExcelJS.Workbook) {
  let sheet = workbook.getWorksheet("3.2 Critical Issues Log")!;

  for (let [i, ci] of state.criticalIssues.entries()) {
    // TODO Need the full name
    sheet.getCell("F" + (8 + i)).value = ci.criticalIssue;
    sheet.getCell("H" + (8 + i)).value = ci.stage;
    sheet.getCell("I" + (8 + i)).value = point(ci.point);
    sheet.getCell("J" + (8 + i)).value = ci.locationName;
    sheet.getCell("K" + (8 + i)).value = ci.resolved;
    sheet.getCell("L" + (8 + i)).value = ci.notes;
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

function point(pt: Position): string {
  return `${pt[1]}, ${pt[0]}`;
}

function downloadGeneratedFile(bytes: ArrayBuffer, filename: string) {
  let blob = new Blob([bytes], { type: "application/octet-stream" });
  let url = URL.createObjectURL(blob);

  let link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
