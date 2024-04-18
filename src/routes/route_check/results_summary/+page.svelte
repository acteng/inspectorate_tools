<script lang="ts">
  import {
    Breadcrumbs,
    pairs,
    isScorecardCompleted,
    getScorecardDifference,
  } from "$lib";
  import { backgroundAndFontCombinations } from "$lib/colors";
  import { state } from "../data";
  import NetDifferenceResults from "./NetDifferenceResults.svelte";

  const headerFontColour = backgroundAndFontCombinations.green.font;
  let headerBackgroundColour = backgroundAndFontCombinations.green.background;

  const policyCheckComplete: boolean =
    $state.policyCheck.filter((policyCheckObject) => {
      return (
        policyCheckObject.existing === "" || policyCheckObject.proposed === ""
      );
    }).length === 0;
  const policyIssuesForReview = $state.policyConflictLog.length;

  const safetyCheckComplete: boolean = isScorecardCompleted(
    $state.safetyCheck,
    $state.safetyCheck.existingScores.length,
  );
  const safetyIssuesForReview = $state.criticalIssues.length;

  const streetCheckComplete: boolean = isScorecardCompleted(
    $state.streetCheck,
    $state.streetCheck.existingScores.length,
  );

  const streetPlacemakingCheckComplete: boolean = isScorecardCompleted(
    $state.streetPlacemakingCheck,
    $state.streetPlacemakingCheck.existingScores.length,
  );

  const pathCheckComplete: boolean = isScorecardCompleted(
    $state.pathCheck,
    $state.pathCheck.existingScores.length,
  );

  const pathPlacemakingCheckComplete: boolean = isScorecardCompleted(
    $state.pathPlacemakingCheck,
    $state.pathPlacemakingCheck.existingScores.length,
  );

  const safteyCheckNetDifference = getScorecardDifference($state.safetyCheck);
  const streetCheckNetDifference = getScorecardDifference($state.streetCheck);
  const streetPlacemakingCheckNetDifference = getScorecardDifference(
    $state.streetPlacemakingCheck,
  );
  const pathCheckNetDifference = getScorecardDifference($state.pathCheck);
  const pathPlacemakingCheckNetDifference = getScorecardDifference(
    $state.pathPlacemakingCheck,
  );
</script>

<Breadcrumbs
  links={[
    ["Tools", "/"],
    ["Route check tool", "/route_check"],
  ]}
  current="Results Summary"
/>

<h2>Route Check Results Summary</h2>

<div class="results-grid">
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}"
  >
    Overview
  </div>
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}"
  >
    Complete
  </div>
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}"
  >
    Remaining Isuses for Review
  </div>
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}"
  >
    Next Steps
  </div>
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}"
  >
    Policy Conflicts
  </div>
  <div class="grid-box">{policyCheckComplete}</div>
  <div class="grid-box">{policyIssuesForReview}</div>
  <div class="grid-box">
    {policyIssuesForReview > 0 || !policyCheckComplete
      ? "View Comments in Policy Check and Policy Conflict Log tabs"
      : "No further Action"}
  </div>
  <div
    <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}"
  >
    Critical Issues
  </div>
  <div class="grid-box">{safetyCheckComplete}</div>
  <div class="grid-box">{safetyIssuesForReview}</div>
  <div class="grid-box">
    {safetyIssuesForReview > 0 || !safetyCheckComplete
      ? "Complete Safety Check and Critical Issues Log"
      : "No further Action"}
  </div>
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}"
  />
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}; grid-column: 2/5;"
  >
    Net Difference
  </div>
  <NetDifferenceResults
    title="Safety Check"
    isComplete={safetyCheckComplete}
    netDifference={safteyCheckNetDifference}
    summaryNoun={"safety"}
  />
  <NetDifferenceResults
    title="Street Check"
    isComplete={streetCheckComplete}
    netDifference={streetCheckNetDifference}
    summaryNoun={"the route quality"}
  />
  <NetDifferenceResults
    title="Street Placemaking"
    isComplete={streetPlacemakingCheckComplete}
    netDifference={streetPlacemakingCheckNetDifference}
    summaryNoun={"the quality of place"}
  />
  <NetDifferenceResults
    title="Path Check"
    isComplete={pathCheckComplete}
    netDifference={pathCheckNetDifference}
    summaryNoun={"the route quality"}
  />
  <NetDifferenceResults
    title="Path Placemaking"
    isComplete={pathPlacemakingCheckComplete}
    netDifference={pathPlacemakingCheckNetDifference}
    summaryNoun={"the quality of place"}
  />
  <NetDifferenceResults
    title="Junction Assessment Tool"
    isComplete={false}
    netDifference={-105}
  />
</div>

<div class="level-of-service-results">
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}; grid-column: 1/5; grid-row:1/2"
  >
    Street Check Level of Service
  </div>
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}; grid-column: 1/2; grid-row:2/3"
  >
    Categories
  </div>
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}; grid-column: 2/3; grid-row:2/3"
  >
    Existing Layout
  </div>
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}; grid-column: 3/4; grid-row:2/3"
  >
    Proposed Layout
  </div>
  <div
    class="header"
    style="--background-color: {headerBackgroundColour}; --font-color:{headerFontColour}; grid-column: 4/5; grid-row:2/3"
  >
    Net Difference
  </div>

  <LevelOfServiceResults title={"Safety"} existing={2} proposed={68} />
  <LevelOfServiceResults title={"Accessibility"} existing={2} proposed={68} />
  <LevelOfServiceResults title={"Comfort"} existing={2} proposed={68} />
  <LevelOfServiceResults title={"Directness"} existing={2} proposed={68} />
  <LevelOfServiceResults title={"Attractiveness"} existing={2} proposed={68} />
  <LevelOfServiceResults title={"Cohesion"} existing={2} proposed={68} />
  <div class="header" style="grid-column: 1/5" />
  <LevelOfServiceResults
    title={"Overall ATE Score"}
    existing={2}
    proposed={68}
  />
</div>
<label for="review-statement">
  Use the space to provide overall feedback for the proposed scheme:
</label>
<textarea
  id="review-statement"
  class="govuk-textarea comments-box"
  bind:value={$state.feedback}
/>

<style>
  .results-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 2fr) 1fr repeat(6, 2fr);
  }
  .header {
    background-color: var(--background-color);
    color: var(--font-color);
    border: 1px solid var(--font-color);
    text-align: center;
  }
  .grid-box {
    text-align: center;
    border: 1px solid black;
  }
</style>
