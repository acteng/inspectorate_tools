<script lang="ts">
  import { TextArea } from "govuk-svelte";
  import { sum } from "$lib";
  import { state, type Scorecard } from "../data";
  import NetDifferenceResults from "./NetDifferenceResults.svelte";
  import LevelOfServiceResults from "./LevelOfServiceResults.svelte";

  const policyCheckComplete =
    $state.policyCheck.filter((policyCheckObject) => {
      return (
        policyCheckObject.existing === "" || policyCheckObject.proposed === ""
      );
    }).length === 0;
  const policyIssuesForReview = $state.policyConflictLog.length;

  const safetyCheckComplete = isScorecardCompleted($state.safetyCheck);
  const safetyIssuesForReview = $state.criticalIssues.length;

  const streetCheckComplete = isScorecardCompleted($state.streetCheck);

  const streetPlacemakingCheckComplete = isScorecardCompleted(
    $state.streetPlacemakingCheck,
  );

  const pathCheckComplete = isScorecardCompleted($state.pathCheck);

  const pathPlacemakingCheckComplete = isScorecardCompleted(
    $state.pathPlacemakingCheck,
  );

  function isScorecardCompleted(scorecard: Scorecard): boolean {
    return (
      !scorecard.existingScores.includes("") &&
      !scorecard.proposedScores.includes("")
    );
  }

  function getScorecardDifference(scorecard: Scorecard): number {
    let existing = sum(scorecard.existingScores.map((x) => parseInt(x || "0")));
    let proposed = sum(scorecard.proposedScores.map((x) => parseInt(x || "0")));
    return proposed - existing;
  }
</script>

<div class="results-grid">
  <!-- TODO No rows in the markup? -->
  <div class="header">Overview</div>
  <div class="header">Complete</div>
  <div class="header">Remaining Isuses for Review</div>
  <div class="header">Next Steps</div>

  <div class="header">Policy Conflicts</div>
  <div class="grid-box">{policyCheckComplete}</div>
  <div class="grid-box">{policyIssuesForReview}</div>
  <div class="grid-box">
    {policyIssuesForReview > 0 || !policyCheckComplete
      ? "View Comments in Policy Check and Policy Conflict Log tabs"
      : "No further Action"}
  </div>

  <div class="header">Critical Issues</div>
  <div class="grid-box">{safetyCheckComplete}</div>
  <div class="grid-box">{safetyIssuesForReview}</div>
  <div class="grid-box">
    {safetyIssuesForReview > 0 || !safetyCheckComplete
      ? "Complete Safety Check and Critical Issues Log"
      : "No further Action"}
  </div>

  <div class="header" />
  <div class="header" style="grid-column: 2/5;">Net Difference</div>
  <NetDifferenceResults
    title="Safety Check"
    isComplete={safetyCheckComplete}
    netDifference={getScorecardDifference($state.safetyCheck)}
    summaryNoun="safety"
  />
  <NetDifferenceResults
    title="Street Check"
    isComplete={streetCheckComplete}
    netDifference={getScorecardDifference($state.streetCheck)}
    summaryNoun="the route quality"
  />
  <NetDifferenceResults
    title="Street Placemaking"
    isComplete={streetPlacemakingCheckComplete}
    netDifference={getScorecardDifference($state.streetPlacemakingCheck)}
    summaryNoun="the quality of place"
  />
  <NetDifferenceResults
    title="Path Check"
    isComplete={pathCheckComplete}
    netDifference={getScorecardDifference($state.pathCheck)}
    summaryNoun="the route quality"
  />
  <NetDifferenceResults
    title="Path Placemaking"
    isComplete={pathPlacemakingCheckComplete}
    netDifference={getScorecardDifference($state.pathPlacemakingCheck)}
    summaryNoun="the quality of place"
  />
  <NetDifferenceResults
    title="Junction Assessment Tool"
    isComplete={false}
    netDifference={-105}
    summaryNoun="TODO"
  />
</div>

<div class="level-of-service-results">
  <div class="header" style="grid-column: 1/5; grid-row:1/2">
    Street Check Level of Service
  </div>
  <div class="header" style="grid-column: 1/2; grid-row:2/3">Categories</div>
  <div class="header" style="grid-column: 2/3; grid-row:2/3">
    Existing Layout
  </div>
  <div class="header" style="grid-column: 3/4; grid-row:2/3">
    Proposed Layout
  </div>
  <div class="header" style="grid-column: 4/5; grid-row:2/3">
    Net Difference
  </div>

  <LevelOfServiceResults title="Safety" existing={2} proposed={68} />
  <LevelOfServiceResults title="Accessibility" existing={2} proposed={68} />
  <LevelOfServiceResults title="Comfort" existing={2} proposed={68} />
  <LevelOfServiceResults title="Directness" existing={2} proposed={68} />
  <LevelOfServiceResults title="Attractiveness" existing={2} proposed={68} />
  <LevelOfServiceResults title="Cohesion" existing={2} proposed={68} />
  <div class="header" style="grid-column: 1/5" />
  <LevelOfServiceResults title="Overall ATE Score" existing={2} proposed={68} />
</div>

<!-- TODO Hint: "Use the space to provide overall feedback for the proposed scheme" -->
<TextArea label="Review statement" bind:value={$state.resultsReviewStatement} />

<style>
  .results-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 2fr) 1fr repeat(6, 2fr);
  }
  .header {
    /* TODO Plumb from backgroundAndFontCombinations.green.background */
    background-color: #006853;
    /* TODO Plumb from backgroundAndFontCombinations.green.font */
    color: white;
    border: 1px solid white;
    text-align: center;
  }
  .grid-box {
    text-align: center;
    border: 1px solid black;
  }

  .level-of-service-results {
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    grid-template-rows: repeat(2, 2f3) repeat(8, 1fr);
  }
  div {
    display: inline;
  }
</style>
