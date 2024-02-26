// TODO Formatting isn't great. And unclear what the last two entries in each chunk mean.
let widths = [
  ["Footway", "2.60", "2.60", "2.60", "", "", "2.00", "2.00", "2.00", ""],
  ["Narrow Traffic / Bus Lane", "3.25", "", "", "", "", "3.25", "", "", ""],
  ["Wide Traffic / Bus Lane", "4.50", "", "", "", "", "3.90", "", "", ""],
  [
    "Traffic Lane (no buses): speed limit 20/30",
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
  [
    "On-highway advisory/mandatory cycle Lane",
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
  [
    "1-way protected cycle track",
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
  [
    "2-way protected cycle track",
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
  [
    "Shared use cycle track",
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
  ["Parking Bay", "2.00", "", "", "", "", "1.80", "", "", ""],
  ["Disabled Parking Bay", "2.70", "", "", "", "", "2.70", "", "", ""],
  ["Loading Bay", "2.70", "", "", "", "", "1.80", "", "", ""],
  [
    "Buffer / Verge",
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
  [
    "Footway buffer / verge",
    "0.50",
    "1.50",
    "",
    "",
    "",
    "0.50",
    "1.50",
    "",
    "",
  ],
];

export function getWidth(
  lane: string,
  streetFunction: string,
  sectionType: "Desirable" | "Absolute",
): string {
  if (lane == "") {
    return "";
  }
  let row = widths.find((row) => row[0] == lane)!;
  let chunk = sectionType == "Desirable" ? row.slice(1, 6) : row.slice(6, 11);
  if (streetFunction == "High Street (active frontages)") {
    return chunk[0];
  } else if (streetFunction == "Residential Street") {
    return chunk[1];
  } else if (streetFunction == "Local distributor road") {
    return chunk[2];
  }
  throw new Error(`Unknown streetFunction ${streetFunction}`);
}
