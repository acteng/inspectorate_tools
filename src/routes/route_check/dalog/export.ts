import ExcelJS from "exceljs";
import blankUrl from "$lib/assets/blank_route_check.xlsx?url";
import type { State } from "../data";

export async function downloadExcelFile(state: State) {
  console.log("Loading blank route check xlsx");
  let resp = await fetch(blankUrl);
  let bytes = await resp.arrayBuffer();
  let workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(bytes);

  // TODO There's some bug writing conditional formatting, so just clear it all out
  workbook.eachSheet((worksheet, sheetId) => {
    // @ts-expect-error This really is there
    worksheet.conditionalFormattings = [];
  });

  console.log("Writing route check xlsx");
  let outBytes = await workbook.xlsx.writeBuffer();
  downloadGeneratedFile(outBytes, "out.xlsx");
}

function downloadGeneratedFile(bytes: ArrayBuffer, filename: string) {
  let blob = new Blob([bytes], { type: "application/octet-stream" });
  let url = URL.createObjectURL(blob);

  let link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
