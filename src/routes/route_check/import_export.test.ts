import { describe, it, expect } from "vitest";
import { dateToString } from "$lib";
import { getDalog, dalogToState } from "$lib/import";
import ExcelJS from "exceljs";
import { encodeDalog } from "./dalog/da_log";

describe("import then export", async () => {
  it("street_1", async () => doTest("test_files/street_1.xlsx"));

  // TODO Note in the original version of this, row 20 on the critical issue log is blank. The import code correctly handles it, but the output columns have their ordering messed up. So the blank row is removed from the test file, to make the diff more meaningful.
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
    if (!sameValues(key, val1, val2)) {
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

function sameValues(key: string, a: any, b: any): boolean {
  // This is expected to differ
  if (
    key == "Tool" &&
    a == "RouteCheck2024-1" &&
    b == "Route Check online-alpha"
  ) {
    return true;
  }

  // Excel incorrectly fills out path check columns for a street check, and vice versa.
  // TODO Fix upstream in Excel
  if (
    (key.startsWith("PA-LOS-") || key.startsWith("ST-LOS-")) &&
    a != null &&
    b == ""
  ) {
    return true;
  }

  // Excel incorrectly truncates IDs. TODO Fix upstream (or decide the trailing P isn't needed)
  if ((key.endsWith("PCRef") || key.endsWith("SARef")) && a + "P" == b) {
    return true;
  }

  // TODO street_1 has a bug upstream in Excel; an 11A and 11B violation both get assigned the same ID
  if (
    key == "07SARef" &&
    a == "ATE01034_SA11_01P" &&
    b == "ATE01034_SA11_02P"
  ) {
    return true;
  }

  // TODO street_2 has invalid input, and importing ignores that value
  if (key == "RouteLength" && a == "1.4km" && b == 0) {
    return true;
  }

  if (typeof a == "number" && typeof b == "number") {
    return Math.abs(a - b) < 0.000001;
  }

  if (typeof a == "object" && a instanceof Date) {
    return dateToString(a) == b;
  }

  // TODO Temporarily be lenient about types...
  if (a == null && (b == "" || b == "0")) {
    return true;
  }

  return a == b;
}
