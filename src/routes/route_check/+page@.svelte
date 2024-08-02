<script lang="ts">
  import { FileManager } from "$lib/files";
  import { files, currentFile, state, type State } from "./data";
  import { getDalog, dalogToState } from "$lib/import";
  import ExcelJS from "exceljs";
  import ConvertToXlsx from "./results_export/ConvertToXlsx.svelte";

  async function xlsxImporter(buffer: ArrayBuffer): Promise<State> {
    let workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
    let dalog = getDalog(workbook);
    return dalogToState(dalog);
  }
</script>

<div class="govuk-width-container">
  <div class="govuk-caption-l">Route Check Tool</div>
  <div class="govuk-heading-l">Manage my schemes</div>
</div>

<FileManager {files} {currentFile} {state} {xlsxImporter}>
  <p slot="description">
    The Route Check Tool is used by ATE for assessing the design quality of
    linear schemes. However, it may also be used by local authorities and others
    wishing to assess the design quality of schemes against ATE's quality
    criteria.
  </p>

  <div slot="import">
    <ConvertToXlsx />
  </div>
</FileManager>
