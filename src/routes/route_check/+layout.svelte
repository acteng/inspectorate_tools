<script lang="ts">
  import { currentFile } from "./data";
  import { base } from "$app/paths";
</script>

<div>
  <a href="{base}/route_check/files">Manage files</a>
  <span>
    Editing file <u>{$currentFile}</u>
  </span>
</div>

<hr />

<slot />
