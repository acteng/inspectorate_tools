<script lang="ts">
  import { state, currentFile, files } from "./data";
  import { ToolLayout } from "$lib";
</script>

<ToolLayout
  {state}
  {currentFile}
  {files}
  tool="route_check"
  routeCheckType={$state.summary.checkType}
>
  <slot />
</ToolLayout>
