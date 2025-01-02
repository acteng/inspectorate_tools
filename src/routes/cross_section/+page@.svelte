<script lang="ts">
  import { FileManager } from "$lib/files";
  import { currentFile, files, state } from "./data";
</script>

<FileManager
  {files}
  {currentFile}
  {state}
  service="Cross Section Check Tool"
  fileObjectType="cross section"
/>
