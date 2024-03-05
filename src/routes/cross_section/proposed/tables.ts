import { type LaneType } from "../data";

// TODO Formatting isn't great. And unclear what the last two entries in each chunk mean.
// TODO From the blue one. But what's "Footway buffer / verge"? The green table
// looks more clear (and is based on speed as well)
let widths: Record<LaneType, string[]> = {
  Footway: ["2.60", "2.60", "2.60", "", "", "2.00", "2.00", "2.00", ""],
  "Narrow Traffic / Bus Lane": ["3.25", "", "", "", "", "3.25", "", "", ""],
  "Wide Traffic / Bus Lane": ["4.50", "", "", "", "", "3.90", "", "", ""],
  "Traffic Lane (no buses): speed limit 20/30": [
    "3.00",
    "",
    "",
    "",
    "",
    "2.75",
    "",
    "",
    "",
  ],
  "On-highway advisory/mandatory cycle lane": [
    "2.00",
    "",
    "",
    "",
    "",
    "1.50",
    "",
    "",
    "",
  ],
  "1-way protected cycle track": [
    "2.30",
    "2.50",
    "2.80",
    "",
    "",
    "1.80",
    "2.30",
    "2.30",
    "",
  ],
  "2-way protected cycle track": [
    "3.30",
    "3.30",
    "4.30",
    "",
    "",
    "2.30",
    "2.80",
    "3.30",
    "",
  ],
  "Shared use cycle track": [
    "3.00",
    "4.50",
    "",
    "",
    "",
    "3.00",
    "4.50",
    "",
    "",
  ],
  "Parking Bay": ["2.00", "", "", "", "", "1.80", "", "", ""],
  "Disabled Parking Bay": ["2.70", "", "", "", "", "2.70", "", "", ""],
  "Loading Bay": ["2.70", "", "", "", "", "1.80", "", "", ""],
  "Buffer / Verge": [
    "0.50",
    "1.00",
    "2.00",
    "2.50",
    "3.50",
    "-  ",
    "0.50",
    "1.50",
    "2.00",
    "3.00",
  ],
};

export function getWidth(
  lane: LaneType,
  streetFunction: string,
  sectionType: "Desirable" | "Absolute",
): string {
  let row = widths[lane];
  let chunk = sectionType == "Desirable" ? row.slice(1, 6) : row.slice(6, 11);
  if (streetFunction == "High Street (active frontages)") {
    return chunk[0];
  } else if (streetFunction == "Residential street") {
    return chunk[1];
  } else if (streetFunction == "Local distributor road") {
    return chunk[2];
  }
  throw new Error(`Unknown streetFunction ${streetFunction}`);
}

// TODO Embed or link the references
export let references: Record<LaneType, string[]> = {
  Footway: [
    "Manual for Streets 2: Section 5 pp.43",
    "DMRB CD143 Designing for walking, cycling & horse-riding Annex pp. 7",
  ],
  "Narrow Traffic / Bus Lane": [],
  "Wide Traffic / Bus Lane": [],
  "Traffic Lane (no buses): speed limit 20/30": [
    "LTN 1/20 Table 7-2 pp. 76",
    "LTN 1/20 Figure 4.1 pp. 33",
  ],
  "On-highway advisory/mandatory cycle lane": [
    "LTN 1/20 Table 5-2 pp.43",
    "LTN 1/20 Figure 4.1 pp. 33",
  ],
  "1-way protected cycle track": [
    "LTN 1/20 Table 5-2 pp.43",
    "LTN 1/20 Figure 4.1 pp. 33",
  ],
  "2-way protected cycle track": [
    "LTN 1/20 Table 5-2 pp.43",
    "LTN 1/20 Figure 4.1 pp. 33",
  ],
  "Shared use cycle track": ["LTN 1/20 Table 6-3 pp.68"],
  "Parking Bay": ["LTN 1/20 table 7-3 pp77"],
  "Disabled Parking Bay": [],
  "Loading Bay": ["LTN 1/20 table 7-3 pp77"],
  "Buffer / Verge": ["LTN 1/20 table 6-1 pp54"],
};
