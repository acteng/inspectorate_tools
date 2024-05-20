import type {
  State,
  StreetFeatureType,
  SpeedLimit,
  TrafficData,
  CustomFeatures,
  BuiltinStreetFeatureType,
  BufferDetails,
} from "../data";

// Get the [desirable, absolute] minimum width for a street feature
export function getWidths(
  streetFeature: StreetFeatureType,
  context: TrafficData,
  customFeatures: CustomFeatures,
  leftFeature: StreetFeatureType | "",
  rightFeature: StreetFeatureType | "",
): [number, number] {
  switch (streetFeature) {
    case "Footway":
      // There's logic based on streetFunction, but the value is always the same
      return [2.6, 2.0];

    case "Narrow Traffic / Bus Lane":
      return [3.25, 3.25];

    case "Wide Traffic / Bus Lane":
      return [4.5, 3.9];

    case "Traffic Lane (no buses): speed limit 20/30":
      return [3.0, 2.75];

    case "On-highway advisory/mandatory cycle lane":
      return [2.0, 1.5];

    case "1-way protected cycle track":
      if (!context.flowOneWay) {
        throw new Error("missing input");
      }
      return {
        "<200": [2.3, 1.8],
        "200-800": [2.5, 2.3],
        ">800": [2.8, 2.3],
      }[context.flowOneWay] as [number, number];

    case "2-way protected cycle track":
      if (!context.flowTwoWay) {
        throw new Error("missing input");
      }
      return {
        "<300": [3.3, 2.3],
        "300-1,000": [3.3, 2.8],
        ">1,000": [4.3, 3.3],
      }[context.flowTwoWay] as [number, number];

    case "Shared use cycle track":
      if (!context.flowSharedUse) {
        throw new Error("missing input");
      }
      return {
        "<300": [3.0, 3.0],
        ">300": [4.5, 4.5],
      }[context.flowSharedUse] as [number, number];

    case "Parking Bay":
      return [2.0, 1.8];

    case "Disabled Parking Bay":
      return [2.7, 2.7];

    case "Loading Bay":
      return [2.7, 1.8];

    case "Buffer / Verge": {
      if (!context.speedLimit) {
        throw new Error("missing input");
      }

      // TODO Only for the footway buffer case
      // TODO Double check for absolute minimums
      let narrow: [number, number] = [0.5, 0.5];
      let wide: [number, number] = [1.5, 1.5];

      let sum = 0.0;
      if (leftFeature) {
        sum += bufferClass(leftFeature);
      }
      if (rightFeature) {
        sum += bufferClass(rightFeature);
      }

      // Active travel or buffer on both sides
      if (sum <= 1.0) {
        return narrow;
      }
      // Traffic on both sides
      if (sum == 4.0) {
        return narrow;
      }
      // Just one parking
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
        bufferClass(rightFeature) == 2
      ) {
        return lowSpeed ? narrow : wide;
      }
      if (
        rightFeature == "Footway" &&
        leftFeature &&
        bufferClass(leftFeature) == 2
      ) {
        return lowSpeed ? narrow : wide;
      }

      return {
        "<30": [0.5, 0.0],
        "30": [0.5, 0.0],
        "40": [1.0, 0.5],
        "50": [2.0, 1.5],
        "60": [2.5, 2.0],
        "70": [3.5, 3.0],
      }[context.speedLimit] as [number, number];
    }

    default: {
      let width = customFeatures[streetFeature.custom].width;
      return [width, width];
    }
  }
}

// Group features into categories, from the hidden Excel row 16.
// TODO Use enums and express logic more directly
function bufferClass(streetFeature: StreetFeatureType): 0 | 1 | 2 | 10 {
  if (typeof streetFeature == "object") {
    return 0;
  }

  let cases: Record<BuiltinStreetFeatureType, 0 | 1 | 2 | 10> = {
    Footway: 0,
    "1-way protected cycle track": 0,
    "2-way protected cycle track": 0,
    "Shared use cycle track": 0,

    "Buffer / Verge": 1,

    "Narrow Traffic / Bus Lane": 2,
    "Wide Traffic / Bus Lane": 2,
    "Traffic Lane (no buses): speed limit 20/30": 2,
    // Not 1, meaning a footway next to one of these would still recommend a buffer
    "On-highway advisory/mandatory cycle lane": 2,

    "Parking Bay": 10,
    "Disabled Parking Bay": 10,
    "Loading Bay": 10,
  };
  return cases[streetFeature];
}

// Are buffers recommended on either side?
export function needBuffers(
  streetFeature: StreetFeatureType,
  leftFeature: StreetFeatureType | "",
  rightFeature: StreetFeatureType | "",
): BufferDetails {
  // Only need buffers around active travel features
  if (bufferClass(streetFeature) != 0) {
    return {
      warning: "",
      functionsToDispatch: [],
    };
  }

  let left =
    leftFeature &&
    (bufferClass(leftFeature) == 2 || bufferClass(leftFeature) == 10);
  let right =
    rightFeature &&
    (bufferClass(rightFeature) == 2 || bufferClass(rightFeature) == 10);

  if (left && right) {
    return {
      warning: "Consider buffer to left and right",
      // Order matters, since indices will change
      functionsToDispatch: ["addRightBuffer", "addLeftBuffer"],
    };
  }
  if (left) {
    return {
      warning: "Consider buffer to left",
      functionsToDispatch: ["addLeftBuffer"],
    };
  }
  if (right) {
    return {
      warning: "Consider buffer to right",
      functionsToDispatch: ["addRightBuffer"],
    };
  }

  return {
    warning: "",
    functionsToDispatch: [],
  };
}

// Only used for guidance
export function calculateEffectiveSpeedLimit(
  speedLimit: SpeedLimit,
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

// Get the total [desirable, absolute] minimum width for a cross section
export function calculateTotalWidths(
  state: State,
  sectionType: "Preferred" | "Compromised",
): [number, number] {
  // TODO Note the wording here; haven't renamed the variable yet
  let features =
    sectionType == "Preferred"
      ? state.proposed.desirableMinimumCrossSection
      : state.proposed.absoluteMinimumCrossSection;

  let desirableSum = 0.0;
  let minimumSum = 0.0;

  for (let i = 0; i < features.length; i++) {
    let thisFeature = features[i];
    if (!thisFeature) {
      continue;
    }
    let leftFeature = i == 0 ? "" : features[i - 1];
    let rightFeature = i == features.length - 1 ? "" : features[i + 1];
    let widths = getWidths(
      thisFeature,
      state.proposed.trafficData,
      state.proposed.customFeatures,
      leftFeature,
      rightFeature,
    );
    desirableSum += widths[0];
    minimumSum += widths[1];
  }

  return [desirableSum, minimumSum];
}
