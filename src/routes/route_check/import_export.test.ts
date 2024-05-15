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
    let val2 = outputDalogObj[key];
    if (!sameValues(val1, val2)) {
      diffs.push([key, val1, val2]);
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

function sameValues(a: any, b: any): boolean {
  if (typeof a == "number" && typeof b == "number") {
    return Math.abs(a - b) < 0.000001;
  }

  // TODO Temporarily be lenient about types...
  /*if (a == null && (b == "" || b == "0")) {
          return true;
  }*/

  return a == b;
}
