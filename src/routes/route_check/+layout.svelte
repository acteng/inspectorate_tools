<script lang="ts">
  import { state, currentFile } from "./data";
  import { base } from "$app/paths";
  import { NavHeader, NavFooter } from "$lib/nav";
</script>

<NavHeader routeCheckType={$state.summary.checkType} />

<div>
  <a href="{base}/route_check/files">Manage files</a>
  <span>
    Editing file <u>{$currentFile}</u>
  </span>
</div>

<hr />

<slot />

<hr />

<NavFooter routeCheckType={$state.summary.checkType} />
