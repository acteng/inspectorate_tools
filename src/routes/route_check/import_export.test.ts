import { describe, it, expect } from "vitest";
import { getDalog, dalogToState } from "$lib/import";
import ExcelJS from "exceljs";
import { encodeDalog } from "./results_export/da_log";

describe("import then export", async () => {
  it("street_1", async () => doTest("test_files/street_1.xlsx"));
  it("street_2", async () => doTest("test_files/street_2.xlsx"));
  it("path_1", async () => doTest("test_files/path_1.xlsx"));
});

async function doTest(path: string) {
  let workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(path);
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

  expect(diffs.length).toBe(0);
}

function sameValues(a: any, b: any): boolean {
  if (typeof a == "number" && typeof b == "number") {
    return Math.abs(a - b) < 0.000001;
  }

  // TODO Temporarily be lenient about types...
  if (a == null && (b == "" || b == "0")) {
    return true;
  }

  return a == b;
}
