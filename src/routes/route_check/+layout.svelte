<script lang="ts">
  import { state, currentFile } from "./data";
  import { base } from "$app/paths";
  import { NavHeader, NavFooter } from "$lib/nav";
  import folderUrl from "$lib/assets/images/folder.svg?url";
</script>

<NavHeader routeCheckType={$state.summary.checkType} />

<div>
  <img src={folderUrl} alt="Manage files" style="vertical-align: middle;" />
  <a href="{base}/route_check/files">Manage files</a>
  <span style="margin-left: 8px;">
    Editing file <u>{$currentFile}</u>
  </span>
</div>

<hr />

<slot />

<hr />

<NavFooter routeCheckType={$state.summary.checkType} />
