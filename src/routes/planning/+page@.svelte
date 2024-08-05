<script lang="ts">
  import { FileManager } from "$lib/files";
  import { files, currentFile, state, type State } from "./data";
</script>

<FileManager
  {files}
  {currentFile}
  {state}
  service="Planning Application Assessment Toolkit"
/>
