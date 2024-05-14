<script lang="ts" generics="StateType">
  import { FormElement } from "govuk-svelte";
  import Loading from "./Loading.svelte";

  export let xlsxImporter: (buffer: ArrayBuffer) => void;

  let loading = "";

  let fileInput: HTMLInputElement;
  async function fileLoaded(e: Event) {
    let filename = fileInput.files![0].name;
    loading = `Loading ${filename}`;

    let buffer = await fileInput.files![0].arrayBuffer();
    // TODO Loading screen
    await xlsxImporter(buffer);
    loading = "";
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

<Loading {loading} />
