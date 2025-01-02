<script lang="ts">
  import { ToolLayout } from "$lib";
  import { currentFile, files, state } from "./data";
</script>

<ToolLayout
  {state}
  {currentFile}
  {files}
  tool="cross_section"
  service="Cross Section Check Tool"
  routeCheckType=""
>
  <slot />
</ToolLayout>
