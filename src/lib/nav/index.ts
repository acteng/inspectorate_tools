export { default as NavHeader } from "./NavHeader.svelte";
export { default as NavFooter } from "./NavFooter.svelte";
export { default as NextButton } from "./NextButton.svelte";
export { default as PreviousButton } from "./PreviousButton.svelte";

// Produced manually with great care
let pages: [string, string][] = [
  ["/", "Tools"],

  ["/planning", "Planning Application Assessment Toolkit"],
  ["/planning/overview", "Overview"],
  ["/planning/app_details", "Application details"],
  ["/planning/assessment", "Assessment"],
  ["/planning/assessment/q01", "1. Trip generation and assignment"],
  ["/planning/assessment/q02", "2. Active travel route audit"],
  ["/planning/assessment/q03", "3. Pedestrian access to local amenities"],
  ["/planning/assessment/q04", "4. Cycling accessibility"],
  ["/planning/assessment/q05", "5. Access to public transport"],
  ["/planning/assessment/q06", "6. Off-site transport infrastructure"],
  ["/planning/assessment/q07", "7. Site permeability"],
  ["/planning/assessment/q08", "8. Placemaking"],
  ["/planning/assessment/q09", "9. Cycle parking and trip-end facilities"],
  ["/planning/assessment/q10", "10. Travel planning"],
  ["/planning/report", "Report"],

  ["/cross_section", "Route cross-section tool"],
  ["/cross_section/overview", "Overview"],
  ["/cross_section/summary", "Summary of Scheme"],
  ["/cross_section/proposed", "Proposed Cross-Sections"],
  ["/cross_section/check", "Cross-Sections Check"],
  ["/cross_section/results_summary", "ATE Summary"],

  ["/area_check", "Area check tool"],
  ["/area_check/overview", "Overview"],
  ["/area_check/summary", "Summary of Scheme"],
  ["/area_check/traffic_mitigation", "Traffic Mitigation Check"],
  ["/area_check/scorecard", "Area Scorecard"],
  ["/area_check/scorecard/q01", "Porosity - Walking and Wheeling"],
  ["/area_check/scorecard/q02", "Porosity - Cycling"],
  ["/area_check/scorecard/q03", "Crossings - Walking and Wheeling"],
  ["/area_check/scorecard/q04", "Crossings - Cycling"],
  ["/area_check/scorecard/q05", "Permeability - Walking and Wheeling"],
  ["/area_check/scorecard/q06", "Permeability - Cycling"],
  ["/area_check/scorecard/q07", "Mesh Density - Walking and Wheeling"],
  ["/area_check/scorecard/q08", "Mesh Density - Cycling"],
  ["/area_check/scorecard/q09", "Motorised Through-Traffic"],
  ["/area_check/scorecard/q10", "Perimeter Treatment Design"],
  ["/area_check/scorecard/q11", "Green Infrastructure Design"],
  ["/area_check/scorecard/q12", "Other Internal Treatment Design"],
  ["/area_check/scorecard/q13", "Engagement Practice"],
  ["/area_check/results", "Results & Commentary"],

  ["/route_check", "Route check tool"],
  ["/route_check/overview", "Overview"],
  ["/route_check/summary", "Summary of Scheme"],
  ["/route_check/route_map", "Route Map"],
  ["/route_check/policy_check", "Policy Check"],
  ["/route_check/safety_check", "Safety Check"],
  [
    "/route_check/safety_check/sa01",
    "SA01: Conflict at Side Roads and Priority Junctions",
  ],
  [
    "/route_check/safety_check/sa02",
    "SA02: Conflict at Roundabouts and Signal Junctions",
  ],
  ["/route_check/safety_check/sa03", "SA03: Lane Widths"],
  ["/route_check/safety_check/sa04", "SA04: Trip Hazards"],
  ["/route_check/safety_check/sa05", "SA05: Kerbside Activity"],
  ["/route_check/safety_check/sa06", "SA06: Provision of Crossings"],
  ["/route_check/safety_check/sa07", "SA07: Standard of Crossings"],
  ["/route_check/safety_check/sa08", "SA08: Motor Traffic Speed"],
  ["/route_check/safety_check/sa09", "SA09: Motor Traffic Volume"],
  ["/route_check/safety_check/sa10", "SA10: Pedestrian Crossing Speed"],
  ["/route_check/safety_check/sa11", "SA11: Footway Widths"],
  [
    "/route_check/safety_check/sa12",
    "SA12: Effective Width next to Tram Lines",
  ],
  [
    "/route_check/safety_check/sa13",
    "SA13: Crossing Angle of Tram/Train Rails",
  ],
  [
    "/route_check/safety_check/sa14",
    "SA14: Cycling Surface and Maintenance Defects",
  ],
  [
    "/route_check/safety_check/sa15",
    "SA15: Walking/Wheeling Surface and Maintenance Defects",
  ],
  ["/route_check/safety_check/sa16", "SA16: Guard Railing"],
  ["/route_check/problems_map", "Problems Mapping Page"],
  ["/route_check/street_check", "Street Check"],
  ["/route_check/street_check/st17", "ST17: Gradient"],
  [
    "/route_check/street_check/st18",
    "ST18: Tactile Information and Signal Equipment",
  ],
  ["/route_check/street_check/st19", "ST19: Barriers"],
  ["/route_check/street_check/st20", "ST20: Bus Stops"],
  ["/route_check/street_check/st21", "ST21: Wheelchair Access"],
  [
    "/route_check/street_check/st22",
    "ST22: Access to Taxis and Blue Badge Parking",
  ],
  ["/route_check/street_check/st23", "ST23: Access to Toilets"],
  ["/route_check/street_check/st24", "ST24: Cycling Surface Material"],
  ["/route_check/street_check/st25", "ST25: Walking/Wheeling Surface Material"],
  ["/route_check/street_check/st26", "ST26: Effective Width for Cyclists"],
  ["/route_check/street_check/st27", "ST27: Deviation of Cycle Route"],
  ["/route_check/street_check/st28", "ST28: Pedestrian Crossing Locations"],
  ["/route_check/street_check/st29", "ST29: Cyclist Delay at Junctions"],
  ["/route_check/street_check/st30", "ST30: Cyclist Delay on Links"],
  ["/route_check/street_check/st31", "ST31: Pedestrian Delay at Junctions"],
  [
    "/route_check/street_check/st32",
    "ST32: Pedestrian Delay at Standalone Signal Crossings",
  ],
  ["/route_check/street_check/st33", "ST33: Wayfinding"],
  ["/route_check/street_check/st34", "ST34: Places to Rest"],
  ["/route_check/street_check/st35", "ST35: Places to Shelter"],
  ["/route_check/street_check/st36", "ST36: Lighting"],
  ["/route_check/street_check/st37", "ST37: Cycle Parking"],
  ["/route_check/street_check/st38", "ST38: Impact of Cycling on Walking"],
  [
    "/route_check/street_check/st39",
    "ST39: Impact of Motor Traffic on Pedestrians and Cyclists",
  ],
  ["/route_check/street_check/st40", "ST40: Transitions for Cyclists"],
  ["/route_check/street_check/st41", "ST41: Route Continuity"],
  ["/route_check/street_check/st42", "ST42: Consistency of Route"],
  ["/route_check/street_placemaking_check", "Street Placemaking Check"],
  [
    "/route_check/street_placemaking_check/sp01",
    "SP01: Street Engagement for Children",
  ],
  ["/route_check/street_placemaking_check/sp02", "SP02: Social Space"],
  [
    "/route_check/street_placemaking_check/sp03",
    "SP03: Diversity of Activities",
  ],
  [
    "/route_check/street_placemaking_check/sp04",
    "SP04: Surveillance and Activity",
  ],
  [
    "/route_check/street_placemaking_check/sp05",
    "SP05: Forward Visibility and Escape Routes",
  ],
  ["/route_check/street_placemaking_check/sp06", "SP06: Visibility of Others"],
  [
    "/route_check/street_placemaking_check/sp07",
    "SP07: Maintenance and Upkeep",
  ],
  ["/route_check/street_placemaking_check/sp08", "SP08: Street Network Layout"],
  ["/route_check/street_placemaking_check/sp09", "SP09: Place and Movement"],
  [
    "/route_check/street_placemaking_check/sp10",
    "SP10: Impact of Street Design on Behaviour",
  ],
  [
    "/route_check/street_placemaking_check/sp11",
    "SP11: Enforcement of Loading and Parking",
  ],
  ["/route_check/street_placemaking_check/sp12", "SP12: Street Clutter"],
  [
    "/route_check/street_placemaking_check/sp13",
    "SP13: Consistency of Materials and Street Furniture",
  ],
  ["/route_check/street_placemaking_check/sp14", "SP14: Visual Interest"],
  ["/route_check/street_placemaking_check/sp15", "SP15: Cultural Significance"],
  [
    "/route_check/street_placemaking_check/sp16",
    "SP16: Street Features that Support Walking, Wheeling and Cycling",
  ],
  ["/route_check/street_placemaking_check/sp17", "SP17: Drainage and Water"],
  ["/route_check/street_placemaking_check/sp18", "SP18: Trees"],
  ["/route_check/street_placemaking_check/sp19", "SP19: Planting"],
  [
    "/route_check/street_placemaking_check/sp20",
    "SP20: Ancillary Features to Support Fauna",
  ],
  ["/route_check/street_placemaking_check/sp21", "SP21: Sustainable Materials"],
  [
    "/route_check/street_placemaking_check/sp22",
    "SP22: Air Pollution - Exposure",
  ],
  [
    "/route_check/street_placemaking_check/sp23",
    "SP23: Air Pollution - Proximity",
  ],
  ["/route_check/street_placemaking_check/sp24", "SP24: Noise Pollution"],
  ["/route_check/street_placemaking_check/sp25", "SP25: Light Pollution"],
  ["/route_check/street_placemaking_check/sp26", "SP26: Sunlight"],
  ["/route_check/path_check", "Path Check"],
  ["/route_check/path_check/pa17", "PA17: Barriers"],
  ["/route_check/path_check/pa18", "PA18: Steps"],
  ["/route_check/path_check/pa19", "PA19: Gradient"],
  [
    "/route_check/path_check/pa20",
    "PA20: Tactile Information and Signal Equipment",
  ],
  ["/route_check/path_check/pa21", "PA21: Ability to Turn Around"],
  ["/route_check/path_check/pa22", "PA22: Width of Shared Use Spaces"],
  [
    "/route_check/path_check/pa23",
    "PA23: Width of Walking and Wheeling Spaces",
  ],
  ["/route_check/path_check/pa24", "PA24: Width of Cycling Spaces"],
  ["/route_check/path_check/pa25", "PA25: Width of Horse Riding Spaces"],
  ["/route_check/path_check/pa26", "PA26: Shared Use Surface"],
  ["/route_check/path_check/pa27", "PA27: Walking and Wheeling Surface"],
  ["/route_check/path_check/pa28", "PA28: Cycling Surface"],
  ["/route_check/path_check/pa29", "PA29: Horse Riding Surface"],
  ["/route_check/path_check/pa30", "PA30: Suitability of Crossings"],
  ["/route_check/path_check/pa31", "PA31: Accessibility of Access Points"],
  ["/route_check/path_check/pa32", "PA32: Drainage"],
  [
    "/route_check/path_check/pa33",
    "PA33: Deviation of Path Against Straight Line",
  ],
  [
    "/route_check/path_check/pa34",
    "PA34: Deviation of Path Against Nearest Alternative Route",
  ],
  ["/route_check/path_check/pa35", "PA35: Crossing Locations"],
  ["/route_check/path_check/pa36", "PA36: Delay at Crossings"],
  ["/route_check/path_check/pa37", "PA37: Places to Rest"],
  ["/route_check/path_check/pa38", "PA38: Places to Shelter"],
  ["/route_check/path_check/pa39", "PA39: Lighting"],
  ["/route_check/path_check/pa40", "PA40: Cycle Parking"],
  ["/route_check/path_check/pa41", "PA41: Impact of Users on Each Other"],
  ["/route_check/path_check/pa42", "PA42: Ease of Navigation"],
  ["/route_check/path_check/pa43", "PA43: Wayfinding"],
  ["/route_check/path_check/pa44", "PA44: Proximity to Destinations"],
  ["/route_check/path_check/pa45", "PA45: Quality of Connections"],
  [
    "/route_check/path_check/pa46",
    "PA46: Connectivity with Other Horse Riding Routes",
  ],
  ["/route_check/path_placemaking_check", "Path Placemaking Check"],
  ["/route_check/path_placemaking_check/pp01", "PP01: Engagement for Children"],
  ["/route_check/path_placemaking_check/pp02", "PP02: Social Space"],
  ["/route_check/path_placemaking_check/pp03", "PP03: Points of Interest"],
  [
    "/route_check/path_placemaking_check/pp04",
    "PP04: Surveillance and Activity",
  ],
  [
    "/route_check/path_placemaking_check/pp05",
    "PP05: Forward Visibility and Escape Routes",
  ],
  ["/route_check/path_placemaking_check/pp06", "PP06: Visibility of Others"],
  ["/route_check/path_placemaking_check/pp07", "PP07: Maintenance and Upkeep"],
  [
    "/route_check/path_placemaking_check/pp08",
    "PP08: Consistency of Materials and Path Furniture",
  ],
  ["/route_check/path_placemaking_check/pp09", "PP09: Visual Interest"],
  [
    "/route_check/path_placemaking_check/pp10",
    "PP10: Features to Support Walking, Wheeling and Cycling",
  ],
  ["/route_check/path_placemaking_check/pp11", "PP11: Trees"],
  ["/route_check/path_placemaking_check/pp12", "PP12: Planting"],
  [
    "/route_check/path_placemaking_check/pp13",
    "PP13: Ancillary Features to Support Fauna",
  ],
  ["/route_check/path_placemaking_check/pp14", "PP14: Sustainable Materials"],
  [
    "/route_check/path_placemaking_check/pp15",
    "PP15: Air Pollution - Exposure",
  ],
  [
    "/route_check/path_placemaking_check/pp16",
    "PP16: Air Pollution - Proximity",
  ],
  ["/route_check/path_placemaking_check/pp17", "PP17: Noise Pollution"],
  ["/route_check/path_placemaking_check/pp18", "PP18: Light Pollution"],
  ["/route_check/path_placemaking_check/pp19", "PP19: Sunlight"],
  ["/route_check/jat_check", "JAT Check"],
  ["/route_check/results_summary", "Results Summary"],
  ["/route_check/results_analysis", "Results Further Analysis"],
  ["/route_check/results_export", "Results Export"],
  ["/route_check/dalog", "Design Assistance Log"],
];
let mainPageSections = pages.filter(([x, _]) => x.split("/").length == 3);
let pathToTitle = new Map(pages);

export function getTitle(path: string): string {
  return pathToTitle.get(canonicalizePath(path)) || "";
}

function getSectionPath(rawPath: string): string | null {
  let path = canonicalizePath(rawPath);
  let parts = path.split("/");
  if (parts.length < 3) {
    return null;
  }
  return `/${parts[1]}/${parts[2]}`;
}

function filterMainPageSections(
  routeCheckType: "street" | "path" | "",
): [string, string][] {
  let exclude = new Set(
    {
      "": [
        "/route_check/street_check",
        "/route_check/street_placemaking_check",
        "/route_check/path_check",
        "/route_check/path_placemaking_check",
      ],
      street: [
        "/route_check/path_check",
        "/route_check/path_placemaking_check",
      ],
      path: [
        "/route_check/street_check",
        "/route_check/street_placemaking_check",
      ],
    }[routeCheckType],
  );
  return mainPageSections.filter(([x, _]) => !exclude.has(x));
}

export function getPrevPage(
  rawPath: string,
  routeCheckType: "street" | "path" | "",
): [string, string] | null {
  let path = getSectionPath(rawPath);
  if (!path) {
    return null;
  }

  let sections = filterMainPageSections(routeCheckType);
  let idx = sections.findIndex((pair) => pair[0] == path);
  if (idx == -1) {
    console.error(`Couldn't find page ${path}; probably a 404`);
    return null;
  }

  if (idx == 0) {
    return null;
  }

  let result = sections[idx - 1];

  // Don't jump to a different tool entirely
  if (
    path == "/" ||
    result[0] == "/" ||
    path.split("/")[1] != result[0].split("/")[1]
  ) {
    return null;
  }

  return result;
}

export function getNextPage(
  rawPath: string,
  routeCheckType: "street" | "path" | "",
): [string, string] | null {
  let path = getSectionPath(rawPath);
  if (!path) {
    return null;
  }

  let sections = filterMainPageSections(routeCheckType);
  let idx = sections.findIndex((pair) => pair[0] == path);
  if (idx == -1) {
    console.error(`Couldn't find page ${path}; probably a 404`);
    return null;
  }

  if (idx == sections.length - 1) {
    return null;
  }

  let result = sections[idx + 1];

  // Don't jump to a different tool entirely
  if (
    path == "/" ||
    result[0] == "/" ||
    path.split("/")[1] != result[0].split("/")[1]
  ) {
    return null;
  }

  return result;
}

// Returns [path, title, currently here]. path may be blank for the special case of an unset route check type.
export function getNavList(
  rawPath: string,
  routeCheckType: "street" | "path" | "",
): [string, string, boolean][] | null {
  let path = getSectionPath(rawPath);
  if (!path) {
    return null;
  }

  let sections = filterMainPageSections(routeCheckType);
  let toolName = path != "/" ? path.split("/")[1] : "";
  let result: [string, string, boolean][] = sections
    .filter((section) => {
      return section[0] != "/" && section[0].split("/")[1] == toolName;
    })
    .map(([p, title]) => [p, title, p == path]);

  // Hack for the route check case.
  // TODO We should reconsider the logic in this file generally, now that requirements have changed so much.
  if (toolName == "route_check" && result.length == 11) {
    result.splice(
      6,
      0,
      ["", "Street/Path Check", false],
      ["", "Street/Path Placemaking Check", false],
    );
  }
  return result;
}

export function canonicalizePath(path: string): string {
  // Deduplicate consecutive slashes
  path = path.replace(/\/{2,}/g, "/");

  // Remove trailing slashes
  path = path.replace(/\/+$/, "");

  // When deployed to GH Pages, remove the leading base path. This is just
  // /inspectorate_tools for the main branch, but other git branches have the
  // branch name prefixed there. Theoretically we could use the special
  // vite BASE_URL variable, but during builds, this is somehow getting
  // set to "./"
  let baseUrl = import.meta.env.VITE_BASE_PATH;
  if (path.startsWith(baseUrl)) {
    path = path.slice(baseUrl.length);
  }

  // Guarantee a leading slash
  if (path.charAt(0) != "/") {
    path = "/" + path;
  }

  return path;
}
