<script lang="ts">
  import { ToolLayout } from "$lib";
  import { currentFile, files, state } from "./data";
</script>

<ToolLayout
  {state}
  {currentFile}
  {files}
  tool="area_check"
  service="Area Check Tool"
  routeCheckType=""
>
  <slot />
</ToolLayout>
