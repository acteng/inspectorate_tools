import { describe, it, expect } from "vitest";
import { getTitle, getBreadcrumbLinks, getPrevPage, getNextPage } from "./nav";

describe("getTitle", () => {
  it("normal cases", () => {
    expect(getTitle("/")).toBe("Tools");
    expect(getTitle("/cross_section/proposed")).toBe("Proposed Cross-Sections");
  });

  it("extra slashes", () => {
    expect(getTitle("")).toBe("Tools");
    expect(getTitle("//")).toBe("Tools");
    expect(getTitle("///")).toBe("Tools");

    expect(getTitle("/cross_section/proposed/")).toBe(
      "Proposed Cross-Sections",
    );
    expect(getTitle("cross_section/proposed")).toBe("Proposed Cross-Sections");
  });
});

describe("getBreadcrumbLinks", () => {
  it("normal cases", () => {
    expect(getBreadcrumbLinks("")).toStrictEqual([]);
    expect(getBreadcrumbLinks("/")).toStrictEqual([]);

    expect(getBreadcrumbLinks("/cross_section")).toStrictEqual([
      ["/", "Tools"],
    ]);
    expect(getBreadcrumbLinks("/cross_section/proposed")).toStrictEqual([
      ["/", "Tools"],
      ["/cross_section", "Route cross-section tool"],
    ]);
  });
});

describe("getNextPage", () => {
  it("normal cases", () => {
    expect(getPrevPage("/cross_section/summary")).toStrictEqual([
      "/cross_section",
      "Route cross-section tool",
    ]);
    expect(getPrevPage("/cross_section/proposed")).toStrictEqual([
      "/cross_section/summary",
      "Summary of Scheme",
    ]);
    expect(getPrevPage("/area_check/scorecard/q01")).toStrictEqual([
      "/area_check/scorecard",
      "Area Scorecard",
    ]);
  });

  it("don't leave tool", () => {
    expect(getPrevPage("/")).toBe(null);
    expect(getPrevPage("/area_check")).toBe(null);
    expect(getPrevPage("/cross_section")).toBe(null);
    expect(getPrevPage("/route_check")).toBe(null);
  });
});

describe("getNextPage", () => {
  it("normal cases", () => {
    expect(getNextPage("/cross_section")).toStrictEqual([
      "/cross_section/summary",
      "Summary of Scheme",
    ]);
    expect(getNextPage("/cross_section/proposed")).toStrictEqual([
      "/cross_section/check",
      "Cross-Sections Check",
    ]);
    expect(getNextPage("/area_check/scorecard/q13")).toStrictEqual([
      "/area_check/results",
      "Results & Commentary",
    ]);
  });

  it("don't leave tool", () => {
    expect(getNextPage("/")).toBe(null);
    expect(getNextPage("/area_check")).toBe(null);
    expect(getNextPage("/cross_section")).toBe(null);
    expect(getNextPage("/route_check")).toBe(null);
    expect(getNextPage("/route_check/results_export")).toBe(null);
  });
});
