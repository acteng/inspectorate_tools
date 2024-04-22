<script lang="ts">
  import {
    currentFile,
    state,
    emptyState,
    newFilename,
    getFileList,
    loadFile,
  } from "./data";
  import { SecondaryButton, TextArea, CollapsibleCard } from "govuk-svelte";
  import FileInput from "./FileInput.svelte";

  export let prefix: string;

  let fileList = getFileList();

  function deleteFile(file: string) {
    if ($currentFile == file) {
      window.alert("TODO: Can't delete current file yet");
      return;
    }

    // TODO Use a full Modal
    if (window.confirm(`Really delete file ${file}? You can't undo this.`)) {
      window.localStorage.removeItem(`${prefix}${file}`);
      fileList = getFileList();
    }
  }

  function renameFile(file: string) {
    let newName = window.prompt(`Rename file ${file} to what?`, file);
    if (newName) {
      let contents = window.localStorage.getItem(`${prefix}${file}`)!;
      window.localStorage.setItem(`${prefix}${newName}`, contents);
      window.localStorage.removeItem(`${prefix}${file}`);
      if ($currentFile == file) {
        $currentFile = newName;
      }
      fileList = getFileList();
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
  }

  function setFile(file: string) {
    try {
      let x = loadFile(file);
      $currentFile = file;
      $state = x;
    } catch (error) {
      window.alert(`Couldn't load ${file}: ${error}`);
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

  function importFile(filename: string, contents: string) {
    // TODO Handle duplicate names
    let key = filename.endsWith(".json")
      ? filename.slice(0, -".json".length)
      : filename;
    // TODO Validate upfront?
    window.localStorage.setItem(`${prefix}${key}`, contents);
    // Do this immediately, so we can refresh the fileList
    fileList = getFileList();
    setFile(key);
  }
</script>

<CollapsibleCard label="Files">
  <SecondaryButton on:click={() => newFile()}>New file</SecondaryButton>
  <SecondaryButton on:click={() => exportFile()}>
    Export this file
  </SecondaryButton>
  <FileInput label="Load from file" onLoad={importFile} />

  <p>Load a saved file:</p>
  <ul>
    {#each fileList as file (file)}
      <li>
        <span style="display: flex; justify-content: space-between;">
          <SecondaryButton
            on:click={() => setFile(file)}
            disabled={$currentFile == file}
          >
            {file}
          </SecondaryButton>
          <SecondaryButton on:click={() => renameFile(file)}>
            Rename
          </SecondaryButton>
          <SecondaryButton on:click={() => deleteFile(file)}>
            Delete
          </SecondaryButton>
        </span>
      </li>
    {/each}
  </ul>

  <hr />

  <p>
    All files are auto-saved in your browser's local storage. You can close your
    browser and resume later.
  </p>

  <CollapsibleCard label="Debug">
    <TextArea
      label="JSON"
      value={JSON.stringify($state, null, "  ")}
      rows={10}
    />
  </CollapsibleCard>
</CollapsibleCard>
