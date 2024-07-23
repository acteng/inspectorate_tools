<script lang="ts">
  import { state, currentFile } from "./data";
  import { base } from "$app/paths";
  import { NavHeader, NavFooter, getTitle } from "$lib/nav";
  import { page } from "$app/stores";
  import folderUrl from "$lib/assets/images/folder.svg?url";
</script>

<div>
  <img src={folderUrl} alt="Manage files" style="vertical-align: middle;" />
  <a href="{base}/route_check/files">Manage files</a>
  <span class="govuk-body" style="margin-left: 8px;">
    Editing file <u>{$currentFile}</u>
  </span>
</div>

<NavHeader routeCheckType={$state.summary.checkType} />

<hr />

<h1 style="text-align: center">{getTitle($page.url.pathname)}</h1>

<slot />

<hr />

<NavFooter routeCheckType={$state.summary.checkType} />
