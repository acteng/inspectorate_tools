<script lang="ts">
  import { FileManager } from "$lib/files";
  import { files, currentFile, state, type State } from "./data";
</script>

<div class="govuk-width-container">
  <div class="govuk-caption-l">Cross Section Check Tool</div>
  <div class="govuk-heading-l">Manage my schemes</div>
</div>

<FileManager {files} {currentFile} {state} />
