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
