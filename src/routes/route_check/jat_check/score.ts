import type { JunctionAssessment } from "../data";

export function describeScore(ja: JunctionAssessment): string {
  if (ja.movements.length == 0) {
    return "No movements added";
  }

  let score = 0;
  let totalPossible = 0;
  for (let m of ja.movements) {
    score += {
      0: 0,
      1: 1,
      2: 2,
      X: 0,
    }[m.score];
    totalPossible += 2;
  }
  let percent = (score / totalPossible) * 100;
  return `${Math.round(percent)}%`;
}
