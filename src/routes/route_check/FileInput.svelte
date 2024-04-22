<script lang="ts">
  // TODO Upstream changes
  import { v4 as uuidv4 } from "uuid";
  import { FormElement } from "govuk-svelte";

  export let label: string;
  // Called with the filename and file contents as text
  export let onLoad: (filename: string, contents: string) => void;

  export let disabled = false;

  let fileInput: HTMLInputElement;

  async function onChange(e: Event) {
    let filename = fileInput.files![0].name;
    let contents = await fileInput.files![0].text();
    onLoad(filename, contents);
  }

  let id = uuidv4();
</script>

<FormElement {label} {id}>
  <input
    bind:this={fileInput}
    on:change={onChange}
    {disabled}
    class="govuk-file-upload"
    {id}
    type="file"
  />
</FormElement>
