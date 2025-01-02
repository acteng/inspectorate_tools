<script lang="ts">
  import { ToolLayout } from "$lib";
  import { currentFile, files, state } from "./data";
</script>

<ToolLayout
  {state}
  {currentFile}
  {files}
  tool="planning"
  service="Planning Application Assessment Toolkit"
  routeCheckType=""
>
  <slot />
</ToolLayout>
