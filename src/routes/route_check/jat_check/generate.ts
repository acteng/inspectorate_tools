import bearing from "@turf/bearing";
import turfCenter from "@turf/center";
import destination from "@turf/destination";
import distance from "@turf/distance";
import type { Position } from "$lib/map";
import type { Arm, Movement } from "../data";

export function generateMovements(arms: Arm[]): Movement[] {
  // Sort arms around center in CCW order
  let center = turfCenter({
    type: "FeatureCollection" as const,
    features: arms.map((arm) => {
      return {
        type: "Feature" as const,
        geometry: {
          type: "Point" as const,
          coordinates: arm.point,
        },
        properties: {},
      };
    }),
  }).geometry.coordinates as Position;
  arms.sort(
    (a1, a2) =>
      normalize(bearing(center, a2.point)) -
      normalize(bearing(center, a1.point)),
  );

  let movements = [];
  for (let i = 0; i < arms.length; i++) {
    let arm1 = arms[i];
    let angleStartToCenter = bearing(arm1.point, center);

    // Continue in CCW order
    let toCount = 1;
    for (let j of order(i, arms.length)) {
      let arm2 = arms[j];
      let angleCenterToEnd = bearing(center, arm2.point);
      // Start at the arm, far from the junction
      let point1 = jitter(arm1.point, center, toCount++);
      // Then go some percent towards the junction
      let dist = distance(arm1.point, center);
      let point2 = destination(point1, 0.5 * dist, angleStartToCenter).geometry
        .coordinates as Position;
      let point3 = destination(point2, 0.2 * dist, angleCenterToEnd).geometry
        .coordinates as Position;

      movements.push({
        point1,
        point2,
        point3,
        kind: "cycling" as const,
        score: "X" as const,
        name: `${arm1.name} to ${arm2.name}`,
        notes: "",
      });
    }
  }
  return movements;
}

function jitter(pt: Position, center: Position, offset: number): Position {
  let spacingMeters = 0.003;

  let angleToCenter = bearing(pt, center);
  // This should wind up on the left side of the road
  let perpAngle = angleToCenter - 90;
  let projectDistance = spacingMeters * offset;

  return destination(pt, projectDistance, perpAngle).geometry
    .coordinates as Position;
}

// Normalize a bearing to [0, 360)
function normalize(b: number): number {
  return (b + 360) % 360;
}

// Returns [i, n) U [0, i)
function order(i: number, n: number): number[] {
  let out = [];
  for (let x = i + 1; x < n; x++) {
    out.push(x);
  }
  for (let x = 0; x < i; x++) {
    out.push(x);
  }
  return out;
}
