<script lang="ts">
  import { base } from "$app/paths";
  import { currentFile, state, emptyState, type State } from "../data";
  import { ExportFile } from "$lib/files";
  import ConvertToXlsx from "../results_export/ConvertToXlsx.svelte";
  import Task from "./Task.svelte";

  let empty = emptyState();

  type Status = "Not yet started" | "In progress" | "Completed";

  function statusTag(key: keyof State): Status {
    return cmp((x) => x[key]);
  }

  function cmp(f: (x: State) => any): Status {
    return JSON.stringify(f($state)) == JSON.stringify(f(empty))
      ? "Not yet started"
      : "In progress";
  }

  function pmp(x: State): Status {
    let len = x.policyConflictLog.length + x.criticalIssues.length;
    if (len == 0) {
      return "Not yet started";
    }
    return "In progress";
  }
</script>

<div class="govuk-width-container">
  <ExportFile {currentFile} {state}>
    <ConvertToXlsx />
  </ExportFile>

  <p>Check what you need to do to assess the design quality of a scheme.</p>

  <ol>
    <hr />
    <li><a href="{base}/route_check/overview">Overview</a></li>
    <hr />
    <Task
      link="summary"
      title="Summary of Scheme"
      taskStatus={statusTag("summary")}
    />
    <Task
      link="route_map"
      title="Route Map"
      taskStatus={cmp((x) => x.summary.networkMap)}
    />
    <Task
      link="policy_check"
      title="Policy Check"
      taskStatus={statusTag("policyCheck")}
    />
    <Task
      link="safety_check"
      title="Safety Check"
      taskStatus={statusTag("safetyCheck")}
    />
    <Task
      link="problems_map"
      title="Problem Mapping Page"
      taskStatus={pmp($state)}
    />

    {#if $state.summary.checkType == "street"}
      <Task
        link="street_check"
        title="Street Check"
        taskStatus={statusTag("streetCheck")}
      />
      <Task
        link="street_placemaking_check"
        title="Street Placemaking Check"
        taskStatus={statusTag("streetPlacemakingCheck")}
      />
    {:else if $state.summary.checkType == "path"}
      <Task
        link="path_check"
        title="Path Check"
        taskStatus={statusTag("pathCheck")}
      />
      <Task
        link="path_placemaking_check"
        title="Path Placemaking Check"
        taskStatus={statusTag("pathPlacemakingCheck")}
      />
    {:else}
      <li>Street/Path Check</li>
      <hr />
      <li>Street/Path Placemaking Check</li>
      <hr />
    {/if}

    <Task link="jat_check" title="JAT Check" taskStatus={statusTag("jat")} />

    <li>
      <a href="{base}/route_check/results_summary">Results Summary</a>
    </li>
    <hr />
    <li>
      <a href="{base}/route_check/results_analysis">Results Further Analysis</a>
    </li>
    <hr />
    <li><a href="{base}/route_check/results_export">Results Export</a></li>
    <hr />
    <li><a href="{base}/route_check/dalog">Design Assistance Log</a></li>
    <hr />
  </ol>
</div>
