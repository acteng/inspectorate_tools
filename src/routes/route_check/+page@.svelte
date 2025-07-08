<script lang="ts">
  import { FileManager } from "$lib/files";
  import { importFromExcel } from "$lib/import";
  import ExcelJS from "exceljs";
  import { currentFile, files, state, type State } from "./data";

  async function xlsxImporter(buffer: ArrayBuffer): Promise<[State, string[]]> {
    let workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
    return importFromExcel(workbook);
  }
</script>

<FileManager
  {files}
  {currentFile}
  {state}
  {xlsxImporter}
  service="Route Check Tool"
  fileObjectType="scheme"
>
  <p slot="description">
    The Route Check Tool is used by ATE for assessing the design quality of
    linear schemes. However, it may also be used by local authorities and others
    wishing to assess the design quality of schemes against ATE's quality
    criteria.
  </p>
</FileManager>
