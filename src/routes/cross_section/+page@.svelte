<script lang="ts">
  import { FileManager } from "$lib/files";
  import { files, currentFile, state } from "./data";
</script>

<FileManager {files} {currentFile} {state} service="Cross Section Check Tool" />
