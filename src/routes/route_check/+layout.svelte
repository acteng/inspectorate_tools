<script lang="ts">
  import { FileManager } from "$lib/files";
  import { files, currentFile, state } from "./data";
  import { getDalog, dalogToState } from "$lib/import";
  import ExcelJS from "exceljs";

  async function xlsxImporter(buffer: ArrayBuffer) {
    try {
      let workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(buffer);
      let dalog = getDalog(workbook);
      let importedState = dalogToState(dalog);
      // TODO Try to auto-name
      window.localStorage.setItem(
        "route_check/imported",
        JSON.stringify(importedState),
      );
      window.alert("Done, refresh and load imported");
    } catch (err) {
      window.alert(`Import broke: ${err}`);
    }
  }
</script>

<FileManager {files} {currentFile} {state} {xlsxImporter} />

<hr />

<slot />
