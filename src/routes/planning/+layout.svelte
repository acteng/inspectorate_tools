<script lang="ts">
  import { currentFile } from "./data";
  import { base } from "$app/paths";
  import { NavHeader, NavFooter } from "$lib/nav";
</script>

<NavHeader routeCheckType="" />

<div>
  <a href="{base}/planning/files">Manage files</a>
  <span>
    Editing file <u>{$currentFile}</u>
  </span>
</div>

<hr />

<slot />

<hr />

<NavFooter routeCheckType="" />
