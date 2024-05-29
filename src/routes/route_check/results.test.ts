import { describe, it, expect } from "vitest";
import { getDalog, dalogToState } from "$lib/import";
import ExcelJS from "exceljs";
import { getResults, netDifference, type ResultCategory } from "./results";

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
      // In the input, horse riders not expected, so in the results tables and
      // DALOG, this gets changed to "N/A". But this test is checking
      // something upstream of both, so validate the hidden scores
      ["Horse Riding", 20, 75, "55%"],
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

describe("check street results, example 1", async () => {
  let workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("test_files/street_1.xlsx");
  let inputDalog = getDalog(workbook);
  let state = dalogToState(inputDalog);
  let results = getResults(state);

  it("level of service", () => {
    expect([...results.levelOfService, results.overall].map(row)).toStrictEqual(
      [
        ["Safety", 27, 35, "8%"],
        ["Accessibility", 25, 25, "0%"],
        ["Comfort", 67, 67, "0%"],
        ["Directness", 75, 75, "0%"],
        ["Attractiveness", 58, 58, "0%"],
        ["Cohesion", 50, 50, "0%"],
        ["overall", 36, 41, "5%"],
      ],
    );
  });

  it("by mode", () => {
    expect([...results.byMode, results.overall].map(row)).toStrictEqual([
      ["Walking", 34, 34, "0%"],
      ["Wheeling", 35, 35, "0%"],
      ["Cycling", 37, 45, "8%"],
      ["overall", 36, 41, "5%"],
    ]);
  });

  it("placemaking", () => {
    expect(
      [...results.placemakingCategories, results.placemakingOverall].map(row),
    ).toStrictEqual([
      ["Social activity", 0, 0, "0%"],
      ["Personal security", 67, 67, "0%"],
      ["Character and legibility", 45, 45, "0%"],
      ["Environment", 40, 40, "0%"],
      ["overall", 40, 40, "0%"],
    ]);
  });
});

describe("check street results, example 2", async () => {
  let workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("test_files/street_2.xlsx");
  let inputDalog = getDalog(workbook);
  let state = dalogToState(inputDalog);
  let results = getResults(state);

  it("level of service", () => {
    expect([...results.levelOfService, results.overall].map(row)).toStrictEqual(
      [
        ["Safety", 14, 21, "7%"],
        ["Accessibility", 75, 50, "-25%"],
        ["Comfort", 100, 67, "-33%"],
        ["Directness", 50, 60, "10%"],
        ["Attractiveness", 17, 17, "0%"],
        // TODO different rounding
        ["Cohesion", 38, 25, "-13%"],
        ["overall", 25, 28, "3%"],
      ],
    );
  });

  it("by mode", () => {
    expect([...results.byMode, results.overall].map(row)).toStrictEqual([
      ["Walking", 22, 25, "3%"],
      ["Wheeling", 22, 24, "2%"],
      ["Cycling", 23, 29, "6%"],
      ["overall", 25, 28, "3%"],
    ]);
  });

  it("placemaking", () => {
    expect(
      [...results.placemakingCategories, results.placemakingOverall].map(row),
    ).toStrictEqual([
      ["Social activity", 0, 0, "0%"],
      ["Personal security", 50, 50, "0%"],
      ["Character and legibility", 50, 50, "0%"],
      ["Environment", 40, 45, "5%"],
      ["overall", 40, 42, "2%"],
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
