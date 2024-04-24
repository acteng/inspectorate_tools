<script lang="ts">
  import MapEntry from "./MapEntry.svelte";
  import { state } from "../data";
</script>

<ol>
  {#each $state.criticalIssues as issue}
    <li>
      Critical issue: type={issue.criticalIssue}, stage={issue.stage}, at {issue.locationName}
    </li>
  {/each}
</ol>

<MapEntry />
