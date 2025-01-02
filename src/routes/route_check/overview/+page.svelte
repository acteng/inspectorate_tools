<script lang="ts">
  import { base } from "$app/paths";
  import { ExportFile } from "$lib/files";
  import { currentFile, state } from "../data";
  import ConvertToXlsx from "../results_export/ConvertToXlsx.svelte";
</script>

<div class="govuk-width-container">
  <ExportFile {currentFile} {state}>
    <ConvertToXlsx />
  </ExportFile>

  <p>Check what you need to do to assess the design quality of a scheme.</p>

  <ol>
    <li><a href="{base}/route_check/overview">Overview</a></li>
    <li><a href="{base}/route_check/summary">Summary of Scheme</a></li>
    <li><a href="{base}/route_check/route_map">Route Map</a></li>
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
    {:else if $state.summary.checkType == "path"}
      <li><a href="{base}/route_check/path_check">Path Check</a></li>
      <li>
        <a href="{base}/route_check/path_placemaking_check">
          Path Placemaking Check
        </a>
      </li>
    {:else}
      <li>Street/Path Check</li>
      <li>Street/Path Placemaking Check</li>
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
</div>
