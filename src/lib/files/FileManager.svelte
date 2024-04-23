<script lang="ts">
  import { LocalStorageFiles } from "./index";
  import { base } from "$app/paths";
  import {
    FileInput,
    WarningButton,
    ButtonGroup,
    SecondaryButton,
    TextArea,
    CollapsibleCard,
  } from "govuk-svelte";
  import { Modal } from "$lib";
  import { type Writable } from "svelte/store";

  type StateType = $$Generic;

  export let files: LocalStorageFiles<StateType>;
  export let currentFile: Writable<string>;
  export let state: Writable<StateType>;

  let fileList = files.getFileList();
  let open = false;

  function renameFile() {
    // TODO Handle overwriting
    let newName = window.prompt(
      `Rename file ${$currentFile} to what?`,
      $currentFile,
    );
    if (newName) {
      let oldKey = files.key($currentFile);
      let contents = window.localStorage.getItem(oldKey)!;
      window.localStorage.setItem(files.key(newName), contents);
      window.localStorage.removeItem(oldKey);
      $currentFile = newName;
      fileList = files.getFileList();
    }
  }

  function exportFile() {
    downloadGeneratedFile($currentFile + ".json", JSON.stringify($state));
  }

  function downloadGeneratedFile(filename: string, textInput: string) {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(textInput),
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
      window.localStorage.removeItem(files.key($currentFile));
      newFile();
    }
  }

  function newFile() {
    $currentFile = files.newFilename();
    $state = files.emptyState();
    // Do this immediately, so we can refresh the fileList
    window.localStorage.setItem(
      files.key($currentFile),
      JSON.stringify($state),
    );
    fileList = files.getFileList();
    // TODO Losing the Modal is a bit sudden
    window.location.replace(`${base}/${files.prefix}`);
  }

  function importFile(rawFilename: string, contents: string) {
    // TODO Handle duplicate names
    let file = rawFilename.endsWith(".json")
      ? rawFilename.slice(0, -".json".length)
      : rawFilename;
    // TODO Validate contents upfront?
    // Do this immediately, so we can refresh the fileList
    window.localStorage.setItem(files.key(file), contents);
    fileList = files.getFileList();
    openFile(file);
  }

  function openFile(file: string) {
    try {
      let x = files.loadFile(file);
      $currentFile = file;
      $state = x;
      window.location.replace(`${base}/${files.prefix}`);
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
