import ExcelJS from "exceljs";
import blankUrl from "$lib/assets/blank_area_check.xlsx?url";
import type { State } from "./data";
import { downloadBinaryFile } from "$lib";

export async function downloadExcelFile(state: State) {
  console.log("Loading blank area check xlsx");
  let resp = await fetch(blankUrl);
  let bytes = await resp.arrayBuffer();
  let workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(bytes);

  summaryOfScheme(state, workbook);
  trafficMitigationCheck(state, workbook);
  areaScorecard(state, workbook);

  workbook.getWorksheet("Results & Commentary")!.getCell("F17").value =
    state.resultsNotes;

  console.log("Writing area check xlsx");
  let outBytes = await workbook.xlsx.writeBuffer();
  downloadBinaryFile(outBytes, "out.xlsx");
}

function summaryOfScheme(state: State, workbook: ExcelJS.Workbook) {
  let sheet = workbook.getWorksheet("Summary of Scheme")!;

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
  sheet.getCell("C18").value = state.summary.schemeAreaSizeKm2;
  sheet.getCell("C19").value = state.summary.notes;
}

function trafficMitigationCheck(state: State, workbook: ExcelJS.Workbook) {
  let sheet = workbook.getWorksheet("Traffic Mitigation Check")!;
  let data = state.trafficMitigationCheck;

  sheet.getCell("C6").value = data.q1;
  sheet.getCell("C11").value = data.q2;
  sheet.getCell("C16").value = data.q3;

  if (data.q3 == "Major routes (e.g. scheme eliminates a rat run)") {
    sheet.getCell("C21").value = data.majorQ1;
    sheet.getCell("C26").value = data.majorQ2;
    sheet.getCell("C31").value = data.majorQ3;
    sheet.getCell("C36").value = data.majorQ4;
  } else if (data.q3 == "Minor streets (e.g. residential)") {
    sheet.getCell("C21").value = data.minorQ1;
    sheet.getCell("C26").value = data.minorQ2;
  }

  sheet.getCell("E11").value = data.notes;
}

function areaScorecard(state: State, workbook: ExcelJS.Workbook) {
  let sheet = workbook.getWorksheet("Area Scorecard")!;
  // TODO
}
