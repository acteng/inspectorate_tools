<script lang="ts" generics="StateType">
  import { stripSuffix, Loading, Modal } from "$lib";
  import { FormElement, SecondaryButton, WarningText } from "govuk-svelte";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher<{
    imported: { filename: string; data: StateType };
  }>();

  export let xlsxImporter: (buffer: ArrayBuffer) => Promise<StateType>;

  let loading = "";
  let open = false;

  let fileInput: HTMLInputElement;
  async function fileLoaded(_: Event) {
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

<SecondaryButton on:click={() => (open = true)}>
  Import from XLSX file
</SecondaryButton>

<Loading {loading} />

<Modal title="Import from XLSX file" bind:open>
  <FormElement label="Import from XLSX file" id="import-xlsx">
    <input
      bind:this={fileInput}
      on:change={fileLoaded}
      class="govuk-file-upload"
      id="import-xlsx"
      type="file"
    />
  </FormElement>

  <WarningText>
    <p>
      You can import from an existing route check .xlsx file, <b>
        only if there's an up-to-date DALOG sheet added
      </b>
      . After importing, there will still be some problems:
    </p>
    <ul>
      <li>
        You must fill out the Junction Assessment Tool (JAT); it won't be
        imported
      </li>
      <li>Some text fields on the Summary of Scheme page will be missing</li>
    </ul>
  </WarningText>
  <SecondaryButton on:click={() => (open = false)}>Close</SecondaryButton>
</Modal>
