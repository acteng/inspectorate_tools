<script lang="ts">
  import { currentFile } from "./data";
  import { base } from "$app/paths";
  import { NavHeader, NavFooter, getTitle } from "$lib/nav";
  import { page } from "$app/stores";
  import folderUrl from "$lib/assets/images/folder.svg?url";
</script>

<NavHeader routeCheckType="" />

<div>
  <img src={folderUrl} alt="Manage files" style="vertical-align: middle;" />
  <a href="{base}/cross_section/files">Manage files</a>
  <span style="margin-left: 8px;">
    Editing file <u>{$currentFile}</u>
  </span>
</div>

<hr />

<h1 style="text-align: center">{getTitle($page.url.pathname)}</h1>

<slot />

<hr />

<NavFooter routeCheckType="" />
