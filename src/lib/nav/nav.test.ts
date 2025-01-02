import { describe, expect, it } from "vitest";
import { capitaliseWords } from "../";
import { getNextPage, getPrevPage, getTitle } from "./";

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
    import.meta.env.BASE_URL = "/inspectorate_tools";
    expect(getTitle("/inspectorate_tools")).toBe("Tools");
    expect(getTitle("/inspectorate_tools/")).toBe("Tools");
    expect(getTitle("/inspectorate_tools/cross_section/proposed/")).toBe(
      "Proposed Cross-Sections",
    );
  });
});

describe("getPrevPage", () => {
  it("normal cases", () => {
    expect(getPrevPage("/cross_section/summary", "")).toBe(null);
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
    expect(getPrevPage("/planning", "")).toBe(null);
  });

  it("route check types", () => {
    expect(getPrevPage("/route_check/jat_check", "")).toStrictEqual([
      "/route_check/problems_map",
      "Problems Mapping Page",
    ]);

    expect(getPrevPage("/route_check/jat_check", "street")).toStrictEqual([
      "/route_check/street_placemaking_check",
      "Street Placemaking Check",
    ]);
    expect(
      getPrevPage("/route_check/street_placemaking_check", "street"),
    ).toStrictEqual(["/route_check/street_check", "Street Check"]);
    expect(getPrevPage("/route_check/street_check", "street")).toStrictEqual([
      "/route_check/problems_map",
      "Problems Mapping Page",
    ]);

    expect(getPrevPage("/route_check/jat_check", "path")).toStrictEqual([
      "/route_check/path_placemaking_check",
      "Path Placemaking Check",
    ]);
    expect(
      getPrevPage("/route_check/path_placemaking_check", "path"),
    ).toStrictEqual(["/route_check/path_check", "Path Check"]);
    expect(getPrevPage("/route_check/path_check", "path")).toStrictEqual([
      "/route_check/problems_map",
      "Problems Mapping Page",
    ]);
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
    expect(getNextPage("/planning/report", "")).toBe(null);
  });

  it("route check types", () => {
    expect(getNextPage("/route_check/problems_map", "")).toStrictEqual([
      "/route_check/jat_check",
      "JAT Check",
    ]);

    expect(getNextPage("/route_check/problems_map", "street")).toStrictEqual([
      "/route_check/street_check",
      "Street Check",
    ]);
    expect(getNextPage("/route_check/street_check", "street")).toStrictEqual([
      "/route_check/street_placemaking_check",
      "Street Placemaking Check",
    ]);
    expect(
      getNextPage("/route_check/street_placemaking_check", "street"),
    ).toStrictEqual(["/route_check/jat_check", "JAT Check"]);

    expect(getNextPage("/route_check/problems_map", "path")).toStrictEqual([
      "/route_check/path_check",
      "Path Check",
    ]);
    expect(getNextPage("/route_check/path_check", "path")).toStrictEqual([
      "/route_check/path_placemaking_check",
      "Path Placemaking Check",
    ]);
    expect(
      getNextPage("/route_check/path_placemaking_check", "path"),
    ).toStrictEqual(["/route_check/jat_check", "JAT Check"]);
  });
});

describe("capitaliseWords", () => {
  it("normal cases", () => {
    expect(capitaliseWords("")).toBe("");
    expect(capitaliseWords("  ")).toBe("  ");
    expect(capitaliseWords("foo bar 123")).toBe("Foo Bar 123");
    expect(capitaliseWords("FOO Bar 123")).toBe("FOO Bar 123");
  });
});
