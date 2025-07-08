<script lang="ts" generics="StateType">
  import { Loading, Modal, stripSuffix } from "$lib";
  import { FormElement, SecondaryButton, WarningText } from "govuk-svelte";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher<{
    imported: { filename: string; data: StateType };
  }>();

  export let xlsxImporter: (
    buffer: ArrayBuffer,
  ) => Promise<[StateType, string[]]>;

  let loading = "";
  let open = false;

  let fileInput: HTMLInputElement;
  async function fileLoaded(_: Event) {
    let filename = fileInput.files![0].name;
    try {
      loading = `Loading ${filename}`;

      let buffer = await fileInput.files![0].arrayBuffer();
      let [data, errors] = await xlsxImporter(buffer);
      loading = "";
      dispatch("imported", { filename: stripSuffix(filename, ".xlsx"), data });
      alertErrorsIfNecessary(errors);
    } catch (err) {
      window.alert(`Couldn't import ${filename}: ${err}`);
      loading = "";
    }
  }

  function alertErrorsIfNecessary(errors: string[]) {
    if (errors.length > 0) {
      let combinedErrorMessage: string =
        "The file was imported, but with the following issues. These will have to be fixed manually in the web tool:\n";
      errors.forEach((errorMessage: string) => {
        combinedErrorMessage += `${errorMessage}\n`;
      });
      window.alert(combinedErrorMessage);
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
      <li>Optionally, you can draw your Route Map for helpful reference.</li>
      <li>
        Some fields like Funding Programme on the Summary of Scheme page may be
        marked as "Other"; you can change to a pre-existing option.
      </li>
    </ul>
  </WarningText>
  <SecondaryButton on:click={() => (open = false)}>Close</SecondaryButton>
</Modal>
