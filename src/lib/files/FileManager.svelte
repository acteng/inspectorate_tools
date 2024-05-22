<script lang="ts" generics="StateType">
  import { LocalStorageFiles } from "./index";
  import ClickableCard from "../clickable_cards/ClickableCard.svelte";
  import {
    FileInput,
    WarningButton,
    ButtonGroup,
    SecondaryButton,
  } from "govuk-svelte";
  import { stripSuffix } from "$lib";
  import { type Writable } from "svelte/store";
  import ImportXlsx from "./ImportXlsx.svelte";

  // eslint-disable-next-line no-undef
  export let files: LocalStorageFiles<StateType>;
  export let currentFile: Writable<string>;
  // eslint-disable-next-line no-undef
  export let state: Writable<StateType>;

  // If provided, adds an option to import from an XLSX file. Runs the callback
  // with the ArrayBuffer to produce State. This should throw exceptions if
  // there's a problem.
  export let xlsxImporter:
    | ((buffer: ArrayBuffer) => Promise<StateType>)
    | null = null;

  let fileList = files.getFileList();

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

  async function deleteFile() {
    // TODO Use a full Modal
    if (
      window.confirm(`Really delete file ${$currentFile}? You can't undo this.`)
    ) {
      window.localStorage.removeItem(files.key($currentFile));
      await newFile();
    }
  }

  async function newFile() {
    $currentFile = files.newFilename();
    $state = files.emptyState();
    fileList = files.saveAndGetFileList($currentFile, $state);
  }

  async function importJsonFile(rawFilename: string, contents: string) {
    // TODO Handle duplicate names
    let file = stripSuffix(rawFilename, ".json");

    try {
      let value = JSON.parse(contents);
      files.validate(value);
      fileList = files.saveAndGetFileList(file, value);
      await openFile(file);
    } catch (err) {
      window.alert(`Couldn't load ${file}: ${err}`);
    }
  }

  async function onXlsxImported(
    e: CustomEvent<{ filename: string; data: StateType }>,
  ) {
    let { filename, data } = e.detail;
    fileList = files.saveAndGetFileList(filename, data);
    await openFile(filename);
  }

  async function openFile(file: string) {
    try {
      let x = files.loadFile(file);
      $currentFile = file;
      $state = x;
    } catch (error) {
      window.alert(`Couldn't load ${file}: ${error}`);
    }
  }
</script>

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

<hr />

<SecondaryButton on:click={newFile}>New file</SecondaryButton>
<FileInput label="Import from a .json file" onLoad={importJsonFile} />

{#if xlsxImporter != null}
  <ImportXlsx {xlsxImporter} on:imported={onXlsxImported} />
{/if}

<p>Load a saved file:</p>

{#each fileList as fileName}
  <ClickableCard
    cardDetails={{
      name: `File name: ${fileName}`,
      additionalText: fileName === $currentFile ? "Already selected" : "",
      onClick: () => {
        openFile(fileName);
      },
      disabled: fileName === $currentFile,
    }}
  />
{/each}
