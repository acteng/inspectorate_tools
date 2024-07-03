<script lang="ts">
  import { ExternalLink } from "$lib";
  import { base } from "$app/paths";
  import { state } from "./data";
</script>

<p>
  This is an experimental version of a <ExternalLink
    href="https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools"
  >
    scheme review tool
  </ExternalLink>.
</p>

<ol>
  <li><a href="{base}/route_check/summary">Summary of Scheme</a></li>
  <li><a href="{base}/route_check/policy_check">Policy Check</a></li>

  <li><a href="{base}/route_check/safety_check">Safety Check</a></li>
  <li>
    <a href="{base}/route_check/problems_map">Problems Mapping Page</a>
  </li>

  {#if $state.summary.checkType == "street"}
    <li><a href="{base}/route_check/street_check">Street Check</a></li>
    <li>
      <a href="{base}/route_check/street_placemaking_check">
        Street Placemaking Check
      </a>
    </li>
  {:else}
    <li>
      <i>
        Street Check (disabled, because of the Route Check Type set in Summary)
      </i>
    </li>
    <li>
      <i>
        Street Placemaking Check (disabled, because of the Route Check Type set
        in Summary)
      </i>
    </li>
  {/if}

  {#if $state.summary.checkType == "path"}
    <li><a href="{base}/route_check/path_check">Path Check</a></li>
    <li>
      <a href="{base}/route_check/path_placemaking_check">
        Path Placemaking Check
      </a>
    </li>
  {:else}
    <li>
      <i>
        Path Check (disabled, because of the Route Check Type set in Summary)
      </i>
    </li>
    <li>
      <i>
        Path Placemaking Check (disabled, because of the Route Check Type set in
        Summary)
      </i>
    </li>
  {/if}

  <li><a href="{base}/route_check/jat_check">JAT Check</a></li>

  <li>
    <a href="{base}/route_check/results_summary">Results Summary</a>
  </li>
  <li>
    <a href="{base}/route_check/results_analysis">Results Further Analysis</a>
  </li>
  <li><a href="{base}/route_check/results_export">Results Export</a></li>
  <li><a href="{base}/route_check/dalog">Design Assistance Log</a></li>
</ol>

<style>
  li {
    font-family: "GDS Transport", arial, sans-serif;
  }
</style>
