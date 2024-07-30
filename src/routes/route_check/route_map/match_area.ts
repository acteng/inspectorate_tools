import type { Map } from "svelte-maplibre";
import type { Polygon, Feature, FeatureCollection } from "geojson";
import authoritiesUrl from "$lib/assets/authorities.geojson?url";
import area from "@turf/area";
import intersect from "@turf/intersect";
import { polygon, featureCollection } from "@turf/helpers";

let authorities: FeatureCollection<Polygon, { name: string; level: string }> = {
  type: "FeatureCollection",
  features: [],
};

export async function loadAuthorities() {
  let resp = await fetch(authoritiesUrl);
  let gj = await resp.json();
  for (let f of gj.features) {
    if (f.geometry.type == "MultiPolygon") {
      f.geometry.type = "Polygon";
      f.geometry.coordinates = f.geometry.coordinates[0];
    }
  }
  authorities = gj;
}

export function getBestMatch(
  map: Map,
): Feature<Polygon, { name: string; level: string }> {
  let b = map.getBounds();
  let bbox = polygon([
    [
      b.getNorthEast().toArray(),
      b.getNorthWest().toArray(),
      b.getSouthWest().toArray(),
      b.getSouthEast().toArray(),
      b.getNorthEast().toArray(),
    ],
  ]);
  let bboxArea = area(bbox);

  let bestScore = 0;
  let best = authorities.features[0];
  for (let f of authorities.features) {
    let overlap = intersect(featureCollection([bbox, f]));
    if (!overlap) {
      continue;
    }
    let score = area(overlap) / bboxArea;
    if (score > bestScore) {
      bestScore = score;
      best = f;
    }
  }
  return best;
}
