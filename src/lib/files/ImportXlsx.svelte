<script lang="ts" generics="StateType">
  import { stripSuffix } from "$lib";
  import { FormElement } from "govuk-svelte";
  import Loading from "./Loading.svelte";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher<{
    imported: { filename: string; data: StateType };
  }>();

  export let xlsxImporter: (buffer: ArrayBuffer) => Promise<StateType>;

  let loading = "";

  let fileInput: HTMLInputElement;
  async function fileLoaded(e: Event) {
    let filename = fileInput.files![0].name;
    try {
      loading = `Loading ${filename}`;

      let buffer = await fileInput.files![0].arrayBuffer();
      let data = await xlsxImporter(buffer);
      loading = "";
      dispatch("imported", { filename: stripSuffix(filename, ".xlsx"), data });
    } catch (err) {
      window.alert(`Couldn't import ${filename}: ${err}`);
      loading = "";
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

<Loading {loading} />
