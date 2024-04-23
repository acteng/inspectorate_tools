<script lang="ts">
  import { base } from "$app/paths";
  import {
    currentFile,
    state,
    emptyState,
    newFilename,
    getFileList,
    loadFile,
  } from "./data";
  import {
    FileInput,
    WarningButton,
    ButtonGroup,
    SecondaryButton,
    TextArea,
    CollapsibleCard,
  } from "govuk-svelte";
  import { Modal } from "$lib";

  // This is used both to organize local storage keys and to determine the
  // starter page to redirect to. Should be of the form "foo/"
  export let prefix: string;

  let fileList = getFileList();
  let open = false;

  function renameFile() {
    // TODO Handle overwriting
    let newName = window.prompt(
      `Rename file ${$currentFile} to what?`,
      $currentFile,
    );
    if (newName) {
      let oldKey = `${prefix}${$currentFile}`;
      let contents = window.localStorage.getItem(oldKey)!;
      window.localStorage.setItem(`${prefix}${newName}`, contents);
      window.localStorage.removeItem(oldKey);
      $currentFile = newName;
      fileList = getFileList();
    }
  }

  function exportFile() {
    downloadGeneratedFile($currentFile + ".json", JSON.stringify($state));
  }

  function downloadGeneratedFile(filename: string, textInput: string) {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8, " + encodeURIComponent(textInput),
    );
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  function deleteFile() {
    // TODO Use a full Modal
    if (
      window.confirm(`Really delete file ${$currentFile}? You can't undo this.`)
    ) {
      window.localStorage.removeItem(`${prefix}${$currentFile}`);
      newFile();
    }
  }

  function newFile() {
    $currentFile = newFilename();
    $state = emptyState();
    // Do this immediately, so we can refresh the fileList
    window.localStorage.setItem(
      `${prefix}${$currentFile}`,
      JSON.stringify($state),
    );
    fileList = getFileList();
    // TODO Losing the Modal is a bit sudden
    window.location.replace(`${base}/${prefix}`);
  }

  function importFile(rawFilename: string, contents: string) {
    // TODO Handle duplicate names
    let file = rawFilename.endsWith(".json")
      ? rawFilename.slice(0, -".json".length)
      : rawFilename;
    // TODO Validate contents upfront?
    // Do this immediately, so we can refresh the fileList
    window.localStorage.setItem(`${prefix}${file}`, contents);
    fileList = getFileList();
    openFile(file);
  }

  function openFile(file: string) {
    try {
      let x = loadFile(file);
      $currentFile = file;
      $state = x;
      window.location.replace(`${base}/${prefix}`);
    } catch (error) {
      window.alert(`Couldn't load ${file}: ${error}`);
    }
  }
</script>

<div style="display: flex;">
  <p>
    Editing file <u>{$currentFile}</u>
  </p>
  <SecondaryButton on:click={() => (open = true)}>Manage files</SecondaryButton>
</div>

<Modal title="Manage files" bind:open>
  <p>
    All files are auto-saved in your browser's local storage. You can close your
    browser and resume later. You can export the file to your computer to share
    with someone else, and import from a file below.
  </p>

  <p>
    You're currently editing <u>{$currentFile}</u>
    .
  </p>
  <ButtonGroup>
    <SecondaryButton on:click={renameFile}>Rename</SecondaryButton>
    <SecondaryButton on:click={exportFile}>Export</SecondaryButton>
    <WarningButton on:click={deleteFile}>Delete</WarningButton>
  </ButtonGroup>

  <CollapsibleCard label="Debug">
    <TextArea
      label="JSON"
      value={JSON.stringify($state, null, "  ")}
      rows={10}
    />
  </CollapsibleCard>

  <hr />

  <SecondaryButton on:click={() => newFile()}>New file</SecondaryButton>
  <FileInput label="Import from file" onLoad={importFile} />

  <p>Load a saved file:</p>
  <ul>
    {#each fileList as file (file)}
      {#if file == $currentFile}
        <li>{file}</li>
      {:else}
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li><a href="#" on:click={() => openFile(file)}>{file}</a></li>
      {/if}
    {/each}
  </ul>
</Modal>
