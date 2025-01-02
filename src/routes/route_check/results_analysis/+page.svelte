<script lang="ts">
  import { state } from "../data";
  import { getResults } from "../results";
  import CheckDetails from "./CheckDetails.svelte";
  import PolicyCheckResults from "./PolicyCheckResults.svelte";
  import SafetyCheckResults from "./SafetyCheckResults.svelte";
  import SummaryOfScheme from "./SummaryOfScheme.svelte";

  let results = getResults($state);
</script>

<div class="govuk-width-container">
  <SummaryOfScheme />

  <PolicyCheckResults />

  <SafetyCheckResults />

  <CheckDetails {results} />
</div>
