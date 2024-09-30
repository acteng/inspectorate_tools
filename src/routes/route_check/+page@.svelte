<script lang="ts">
  import { FileManager } from "$lib/files";
  import { files, currentFile, state, type State } from "./data";
  import { getDalog, dalogToState } from "$lib/import";
  import ExcelJS from "exceljs";

  async function xlsxImporter(buffer: ArrayBuffer): Promise<State> {
    let workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
    let dalog = getDalog(workbook);
    return dalogToState(dalog);
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
