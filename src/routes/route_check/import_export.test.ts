import { describe, it, expect } from "vitest";
import { getDalog, dalogToState } from "$lib/import";
import ExcelJS from "exceljs";
import { encodeDalog } from "./results_export/da_log";

describe("import then export", async () => {
  let workbook = new ExcelJS.Workbook();
  // TODO Test files won't be stored in git, but at least organize better and use .gitignore
  await workbook.xlsx.readFile("/home/dabreegster/path_check.xlsx");
  let inputDalog = getDalog(workbook);
  let state = dalogToState(inputDalog);
  let outputDalog = encodeDalog(state);

  // TODO The imported version has null as a value type
  // This compares the array order of pairs, which is vital for copying. The
  // diff is long, but legible.
  expect(Object.entries(inputDalog)).toBe(outputDalog);
});
