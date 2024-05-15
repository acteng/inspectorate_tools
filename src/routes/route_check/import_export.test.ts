import { describe, expect } from "vitest";
import { getDalog, dalogToState } from "$lib/import";
import ExcelJS from "exceljs";
import { encodeDalog } from "./results_export/da_log";

describe("import then export", async () => {
  let workbook = new ExcelJS.Workbook();
  // TODO Repeat for all test files
  await workbook.xlsx.readFile("test_files/path_1.xlsx");
  let inputDalog = getDalog(workbook);
  let state = dalogToState(inputDalog);
  let outputDalog = encodeDalog(state);

  // Debug mismatches
  let outputDalogObj = Object.fromEntries(outputDalog);
  let diffs = [];
  for (let [key, val1] of Object.entries(inputDalog)) {
    if (outputDalogObj[key] != val1) {
      diffs.push([key, val1, outputDalogObj[key]]);
    }
  }
  for (let [key, val2] of Object.entries(outputDalogObj)) {
    if (!Object.hasOwn(inputDalog, key)) {
      diffs.push([key, "MISSING", val2]);
    }
  }
  console.log(JSON.stringify(diffs, null, "  "));
  console.log(`${diffs.length} keys differ`);

  // This compares the array order of pairs, which is vital for copying. The
  // diff is long, but legible.
  expect(Object.entries(inputDalog)).toBe(outputDalog);
});
