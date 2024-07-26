import type { Arm, Movement } from "../data";
import type { Position } from "$lib/map";
import destination from "@turf/destination";
import bearing from "@turf/bearing";
import distance from "@turf/distance";

export function generateMovements(center: Arm, arms: Arm[]): Movement[] {
  let spacingMeters = 0.003;
  let jitter = (idx: number, offset: number) => {
    let pt = arms[idx].point;
    let angleToCenter = bearing(pt, center.point);
    // This should wind up on the left side of the road
    let perpAngle = angleToCenter - 90;
    let projectDistance = spacingMeters * offset;

    return destination(pt, projectDistance, perpAngle).geometry
      .coordinates as Position;
  };

  let movements = [];
  for (let i = 0; i < arms.length; i++) {
    let toCount = 1;
    // TODO Order by clockwise
    for (let j = 0; j < arms.length; j++) {
      if (i == j) {
        continue;
      }
      let arm1 = arms[i];
      let arm2 = arms[j];

      let angleStartToCenter = bearing(arm1.point, center.point);
      let angleCenterToEnd = bearing(center.point, arm2.point);
      // Start at the arm, far from the junction
      let point1 = jitter(i, toCount++);
      // Then go some percent towards the junction
      let dist = distance(arm1.point, center.point);
      let point2 = destination(point1, 0.5 * dist, angleStartToCenter).geometry
        .coordinates as Position;
      let point3 = destination(point2, 0.2 * dist, angleCenterToEnd).geometry
        .coordinates as Position;

      movements.push({
        point1,
        point2,
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
