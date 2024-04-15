import { type StreetFeatureType, type TrafficData } from "../data";

export function getDesirableWidth(
  streetFeature: StreetFeatureType,
  context: TrafficData,
  leftFeature: StreetFeatureType | "",
  rightFeature: StreetFeatureType | "",
): number {
  switch (streetFeature) {
    case "Footway":
      // There's logic based on streetFunction, but the value is always the same
      return 2.6;

    case "Narrow Traffic / Bus Lane":
      return 3.25;

    case "Wide Traffic / Bus Lane":
      return 4.5;

    case "Traffic Lane (no buses): speed limit 20/30":
      return 3.0;

    case "On-highway advisory/mandatory cycle lane":
      return 2.0;

    case "1-way protected cycle track":
      if (!context.flowOneWay) {
        throw new Error("missing input");
      }
      return {
        "<200": 2.3,
        "200-800": 2.5,
        ">800": 2.8,
      }[context.flowOneWay];

    case "2-way protected cycle track":
      if (!context.flowTwoWay) {
        throw new Error("missing input");
      }
      return {
        "<300": 3.3,
        "300-1,000": 3.3,
        ">1,000": 4.3,
      }[context.flowTwoWay];

    case "Shared use cycle track":
      if (!context.flowSharedUse) {
        throw new Error("missing input");
      }
      return {
        "<300": 3.0,
        ">300": 4.5,
      }[context.flowSharedUse];

    case "Parking Bay":
      return 2.0;

    case "Disabled Parking Bay":
      return 2.7;

    case "Loading Bay":
      return 2.7;

    case "Buffer / Verge":
      if (!context.speedLimit) {
        throw new Error("missing input");
      }

      let narrow = 0.5;
      let wide = 1.5;

      let sum = 0.0;
      if (leftFeature) {
        sum += classes[leftFeature];
      }
      if (rightFeature) {
        sum += classes[rightFeature];
      }

      // get StreetFeatureType of left and right, do the classes lookup, sum
      if (sum == 10) {
        return narrow;
      }
      if (sum <= 1.0) {
        return narrow;
      }
      if (sum == 4.0) {
        return narrow;
      }
      if (sum == 10.0) {
        return narrow;
      }

      // Called "speed limit classification"
      let lowSpeed =
        context.speedLimit == "<30" ||
        context.speedLimit == "30" ||
        context.speedLimit == "40";

      if (
        leftFeature == "Footway" &&
        rightFeature &&
        classes[rightFeature] == 2
      ) {
        return lowSpeed ? narrow : wide;
      }
      if (
        rightFeature == "Footway" &&
        leftFeature &&
        classes[leftFeature] == 2
      ) {
        return lowSpeed ? narrow : wide;
      }

      return {
        "<30": narrow,
        "30": narrow,
        "40": wide,
        // TODO these three aren't specified in excel
        "50": wide,
        "60": wide,
        "70": wide,
      }[context.speedLimit];
  }
}

// Hidden row 16
let classes: Record<StreetFeatureType, 0 | 1 | 2 | 10> = {
  Footway: 0,
  "1-way protected cycle track": 0,
  "2-way protected cycle track": 0,
  "Shared use cycle track": 0,

  "Buffer / Verge": 1,

  "Narrow Traffic / Bus Lane": 2,
  "Wide Traffic / Bus Lane": 2,
  "Traffic Lane (no buses): speed limit 20/30": 2,
  // TODO not 1?
  "On-highway advisory/mandatory cycle lane": 2,

  "Parking Bay": 10,
  "Disabled Parking Bay": 10,
  "Loading Bay": 10,
};

// TODO Embed or link the references
export let references: Record<StreetFeatureType, string[]> = {
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

// TODO Move to a .ts and add tests:
// normal cases:
// 50, 54 -> 50
// 50, 56 -> 60
// highest entry becomes 80:
// 70, 78 -> 80
// lowest entry counts as 20:
// <30, 15 -> 20
// <30, 25 -> 30
// TODO Where is this logic used, though?
export function calculateEffectiveSpeedLimit(
  speedLimit: string,
  observed: number | undefined,
): number | null {
  if (!speedLimit || !observed) {
    return null;
  }

  // TODO Maybe change the value stored to be more clear
  let speed = speedLimit == "<30" ? 20 : parseInt(speedLimit);

  if (observed > speed * 1.1) {
    // Next highest
    // what happens for <30 and 70?
    return speed + 10;
  }
  return speed;
}
