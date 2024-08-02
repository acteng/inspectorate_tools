<script lang="ts">
  import { state, currentFile, files } from "./data";
  import { ToolLayout } from "$lib";
</script>

<ToolLayout {state} {currentFile} {files} tool="area_check" routeCheckType="">
  <slot />
</ToolLayout>
