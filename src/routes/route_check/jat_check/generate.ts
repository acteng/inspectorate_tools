import type { Arm, Movement } from "../data";
import type { Position } from "$lib/map";
import destination from "@turf/destination";
import bearing from "@turf/bearing";

export function generateMovements(center: Arm, arms: Arm[]): Movement[] {
  // Calculate the angle from each arm to the center
  let armAngles = arms.map((arm) => bearing(arm.point, center.point));

  // If every arm is connected, how many movements will start or end at each arm?
  let totalPerArm = 2 * (arms.length - 1);
  let halfPerArm = arms.length - 1;
  // Track how many movements to/from an arm we've drawn so far
  let perArm = Array(arms.length).fill(0);

  let spacingMeters = 0.002;
  let jitter = (idx: number) => {
    let pt = arms[idx].point;
    let angleToCenter = bearing(pt, center.point);
    let perpAngle = angleToCenter + (perArm[idx] < halfPerArm ? 90 : -90);
    let projectDistance = spacingMeters * (1 + (perArm[idx] % halfPerArm));

    // Update
    perArm[idx]++;

    return destination(pt, projectDistance, perpAngle).geometry
      .coordinates as Position;
  };

  let movements = [];
  for (let i = 0; i < arms.length; i++) {
    for (let j = 0; j < arms.length; j++) {
      if (i == j) {
        continue;
      }
      let arm1 = arms[i];
      let arm2 = arms[j];

      let point1 = jitter(i);
      let point3 = jitter(j);

      // For the middle point, average the angle from the center to each of the two arms and project a bit that way
      // TODO Actually this doesn't look good
      //let midptAngle = betweenBearings(bearing(center.point, point1), bearing(center.point, point3));
      let midptAngle = bearing(center.point, point3);

      movements.push({
        point1,
        point2: destination(center.point, spacingMeters, midptAngle).geometry
          .coordinates as Position,
        point3,
        kind: "cycling" as const,
        score: "0" as const,
        name: `${arm1.name} to ${arm2.name}`,
        notes: "",
      });
    }
    // Just work on one for now
    //break;
  }
  return movements;
}

// TODO Actually, not sure we need this
function normalizeBearing(b: number): number {
  return ((b % 360) + 360) % 360;
}

function betweenBearings(b1: number, b2: number): number {
  let difference = Math.abs(normalizeBearing(b1) - normalizeBearing(b2));
  return Math.min(difference, 360 - difference);
}
