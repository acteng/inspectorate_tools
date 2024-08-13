const guidance = {
  "Any type of junction": {
    "All movements": {
      scoreZero: [
        "Cycle movement in potential conflict with heavy motor traffic flow.",
        "Cycle movement mixed with or crossing traffic with 85th percentile speed exceeding 60kph, or where vehicles accelerate rapidly.",
        "Necessary to cross more than one traffic lane (without refuge or protection) to complete cycle movement unless traffic flows are low.",
        "Cycle movement crosses wide junction entry or exit: e.g. with merge or diverge taper or slip lane.",
        "Pinch points on junction entry or exit (lane width 3.2m-3.9m).",
        "Cycle movement affected by very poor surface quality utility reinstatement, gully positioning, debris.",
      ],
      scoreOne: [
        "Cycle movement in potential conflict with moderate traffic flow.",
        "Cycle lanes through junction meeting appropriate desirable minimum width requirements for the movement under consideration.",
        "Raised table at junction crossed by traffic in potential conflict with cycle movement.",
        "Cycle movement made by transiting onto section of shared use footway.",
      ],
      scoreTwo: [
        "Low traffic speed and volume in mixed traffic environment (e.g. access-only streets in a residential area).",
        "Cycle movement separated physically and/or in time from motor traffic and also separated from pedestrians.",
        "Cycle movement bypasses junction completely, including via good quality grade separation.",
      ],
    },
  },

  "Simple priority T-junction": {
    "Right turn from minor arm": {
      scoreZero: [
        "Heavy traffic movements and/or high bus and HGV flows in potential conflict with cycle movement, with no physical refuge in the centre of the major road (including ghost island junction).",
      ],
      scoreOne: [
        "Central refuge allowing two-stage cycle movement crossing one traffic lane at a time.",
      ],
      scoreTwo: [
        "Cycle movement made via crossing of major arm with dedicated cycle signals or cycle priority.",
      ],
    },
    "Left turn from major arm": {
      scoreZero: [],
      scoreOne: ["Side road entry treatment (table across minor arm)."],
      scoreTwo: ["Continuous footway and cycle track across minor arm."],
    },
    "Right turn from major arm": {
      scoreZero: [
        "Heavy traffic movements and/or high bus and HGV flows in potential conflict with no physical refuge in the centre of major road (including ghost island junction).",
      ],
      scoreOne: [
        "Protected turning refuge allowing two stage cycle movement, crossing one lane at a time.",
      ],
      scoreTwo: [
        "Cycle movement made via crossing of major arm via dedicated cycle signals or cycle priority.",
      ],
    },
    "Ahead on major arm, crossing minor arm": {
      scoreZero: [
        "Congested conditions causing poor visibility for right-turning motor vehicles from major arm.",
        "Junction corner radius ≥9m, including where off-carriageway cycle track crosses minor arm.",
      ],
      scoreOne: [
        "Junction free from queueing traffic and cycle lane on major arm meeting desirable minimum width requirements.",
        "Junction corner radius <9m, including where off-carriageway cycle track crosses minor arm without priority.",
        "Side road entry treatment (table across minor arm).",
      ],
      scoreTwo: [
        "Off-carriageway cycle track or stepped cycle track alongside major arm, crossing minor arm with priority over turning traffic.",
      ],
    },
  },

  Crossroads: {
    "Ahead from minor arm": {
      scoreZero: [
        "Heavy opposing traffic movements with no physical refuge (including ghost island junction).",
      ],
      scoreOne: [
        "Protected pocket refuge for ahead cycles allowing two stage movement, crossing one lane at a time.",
      ],
      scoreTwo: [
        "Cycle movement made via crossing of major arm via dedicated cycle signals or cycle priority.",
      ],
    },
  },

  "Traffic Signals": {
    "All movements": {
      scoreZero: [
        "Single or multiple queuing lanes with no cycle lanes or tracks on approaches.",
        "Junctions with unsignalised left turn merge/diverge and signalised ahead lanes.",
      ],
      scoreOne: [
        "Advance Cycle Stop lines, at least 5m deep and where the signals on the approach are on green for <30% of the cycle time.",
        "Signal timings adjusted to provide extended intergreen to suit cycle movement under consideration.",
        "Cycle/pedestrian scramble (toucan crossings with all-red stage).",
        "Early release for cycles, with enough time to clear junction for cycle movement being considered.",
      ],
      scoreTwo: [
        "Cycle movement has no potential conflict with motor traffic, e.g. dedicated cycle stage, conflicting traffic movement held or banned.",
      ],
    },
    "Right turn": {
      scoreZero: [],
      scoreOne: [
        "Two-stage right turn via ASL or marked area in front of stop line.",
      ],
      scoreTwo: [
        "Two-stage right turn with physically protected waiting area.",
      ],
    },
  },

  Roundabout: {
    "All movements": {
      scoreZero: [
        "Any type of roundabout with high traffic throughput.",
        "Normal roundabout with multi-lane flared approaches.",
        "Any type of roundabout with annular cycle lane marked on the circulatory carriageway.",
      ],
      scoreOne: [
        "Compact roundabout or raised mini roundabout with no more than moderate traffic throughput",
        "Off-carriageway cycle track with crossings of entries and exits without cycle priority, crossing single traffic lanes with traffic flows < 4000 vehicles per day or 400 HGV/bus flow. ",
      ],
      scoreTwo: [
        "Off-carriageway cycle track with crossings of entries and exits with signals or cycle priority.",
      ],
    },
  },
};

export type JunctionType = keyof typeof guidance;
export const junctionTypes = Object.keys(guidance) as JunctionType[];

export interface Guidance {
  junctionType: JunctionType;
  movementType: string;
  scoreZero: string[];
  scoreOne: string[];
  scoreTwo: string[];
}

export function getMovementTypes(junctionType: JunctionType): string[] {
  return Object.keys(guidance[junctionType]);
}

const allMovements = "All movements";

export function getGuidance(
  junctionType: JunctionType,
  movementType: string,
): Guidance[] {
  let result = [];

  // Use both filters
  // @ts-expect-error Missing keys handled below
  let case1 = guidance[junctionType][movementType];
  if (case1) {
    result.push({
      junctionType,
      movementType,
      ...case1,
    });
  }

  // Same junction type, but ignore the movement type
  // @ts-expect-error Missing keys handled below
  let case2 = guidance[junctionType][allMovements];
  if (case2 && movementType != allMovements) {
    result.push({
      junctionType,
      movementType: allMovements,
      ...case2,
    });
  }

  // There's one case where a junction type also includes guidance from another type.
  if (junctionType == "Crossroads") {
    // @ts-expect-error Missing keys handled below
    let case3 = guidance["Simple priority T-junction"][allMovements];
    if (case3) {
      result.push({
        junctionType: "Simple priority T-junction",
        movementType: allMovements,
        ...case3,
      });
    }
  }

  // Fallback to the most general case
  if (junctionType != "Any type of junction") {
    let case4 = guidance["Any type of junction"][allMovements];
    if (case4) {
      result.push({
        junctionType: "Any type of junction",
        movementType: allMovements,
        ...case4,
      });
    }
  }

  return result;
}
