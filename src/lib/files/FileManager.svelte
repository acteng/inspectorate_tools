<script lang="ts" generics="StateType">
  import editUrl from "$lib/assets/images/edit.svg?url";
  import deleteUrl from "$lib/assets/images/delete.svg?url";
  import downloadUrl from "$lib/assets/images/download.svg?url";
  import { base } from "$app/paths";
  import { LocalStorageFiles } from "./index";
  import {
    FileInput,
    WarningButton,
    ButtonGroup,
    SecondaryButton,
  } from "govuk-svelte";
  import { stripSuffix, ClickableCard } from "$lib";
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

  async function deleteFile(filename: string) {
    // TODO Use a full Modal
    if (
      window.confirm(
        `Really delete file ${filename}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`,
      )
    ) {
      let key = files.key(filename);
      downloadGeneratedFile(
        `${filename}.json`,
        window.localStorage.getItem(key)!,
      );
      window.localStorage.removeItem(key);
      if (filename == $currentFile) {
        await newFile();
      } else {
        fileList = files.saveAndGetFileList($currentFile, $state);
      }
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

<div class="govuk-width-container">
  <a href="{base}/{files.prefix}" class="govuk-back-link">Back to overview</a>

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
    <SecondaryButton on:click={renameFile}>
      <img src={editUrl} alt="Rename this file" />
      Rename this file
    </SecondaryButton>
    <SecondaryButton on:click={exportFile}>
      <img src={downloadUrl} alt="Download this file" />
      Download this file
    </SecondaryButton>
    <WarningButton on:click={() => deleteFile($currentFile)}>
      <img src={deleteUrl} alt="Delete this file" />
      Delete this file
    </WarningButton>
  </ButtonGroup>

  <hr />

  <div class="govuk-grid-row">
    <div class="govuk-grid-column-one-half">
      <h2>Create or import a file</h2>
      <SecondaryButton on:click={newFile}>New blank file</SecondaryButton>
      <hr />
      <FileInput label="Import from a .json file" onLoad={importJsonFile} />

      {#if xlsxImporter != null}
        <hr />
        <ImportXlsx {xlsxImporter} on:imported={onXlsxImported} />
      {/if}
    </div>
    <div class="govuk-grid-column-one-half">
      <h2>Load a saved file</h2>

      {#each fileList as filename}
        <div style="display: flex; justify-content: space-between">
          <ClickableCard
            name={`File name: ${filename}`}
            on:click={() => openFile(filename)}
            disabled={filename === $currentFile}
          >
            {filename == $currentFile
              ? "Currently open"
              : files.describeFile(filename)}
          </ClickableCard>
          <WarningButton on:click={() => deleteFile(filename)}>
            Delete
          </WarningButton>
        </div>
      {/each}
    </div>
  </div>
  <a href="{base}/{files.prefix}" class="govuk-back-link">Back to overview</a>
</div>

<style>
  img {
    vertical-align: middle;
  }
</style>
