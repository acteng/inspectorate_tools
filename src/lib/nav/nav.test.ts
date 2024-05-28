import { describe, it, expect } from "vitest";
import { getTitle, getBreadcrumbLinks, getPrevPage, getNextPage } from "./";

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

  it("GH deployment", () => {
    expect(getTitle("/inspectorate_tools")).toBe("Tools");
    expect(getTitle("/inspectorate_tools/")).toBe("Tools");
    expect(getTitle("/inspectorate_tools/cross_section/proposed/")).toBe(
      "Proposed Cross-Sections",
    );
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

describe("getPrevPage", () => {
  it("normal cases", () => {
    expect(getPrevPage("/cross_section/files", "")).toBe(null);
    expect(getPrevPage("/cross_section/summary", "")).toStrictEqual([
      "/cross_section/files",
      "Manage files",
    ]);
    expect(getPrevPage("/cross_section/proposed", "")).toStrictEqual([
      "/cross_section/summary",
      "Summary of Scheme",
    ]);
    expect(getPrevPage("/area_check/scorecard/q01", "")).toStrictEqual([
      "/area_check/traffic_mitigation",
      "Traffic Mitigation Check",
    ]);
    expect(getPrevPage("/area_check/scorecard/q05", "")).toStrictEqual([
      "/area_check/traffic_mitigation",
      "Traffic Mitigation Check",
    ]);
  });

  it("don't leave tool", () => {
    expect(getPrevPage("/", "")).toBe(null);
    expect(getPrevPage("/area_check", "")).toBe(null);
    expect(getPrevPage("/cross_section", "")).toBe(null);
    expect(getPrevPage("/route_check", "")).toBe(null);
  });
});

describe("getNextPage", () => {
  it("normal cases", () => {
    expect(getNextPage("/cross_section", "")).toBe(null);
    expect(getNextPage("/cross_section/proposed", "")).toStrictEqual([
      "/cross_section/check",
      "Cross-Sections Check",
    ]);
    expect(getNextPage("/area_check/scorecard/q05", "")).toStrictEqual([
      "/area_check/results",
      "Results & Commentary",
    ]);
    expect(getNextPage("/area_check/scorecard/q13", "")).toStrictEqual([
      "/area_check/results",
      "Results & Commentary",
    ]);
  });

  it("don't leave tool", () => {
    expect(getNextPage("/", "")).toBe(null);
    expect(getNextPage("/area_check/results", "")).toBe(null);
    expect(getNextPage("/cross_section/results_summary", "")).toBe(null);
    expect(getNextPage("/route_check/dalog", "")).toBe(null);
  });
});
