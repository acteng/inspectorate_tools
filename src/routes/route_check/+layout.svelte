<script lang="ts">
  import { currentFile } from "./data";
  import { base } from "$app/paths";
  import { NavHeader, NavFooter } from "$lib/nav";
</script>

<NavHeader />

<div>
  <a href="{base}/route_check/files">Manage files</a>
  <span>
    Editing file <u>{$currentFile}</u>
  </span>
</div>

<hr />

<slot />

<hr />

<NavFooter />
