<script lang="ts">
  import { ToolLayout } from "$lib";
  import { currentFile, files, state } from "./data";
</script>

<ToolLayout
  {state}
  {currentFile}
  {files}
  tool="route_check"
  service="Route Check Tool"
  routeCheckType={$state.summary.checkType}
>
  <slot />
</ToolLayout>
