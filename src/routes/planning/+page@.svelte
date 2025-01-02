<script lang="ts">
  import { FileManager } from "$lib/files";
  import { currentFile, files, state } from "./data";
</script>

<FileManager
  {files}
  {currentFile}
  {state}
  service="Planning Application Assessment Toolkit"
  fileObjectType="assessment"
/>
