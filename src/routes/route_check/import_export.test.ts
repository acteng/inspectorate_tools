import { describe, it, expect } from "vitest";
import { getDalog, dalogToState } from "$lib/import";
import ExcelJS from "exceljs";
import { encodeDalog } from "./results_export/da_log";
import { getResults, netDifference, type ResultCategory } from "./results";

/*describe("import then export", async () => {
  let workbook = new ExcelJS.Workbook();
  // TODO Repeat for all test files
  await workbook.xlsx.readFile("test_files/path_1.xlsx");
  let inputDalog = getDalog(workbook);
  let state = dalogToState(inputDalog);
  let outputDalog = encodeDalog(state);

  // This compares the array order of pairs, which is vital for copying. The
  // diff is long, but legible.
  expect(Object.entries(inputDalog)).toBe(outputDalog);
});*/

describe("check path results", async () => {
  let workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("test_files/path_1.xlsx");
  let inputDalog = getDalog(workbook);
  let state = dalogToState(inputDalog);
  let results = getResults(state);

  it("level of service", () => {
    expect([...results.levelOfService, results.overall].map(row)).toStrictEqual(
      [
        ["Safety", 29, 42, "13%"],
        ["Accessibility", 20, 80, "60%"],
        ["Comfort", 14, 71, "57%"],
        ["Directness", 50, 67, "17%"],
        ["Attractiveness", 0, 30, "30%"],
        ["Cohesion", 38, 88, "50%"],
        ["overall", 25, 52, "26%"],
      ],
    );
  });

  it("by mode", () => {
    expect([...results.byMode, results.overall].map(row)).toStrictEqual([
      ["Walking", 25, 52, "27%"],
      ["Wheeling", 25, 52, "27%"],
      ["Cycling", 29, 57, "28%"],
      ["Horse Riding", "N/A", "N/A", "N/A"],
      ["overall", 25, 52, "26%"],
    ]);
  });

  it("placemaking", () => {
    expect(
      [...results.placemakingCategories, results.placemakingOverall].map(row),
    ).toStrictEqual([
      ["Social activity", 0, 67, "67%"],
      ["Personal security", 0, 83, "83%"],
      ["Character and legibility", 13, 75, "63%"],
      ["Environment", 67, 94, "28%"],
      ["overall", 30, 84, "55%"],
    ]);
  });
});

function row(x: ResultCategory): [string, number, number, string] {
  return [
    x.category,
    Math.round(x.existing.scorePercent),
    Math.round(x.proposed.scorePercent),
    netDifference(x),
  ];
}
