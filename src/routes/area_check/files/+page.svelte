<script lang="ts">
  import { FileManager } from "$lib/files";
  import { currentFile, files, state } from "../data";
</script>

<FileManager
  {files}
  {currentFile}
  {state}
  service="Area Check Tool"
  fileObjectType="scheme"
/>
