export let pages = [
  "",
  "Tools",
  [
    [
      "cross_section",
      "Route cross-section tool",
      [
        ["summary", "Summary of Scheme"],
        ["proposed", "Proposed Cross-Sections"],
        ["check", "Cross-Sections Check"],
        ["", "ATE Summary"],
      ],
    ],

    [
      "area_check",
      "Area check tool",
      [
        ["summary", "Summary of Scheme"],
        ["traffic_mitigation", "Traffic Mitigation Check"],
        [
          "scorecard",
          "Area Scorecard",
          [
            ["q01", "Porosity - Walking and Wheeling"],
            ["q02", "Porosity - Cycling"],
            ["q03", "Crossings - Walking and Wheeling"],
            ["q04", "Crossings - Cycling"],
            ["q05", "Permeability - Walking and Wheeling"],
            ["q06", "Permeability - Cycling"],
            ["q07", "Mesh Density - Walking and Wheeling"],
            ["q08", "Mesh Density - Cycling"],
            ["q09", "Motorised Through-Traffic"],
            ["q10", "Perimeter Treatment Design"],
            ["q11", "Green Infrastructure Design"],
            ["q12", "Other Internal Treatment Design"],
            ["q13", "Engagement Practice"],
          ],
        ],
        ["", "Results & Commentary"],
      ],
    ],

    [
      "route_check",
      "Route check tool",
      [
        ["summary", "Summary of Scheme"],
        ["policy_check", "Policy Check"],
        ["policy_conflict_log", "Policy Conflict Log"],
        [
          "safety_check",
          "Safety Check",
          [
            ["sa01", "Conflict at Side Roads and Priority Junctions"],
            ["sa02", "Conflict at Roundabouts and Signal Junctions"],
            ["sa03", "Lane Widths"],
            ["sa04", "Trip Hazards"],
            ["sa05", "Kerbside Activity"],
            ["sa06", "Provision of Crossings"],
            ["sa07", "Standard of Crossings"],
            ["sa08", "Motor Traffic Speed"],
            ["sa09", "Motor Traffic Volume"],
            ["sa10", "Pedestrian Crossing Speed"],
            ["sa11", "Footway Widths"],
            ["sa12", "Effective Width next to Tram Lines"],
            ["sa13", "Crossing Angle of Tram/Train Rails"],
            ["sa14", "Cycling Surface and Maintenance Defects"],
            ["sa15", "Walking/Wheeling Surface and Maintenance Defects"],
            ["sa16", "Guard Railing"],
          ],
        ],
        ["critical_issues_log", "Critical Issue Log"],
        [
          "street_check",
          "Street Check",
          [
            ["st17", "Gradient"],
            ["st18", "Tactile Information and Signal Equipment"],
            ["st19", "Barriers"],
            ["st20", "Bus Stops"],
            ["st21", "Wheelchair Access"],
            ["st22", "Access to Taxis and Blue Badge Parking"],
            ["st23", "Access to Toilets"],
            ["st24", "Cycling Surface Material"],
            ["st25", "Walking/Wheeling Surface Material"],
            ["st26", "Effective Width for Cyclists"],
            ["st27", "Deviation of Cycle Route"],
            ["st28", "Pedestrian Crossing Locations"],
            ["st29", "Cyclist Delay at Junctions"],
            ["st30", "Cyclist Delay on Links"],
            ["st31", "Pedestrian Delay at Junctions"],
            ["st32", "Pedestrian Delay at Standalone Signal Crossings"],
            ["st33", "Wayfinding"],
            ["st34", "Places to Rest"],
            ["st35", "Places to Shelter"],
            ["st36", "Lighting"],
            ["st37", "Cycle Parking"],
            ["st38", "Impact of Cycling on Walking"],
            ["st39", "Impact of Motor Traffic on Pedestrians and Cyclists"],
            ["st40", "Transitions for Cyclists"],
            ["st41", "Route Continuity"],
            ["st42", "Consistency of Route"],
          ],
        ],
        [
          "street_placemaking_check",
          "Street Placemaking Check",
          [
            ["sp01", "Street Engagement for Children"],
            ["sp02", "Social Space"],
            ["sp03", "Diversity of Activities"],
            ["sp04", "Surveillance and Activity"],
            ["sp05", "Forward Visibility and Escape Routes"],
            ["sp06", "Visibility of Others"],
            ["sp07", "Maintenance and Upkeep"],
            ["sp08", "Street Network Layout"],
            ["sp09", "Place and Movement"],
            ["sp10", "Impact of Street Design on Behaviour"],
            ["sp11", "Enforcement of Loading and Parking"],
            ["sp12", "Street Clutter"],
            ["sp13", "Consistency of Materials and Street Furniture"],
            ["sp14", "Visual Interest"],
            ["sp15", "Cultural Significance"],
            [
              "sp16",
              "Street Features that Support Walking, Wheeling and Cycling",
            ],
            ["sp17", "Drainage and Water"],
            ["sp18", "Trees"],
            ["sp19", "Planting"],
            ["sp20", "Ancillary Features to Support Fauna"],
            ["sp21", "Sustainable Materials"],
            ["sp22", "Air Pollution - Exposure"],
            ["sp23", "Air Pollution - Proximity"],
            ["sp24", "Noise Pollution"],
            ["sp25", "Light Pollution"],
            ["sp26", "Sunlight"],
          ],
        ],
        [
          "path_check",
          "Path Check",
          [
            ["pa17", "Barriers"],
            ["pa18", "Steps"],
            ["pa19", "Gradient"],
            ["pa20", "Tactile Information and Signal Equipment"],
            ["pa21", "Ability to Turn Around"],
            ["pa22", "Width of Shared Use Spaces"],
            ["pa23", "Width of Walking and Wheeling Spaces"],
            ["pa24", "Width of Cycling Spaces"],
            ["pa25", "Width of Horse Riding Spaces"],
            ["pa26", "Shared Use Surface"],
            ["pa27", "Walking and Wheeling Surface"],
            ["pa28", "Cycling Surface"],
            ["pa29", "Horse Riding Surface"],
            ["pa30", "Suitability of Crossings"],
            ["pa31", "Accessibility of Access Points"],
            ["pa32", "Drainage"],
            ["pa33", "Deviation of Path Against Straight Line"],
            ["pa34", "Deviation of Path Against Nearest Alternative Route"],
            ["pa35", "Crossing Locations"],
            ["pa36", "Delay at Crossings"],
            ["pa37", "Places to Rest"],
            ["pa38", "Places to Shelter"],
            ["pa39", "Lighting"],
            ["pa40", "Cycle Parking"],
            ["pa41", "Impact of Users on Each Other"],
            ["pa42", "Ease of Navigation"],
            ["pa43", "Wayfinding"],
            ["pa44", "Proximity to Destinations"],
            ["pa45", "Quality of Connections"],
            ["pa46", "Connectivity with Other Horse Riding Routes"],
          ],
        ],
        [
          "path_placemaking_check",
          "Path Placemaking Check",
          [
            ["pp01", "Engagement for Children"],
            ["pp02", "Social Space"],
            ["pp03", "Points of Interest"],
            ["pp04", "Surveillance and Activity"],
            ["pp05", "Forward Visibility and Escape Routes"],
            ["pp06", "Visibility of Others"],
            ["pp07", "Maintenance and Upkeep"],
            ["pp08", "Consistency of Materials and Path Furniture"],
            ["pp09", "Visual Interest"],
            ["pp10", "Features to Support Walking, Wheeling and Cycling"],
            ["pp11", "Trees"],
            ["pp12", "Planting"],
            ["pp13", "Ancillary Features to Support Fauna"],
            ["pp14", "Sustainable Materials"],
            ["pp15", "Air Pollution - Exposure"],
            ["pp16", "Air Pollution - Proximity"],
            ["pp17", "Noise Pollution"],
            ["pp18", "Light Pollution"],
            ["pp19", "Sunlight"],
          ],
        ],
        ["", "JAT Check"],
        ["Results Summary", ""],
        ["", "Results Further Analysis"],
        ["", "Results Export"],
      ],
    ],
  ],
];

let flattenedPages = flatten([pages], "", []);

function flatten(pages, pathSoFar, result): [string, string][] {
  for (let page of pages) {
    let path =
      pathSoFar == "/" ? pathSoFar + page[0] : pathSoFar + "/" + page[0];
    result.push([path, page[1]]);

    if (page.length == 3) {
      result = flatten(page[2], path, result);
    }
  }
  return result;
}

// TODO Unit tests. and check with extra slashes everywhere

export function findPage(path: string): string {
  let parts = path.split("/");
  let lookup = [null, null, [pages]];

  for (let part of parts) {
    lookup = lookup[2].find((row) => row[0] == part);
  }

  return lookup;
}

export function getTitle(path: string): string {
  return findPage(path)[1];
}

export function getBreadcrumbLinks(path: string): [string, string] {
  let parts = path.split("/");

  let lookup = [null, null, [pages]];
  let result = [];

  let pathSoFar = "";
  for (let part of parts) {
    lookup = lookup[2].find((row) => row[0] == part);
    pathSoFar += `${part}/`;
    result.push([lookup[1], pathSoFar]);
  }
  result.pop();

  return result;
}

export function getPrevPage(path: string): [string, string] | null {
  let idx = flattenedPages.findIndex((pair) => pair[0] == path);
  if (idx == -1) {
    console.error(`Couldn't find page ${path}; probably a 404`);
    return null;
  }

  if (idx == 0) {
    return null;
  }

  let result = flattenedPages[idx - 1];

  // Don't jump to a different tool entirely
  if (
    path != "/" &&
    result[0] != "/" &&
    path.split("/")[1] != result[0].split("/")[1]
  ) {
    return null;
  }

  return result;
}
export function getNextPage(path: string): [string, string] | null {
  let idx = flattenedPages.findIndex((pair) => pair[0] == path);
  if (idx == -1) {
    console.error(`Couldn't find page ${path}; probably a 404`);
    return null;
  }

  if (idx == flattenedPages.length - 1) {
    return null;
  }

  let result = flattenedPages[idx + 1];

  // Don't jump to a different tool entirely
  if (
    path != "/" &&
    result[0] != "/" &&
    path.split("/")[1] != result[0].split("/")[1]
  ) {
    return null;
  }

  return result;
}
