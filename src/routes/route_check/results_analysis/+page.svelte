<script lang="ts">
  import { state } from "../data";
  import { getResults } from "../results";
  import CheckDetails from "./CheckDetails.svelte";
  import SummaryOfScheme from "./SummaryOfScheme.svelte";
  import PolicyCheckResults from "./PolicyCheckResults.svelte";
  import SafetyCheckResults from "./SafetyCheckResults.svelte";

  let results = getResults($state);
</script>

<SummaryOfScheme />

<PolicyCheckResults />

<SafetyCheckResults />

<CheckDetails {results} />
