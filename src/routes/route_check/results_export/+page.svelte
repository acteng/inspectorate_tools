<script lang="ts">
  import ExcelJS from "exceljs";
  import { encode } from "./da_log";
  import { state } from "../data";
  import { FormElement } from "govuk-svelte";
  import { importDalog } from "$lib/import";

  // TODO Move this to the FileManager
  let fileInput: HTMLInputElement;
  // TODO Loading screen
  async function fileLoaded(e: Event) {
    let buffer = await fileInput.files![0].arrayBuffer();

    try {
      let workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(buffer);
      let state = importDalog(workbook);
      // TODO Try to auto-name
      window.localStorage.setItem(
        "route_check/imported",
        JSON.stringify(state),
      );
      window.alert("Done, refresh and load imported");
    } catch (err) {
      window.alert(`Import broke: ${err}`);
    }
  }
</script>

<FormElement label="Import from XLSX file" id="import-xlsx">
  <input
    bind:this={fileInput}
    on:change={fileLoaded}
    class="govuk-file-upload"
    id="import-xlsx"
    type="file"
  />
</FormElement>

<p>TODO. Below is the start to the DALOG output.</p>

<pre>{JSON.stringify(encode($state), null, "  ")}</pre>
