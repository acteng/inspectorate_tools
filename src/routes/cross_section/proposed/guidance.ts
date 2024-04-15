import type { StreetFeatureType, TrafficData } from "../data";
import { calculateEffectiveSpeedLimit } from "./logic";

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

// TODO The text is hard to skim. Would it be useful to highlight some keywords, like the type of segregation in the 2-way case?
export function guidance(
  streetFeature: StreetFeatureType,
  context: TrafficData,
): string {
  let effectiveSpeed = calculateEffectiveSpeedLimit(
    context.speedLimit,
    context.observedSpeed,
  );

  switch (streetFeature) {
    case "Footway":
      return "There is no maximum width for footways; widths should take account of pedestrian volumes and composition. Suggested widths quoted here are the functional width available to the user";

    case "Narrow Traffic / Bus Lane":
      return "";

    case "Wide Traffic / Bus Lane":
      return "";

    case "Traffic Lane (no buses): speed limit 20/30":
      if (context.trafficFlow == "<2,500" && effectiveSpeed == 20) {
        return "Where traffic volumes are less than 2,500 vpd and speeds are less than 20mph, cycling in mixed traffic may be suitable for all users";
      }
      return "Where traffic volumes are greater than 2,500 vpd or speeds are greater than 20mph, cycling in mixed traffic is not suitable for all users";

    case "On-highway advisory/mandatory cycle lane":
      // TODO Cases aren't exhaustive
      if (
        (context.trafficFlow == "<2,500" ||
          context.trafficFlow == "2,500-5,000") &&
        effectiveSpeed == 20
      ) {
        return "Where traffic volumes are less than 2,500 vpd and/or speeds are less than 20mph, advisory or mandatory cycle lanes may be suitable for all users";
      }
      return "Where traffic volumes are greater than 5,000 vpd and/or speeds are greater than 20mph, advisory or mandatory cycle lanes are not suitable for all users";

    case "1-way protected cycle track":
      // TODO Double check logic
      if (effectiveSpeed == 20) {
        if (context.trafficFlow == "<2,500") {
          return "If traffic flows are less than 2,500VPD and observed 85th percentile speed/speed limit is less than 30mph, then conditions for cycling in mixed traffic will suit most users";
        }
        if (context.trafficFlow == "2,500-5,000") {
          return "If traffic flows are greater than 2,500VPD but less than 5,000VPD, and observed 85th percentile speed/speed limit less than 30mph, then a mandatory or advisory cycle lane at the appropriate width will suit most users";
        }
        return "If traffic flows are greater than 5,000VPD and observed 85th percentile speed/speed limit less than 30mph, provision of a light-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m";
      }

      if (effectiveSpeed == 30) {
        return "If the observed 85th percentile speed or the speed limit is 30mph, provision of a light-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m";
      }
      if (effectiveSpeed == 40) {
        return "If the observed 85th percentile speed or the speed limit is 40mph, provision of a kerb-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m.";
      }
      return "If the observed 85th percentile speed or the speed limit is 50+ mph, provision of a kerb-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m.";

    case "2-way protected cycle track":
      // TODO Double check logic
      if (effectiveSpeed == 20) {
        if (context.trafficFlow == "<2,500") {
          return "If traffic flows are less than 2,500VPD and observed 85th percentile speed/speed limit is less than 30mph, then conditions for cycling in mixed traffic will suit most users";
        }
        if (context.trafficFlow == "2,500-5,000") {
          return "If traffic flows are greater than 2,500VPD but less than 5,000VPD, and observed 85th percentile speed/speed limit less than 30mph, then a mandatory or advisory cycle lane at the appropriate width will suit most users";
        }
        return "If traffic flows are greater than 5,000VPD and observed 85th percentile speed/speed limit less than 30mph, provision of a light-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m.";
      }

      if (effectiveSpeed == 30) {
        return "If the observed 85th percentile speed or the speed limit is 30mph, provision of a light-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m.";
      }
      if (effectiveSpeed == 40) {
        return "If the observed 85th percentile speed or the speed limit is 40mph, provision of a kerb-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m.";
      }
      return "If the observed 85th percentile speed or the speed limit is 50+ mph, provision of a kerb-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the userplus min. protection width 0.3m.";

    case "Shared use cycle track":
      return "Potential policy conflict: 'Cyclists must be separated from pedestrians' - have you considered alternatives to a shared use cycle track?";

    case "Parking Bay":
      return "";

    case "Disabled Parking Bay":
      return "";

    case "Loading Bay":
      return "";

    case "Buffer / Verge":
      return "Your buffer / verge shouldn't impact on the functional width of your footway or cycle-track";
  }
}
