<script lang="ts">
  import { sum } from "$lib";
  import { type Scorecard, numericScore } from "../data";

  export let category: string;
  export let scorecard: Scorecard;
  // Inclusive
  export let range: [number, number] | null = null;

  let [existing, proposed] = scoreDifference();

  // Returns [existing, proposed] total score as a percentage
  function scoreDifference(): [number, number] {
    let actualRange = range || [0, scorecard.existingScores.length - 1];
    let idx1 = actualRange[0];
    let idx2 = actualRange[1] + 1;

    // TODO Same denominator for existing/proposed, assuming the N/A's match
    let numberMetrics = scorecard.existingScores
      .slice(idx1, idx2)
      .filter((x) => x != "N/A").length;

    let multiplier = category == "Safety" ? 3 : 1;
    let maxScore = numberMetrics * 2 * multiplier;

    let existingScore =
      multiplier *
      sum(scorecard.existingScores.slice(idx1, idx2).map(numericScore));
    let proposedScore =
      multiplier *
      sum(scorecard.proposedScores.slice(idx1, idx2).map(numericScore));
    return [(existingScore / maxScore) * 100, (proposedScore / maxScore) * 100];
  }
</script>

<tr>
  <td>{category}</td>
  <td>{Math.round(existing)}%</td>
  <td>{Math.round(proposed)}%</td>
  <td>{Math.round(proposed - existing)}%</td>
</tr>

<style>
  td {
    border: 1px solid black;
    padding: 4px;
  }
</style>
