<script lang="ts">
  import { FileManager } from "$lib/files";
  import { files, currentFile, state, type State } from "../data";
  import { getDalog, dalogToState } from "$lib/import";
  import ExcelJS from "exceljs";
  import { downloadExcelFile } from "../results_export/export";

  async function xlsxImporter(buffer: ArrayBuffer): Promise<State> {
    let workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
    let dalog = getDalog(workbook);
    return dalogToState(dalog);
  }

  async function downloadXlsx() {
    try {
      await downloadExcelFile($state, $currentFile);
    } catch (err) {
      window.alert(`Conversion failed: ${err}`);
    }
  }
</script>

<div class="govuk-width-container">
  <h3>Route Check Tool</h3>
  <h2>Manage my schemes</h2>
</div>

<FileManager {files} {currentFile} {state} {xlsxImporter} {downloadXlsx} />
