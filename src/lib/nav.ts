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

export function findPage(path: string): string {
  let parts = path.split("/");

  let lookup = [null, null, [pages]];
  let first = true;

  for (let part of parts) {
    lookup = lookup[2].find((row) => row[0] == part);
  }

  return lookup;
}

export function getTitle(path: string): string {
  return findPage(path)[1];
}
