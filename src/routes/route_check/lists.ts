// TODO Preserve bold formatting?
export let policyConflictChoices: [string, string][] = [
  ["1", "1 - Cyclists are not separated from pedestrians"],
  ["2", '2 - Barriers, steps, or "Cyclist Dismount" signs are present'],
  ["3", "3 - The route is not direct, logical and intuitive"],
  ["4", "4 - Inappropriate surface materials"],
  ["5", "5 - Appropriate lighting is not provided"],
  [
    "6",
    "6 - Routes miss opportunities to join together with other facilities as a network",
  ],
];

export let criticalIssueChoices: [string, string][] = [
  [
    "1",
    "1 - Conflict at Side Roads and Priority Junctions: >2,500vpd cut across main walking, wheeling or cycling streams",
  ],
  [
    "2",
    "2 - Conflict at Roundabouts and Signal Junctions: >2,500vpd cut across main walking, wheeling or cycling streams",
  ],
  [
    "3",
    "3 - Lane Widths: Cyclists unprotected in 3.25-3.9m wide nearside lane",
  ],
  [
    "4",
    "4 - Trip Hazards: Level differences >13mm with no tactile information and colour contrast",
  ],
  [
    "5A",
    "5A - Kerbside Activity: Cycle facility next to parking/loading with insufficient buffer",
  ],
  [
    "5B",
    "5B - Kerbside Activity: Unprotected cycle lane next to a frequently used bus layby",
  ],
  [
    "6A",
    "6A - Provision of Crossings: on busy streets (>8,000vpd), formal crossings are more than 400m apart",
  ],
  [
    "6B",
    "6B - Provision of Crossings: on quieter streets (<8,000vpd), desire lines are blocked by parking/loading",
  ],
  [
    "7A",
    "7A - Standard of Crossings: on busy streets (>8,000vpd), uncontrolled crossings of 2+ lanes with no gaps in traffic",
  ],
  [
    "7B",
    "7B - Standard of Crossings: at signal junctions, there are arms with no green man for pedestrians",
  ],
  [
    "8",
    "8 - Motor Traffic Speed: Mean speed > 30mph when cyclists/pedestrians are unprotected",
  ],
  [
    "9A",
    "9A - Motor Traffic Volume: >1,000 vehicles in busiest hour when cyclists/pedestrians are unprotected",
  ],
  [
    "9B",
    "9B - Motor Traffic Volume: >5% HGV traffic when cyclists/pedestrians are unprotected and >500 vehicles in busiest hour",
  ],
  [
    "10",
    "10 - Pedestrian Crossing Speed: Pedestrians must cross at speeds >1.2m/s",
  ],
  ["11A", "11A - Footway Width: <1m clear width"],
  ["11B", "11B - Footway Width: 1.0-1.5m wide clear width for over 6m"],
  [
    "11C",
    "11C - Footway Width: <2m clear width and pedestrian comfort level is poor (PCL of D-E)",
  ],
  ["11D", "11D - Footway Width: no footway"],
  [
    "12A",
    "12A - Effective Width next to Tram Lines: <2.4m effective width for cyclists from tramline edge to kerb on a straight run",
  ],
  [
    "12B",
    "12B - Effective Width next to Tram Lines: insufficient effective width for cyclists on a curved section of tram route",
  ],
  [
    "13",
    "13 - Crossing Angle of Tram/Train Rails: Cyclist crossing angle <60°",
  ],
  [
    "14",
    '14 - Cycling Surface and Maintenance Defects: Major defects (provide further information in "commentary and feedback")',
  ],
  [
    "15",
    '15 - Walking/Wheeling Surface and Maintenance Defects: Major defects (provide further information in "commentary and feedback")',
  ],
  [
    "16",
    "16 - Guard Railing: used as standard without consideration of inherent safety risks",
  ],
];

export function getFullPolicyConflict(code: string): string {
  let result = policyConflictChoices.find((pair) => pair[0] == code);
  if (result) {
    return result[1];
  }
  throw new Error(`Unknown policy conflict ${code}`);
}

export function getFullCriticalIssue(code: string): string {
  let result = criticalIssueChoices.find((pair) => pair[0] == code);
  if (result) {
    return result[1];
  }
  throw new Error(`Unknown critical issue ${code}`);
}

// Returns the numeric code and short descripton
export function getTerseCriticalIssue(code: string): string {
  return getFullCriticalIssue(code).split(":")[0];
}
