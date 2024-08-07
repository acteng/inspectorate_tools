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
  ["/planning/scorecard", "Scorecard"],
  ["/planning/scorecard/q01", "Trip generation and assignment"],
  ["/planning/scorecard/q02", "Active travel route audit"],
  ["/planning/scorecard/q03", "Pedestrian access to local amenities"],
  ["/planning/scorecard/q04", "Cycling accessibility"],
  ["/planning/scorecard/q05", "Access to public transport"],
  ["/planning/scorecard/q06", "Off-site transport infrastructure"],
  ["/planning/scorecard/q07", "Site permeability"],
  ["/planning/scorecard/q08", "Placemaking"],
  ["/planning/scorecard/q09", "Cycle parking and trip-end facilities"],
  ["/planning/scorecard/q10", "Travel planning"],
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
    "Conflict at Side Roads and Priority Junctions",
  ],
  [
    "/route_check/safety_check/sa02",
    "Conflict at Roundabouts and Signal Junctions",
  ],
  ["/route_check/safety_check/sa03", "Lane Widths"],
  ["/route_check/safety_check/sa04", "Trip Hazards"],
  ["/route_check/safety_check/sa05", "Kerbside Activity"],
  ["/route_check/safety_check/sa06", "Provision of Crossings"],
  ["/route_check/safety_check/sa07", "Standard of Crossings"],
  ["/route_check/safety_check/sa08", "Motor Traffic Speed"],
  ["/route_check/safety_check/sa09", "Motor Traffic Volume"],
  ["/route_check/safety_check/sa10", "Pedestrian Crossing Speed"],
  ["/route_check/safety_check/sa11", "Footway Widths"],
  ["/route_check/safety_check/sa12", "Effective Width next to Tram Lines"],
  ["/route_check/safety_check/sa13", "Crossing Angle of Tram/Train Rails"],
  ["/route_check/safety_check/sa14", "Cycling Surface and Maintenance Defects"],
  [
    "/route_check/safety_check/sa15",
    "Walking/Wheeling Surface and Maintenance Defects",
  ],
  ["/route_check/safety_check/sa16", "Guard Railing"],
  ["/route_check/problems_map", "Problems Mapping Page"],
  ["/route_check/street_check", "Street Check"],
  ["/route_check/street_check/st17", "Gradient"],
  [
    "/route_check/street_check/st18",
    "Tactile Information and Signal Equipment",
  ],
  ["/route_check/street_check/st19", "Barriers"],
  ["/route_check/street_check/st20", "Bus Stops"],
  ["/route_check/street_check/st21", "Wheelchair Access"],
  ["/route_check/street_check/st22", "Access to Taxis and Blue Badge Parking"],
  ["/route_check/street_check/st23", "Access to Toilets"],
  ["/route_check/street_check/st24", "Cycling Surface Material"],
  ["/route_check/street_check/st25", "Walking/Wheeling Surface Material"],
  ["/route_check/street_check/st26", "Effective Width for Cyclists"],
  ["/route_check/street_check/st27", "Deviation of Cycle Route"],
  ["/route_check/street_check/st28", "Pedestrian Crossing Locations"],
  ["/route_check/street_check/st29", "Cyclist Delay at Junctions"],
  ["/route_check/street_check/st30", "Cyclist Delay on Links"],
  ["/route_check/street_check/st31", "Pedestrian Delay at Junctions"],
  [
    "/route_check/street_check/st32",
    "Pedestrian Delay at Standalone Signal Crossings",
  ],
  ["/route_check/street_check/st33", "Wayfinding"],
  ["/route_check/street_check/st34", "Places to Rest"],
  ["/route_check/street_check/st35", "Places to Shelter"],
  ["/route_check/street_check/st36", "Lighting"],
  ["/route_check/street_check/st37", "Cycle Parking"],
  ["/route_check/street_check/st38", "Impact of Cycling on Walking"],
  [
    "/route_check/street_check/st39",
    "Impact of Motor Traffic on Pedestrians and Cyclists",
  ],
  ["/route_check/street_check/st40", "Transitions for Cyclists"],
  ["/route_check/street_check/st41", "Route Continuity"],
  ["/route_check/street_check/st42", "Consistency of Route"],
  ["/route_check/street_placemaking_check", "Street Placemaking Check"],
  [
    "/route_check/street_placemaking_check/sp01",
    "Street Engagement for Children",
  ],
  ["/route_check/street_placemaking_check/sp02", "Social Space"],
  ["/route_check/street_placemaking_check/sp03", "Diversity of Activities"],
  ["/route_check/street_placemaking_check/sp04", "Surveillance and Activity"],
  [
    "/route_check/street_placemaking_check/sp05",
    "Forward Visibility and Escape Routes",
  ],
  ["/route_check/street_placemaking_check/sp06", "Visibility of Others"],
  ["/route_check/street_placemaking_check/sp07", "Maintenance and Upkeep"],
  ["/route_check/street_placemaking_check/sp08", "Street Network Layout"],
  ["/route_check/street_placemaking_check/sp09", "Place and Movement"],
  [
    "/route_check/street_placemaking_check/sp10",
    "Impact of Street Design on Behaviour",
  ],
  [
    "/route_check/street_placemaking_check/sp11",
    "Enforcement of Loading and Parking",
  ],
  ["/route_check/street_placemaking_check/sp12", "Street Clutter"],
  [
    "/route_check/street_placemaking_check/sp13",
    "Consistency of Materials and Street Furniture",
  ],
  ["/route_check/street_placemaking_check/sp14", "Visual Interest"],
  ["/route_check/street_placemaking_check/sp15", "Cultural Significance"],
  [
    "/route_check/street_placemaking_check/sp16",
    "Street Features that Support Walking, Wheeling and Cycling",
  ],
  ["/route_check/street_placemaking_check/sp17", "Drainage and Water"],
  ["/route_check/street_placemaking_check/sp18", "Trees"],
  ["/route_check/street_placemaking_check/sp19", "Planting"],
  [
    "/route_check/street_placemaking_check/sp20",
    "Ancillary Features to Support Fauna",
  ],
  ["/route_check/street_placemaking_check/sp21", "Sustainable Materials"],
  ["/route_check/street_placemaking_check/sp22", "Air Pollution - Exposure"],
  ["/route_check/street_placemaking_check/sp23", "Air Pollution - Proximity"],
  ["/route_check/street_placemaking_check/sp24", "Noise Pollution"],
  ["/route_check/street_placemaking_check/sp25", "Light Pollution"],
  ["/route_check/street_placemaking_check/sp26", "Sunlight"],
  ["/route_check/path_check", "Path Check"],
  ["/route_check/path_check/pa17", "Barriers"],
  ["/route_check/path_check/pa18", "Steps"],
  ["/route_check/path_check/pa19", "Gradient"],
  ["/route_check/path_check/pa20", "Tactile Information and Signal Equipment"],
  ["/route_check/path_check/pa21", "Ability to Turn Around"],
  ["/route_check/path_check/pa22", "Width of Shared Use Spaces"],
  ["/route_check/path_check/pa23", "Width of Walking and Wheeling Spaces"],
  ["/route_check/path_check/pa24", "Width of Cycling Spaces"],
  ["/route_check/path_check/pa25", "Width of Horse Riding Spaces"],
  ["/route_check/path_check/pa26", "Shared Use Surface"],
  ["/route_check/path_check/pa27", "Walking and Wheeling Surface"],
  ["/route_check/path_check/pa28", "Cycling Surface"],
  ["/route_check/path_check/pa29", "Horse Riding Surface"],
  ["/route_check/path_check/pa30", "Suitability of Crossings"],
  ["/route_check/path_check/pa31", "Accessibility of Access Points"],
  ["/route_check/path_check/pa32", "Drainage"],
  ["/route_check/path_check/pa33", "Deviation of Path Against Straight Line"],
  [
    "/route_check/path_check/pa34",
    "Deviation of Path Against Nearest Alternative Route",
  ],
  ["/route_check/path_check/pa35", "Crossing Locations"],
  ["/route_check/path_check/pa36", "Delay at Crossings"],
  ["/route_check/path_check/pa37", "Places to Rest"],
  ["/route_check/path_check/pa38", "Places to Shelter"],
  ["/route_check/path_check/pa39", "Lighting"],
  ["/route_check/path_check/pa40", "Cycle Parking"],
  ["/route_check/path_check/pa41", "Impact of Users on Each Other"],
  ["/route_check/path_check/pa42", "Ease of Navigation"],
  ["/route_check/path_check/pa43", "Wayfinding"],
  ["/route_check/path_check/pa44", "Proximity to Destinations"],
  ["/route_check/path_check/pa45", "Quality of Connections"],
  [
    "/route_check/path_check/pa46",
    "Connectivity with Other Horse Riding Routes",
  ],
  ["/route_check/path_placemaking_check", "Path Placemaking Check"],
  ["/route_check/path_placemaking_check/pp01", "Engagement for Children"],
  ["/route_check/path_placemaking_check/pp02", "Social Space"],
  ["/route_check/path_placemaking_check/pp03", "Points of Interest"],
  ["/route_check/path_placemaking_check/pp04", "Surveillance and Activity"],
  [
    "/route_check/path_placemaking_check/pp05",
    "Forward Visibility and Escape Routes",
  ],
  ["/route_check/path_placemaking_check/pp06", "Visibility of Others"],
  ["/route_check/path_placemaking_check/pp07", "Maintenance and Upkeep"],
  [
    "/route_check/path_placemaking_check/pp08",
    "Consistency of Materials and Path Furniture",
  ],
  ["/route_check/path_placemaking_check/pp09", "Visual Interest"],
  [
    "/route_check/path_placemaking_check/pp10",
    "Features to Support Walking, Wheeling and Cycling",
  ],
  ["/route_check/path_placemaking_check/pp11", "Trees"],
  ["/route_check/path_placemaking_check/pp12", "Planting"],
  [
    "/route_check/path_placemaking_check/pp13",
    "Ancillary Features to Support Fauna",
  ],
  ["/route_check/path_placemaking_check/pp14", "Sustainable Materials"],
  ["/route_check/path_placemaking_check/pp15", "Air Pollution - Exposure"],
  ["/route_check/path_placemaking_check/pp16", "Air Pollution - Proximity"],
  ["/route_check/path_placemaking_check/pp17", "Noise Pollution"],
  ["/route_check/path_placemaking_check/pp18", "Light Pollution"],
  ["/route_check/path_placemaking_check/pp19", "Sunlight"],
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

// Returns [path, title, currently here]
export function getNavList(
  rawPath: string,
  routeCheckType: "street" | "path" | "",
): [string, string, boolean][] | null {
  let path = getSectionPath(rawPath);
  if (!path) {
    return null;
  }

  let sections = filterMainPageSections(routeCheckType);
  const toolName = path != "/" ? path.split("/")[1] : "";
  return sections
    .filter((section) => {
      return section[0] != "/" && section[0].split("/")[1] == toolName;
    })
    .map(([p, title]) => [p, title, p == path]);
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
