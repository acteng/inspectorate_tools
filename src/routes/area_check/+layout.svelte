<script lang="ts">
  import { state, currentFile, files } from "./data";
  import { ToolLayout } from "$lib";
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
