import ExcelJS from "exceljs";
import blankUrl from "$lib/assets/blank_area_check.xlsx?url";
import type { State } from "./data";
import { downloadBinaryFile } from "$lib";

export async function downloadExcelFile(state: State) {
  console.log("Loading blank area check xlsx");
  let resp = await fetch(blankUrl);
  let bytes = await resp.arrayBuffer();
  let workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(bytes);

  console.log("Writing area check xlsx");
  let outBytes = await workbook.xlsx.writeBuffer();
  downloadBinaryFile(outBytes, "out.xlsx");
}
