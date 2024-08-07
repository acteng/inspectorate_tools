<script lang="ts" generics="StateType">
  import editUrl from "$lib/assets/images/edit.svg?url";
  import deleteUrl from "$lib/assets/images/delete.svg?url";
  import downloadUrl from "$lib/assets/images/download.svg?url";
  import { base } from "$app/paths";
  import { LocalStorageFiles } from "./index";
  import {
    ButtonGroup,
    FileInput,
    WarningButton,
    SecondaryButton,
    Radio,
    AlphaBanner,
    StartButton,
  } from "govuk-svelte";
  import { pairs, stripSuffix, ServiceHeader } from "$lib";
  import { type Writable } from "svelte/store";
  import ImportXlsx from "./ImportXlsx.svelte";
  import { goto } from "$app/navigation";

  // eslint-disable-next-line no-undef
  export let files: LocalStorageFiles<StateType>;
  export let currentFile: Writable<string>;
  // eslint-disable-next-line no-undef
  export let state: Writable<StateType>;
  export let service: string;

  // If provided, adds an option to import from an XLSX file. Runs the callback
  // with the ArrayBuffer to produce State. This should throw exceptions if
  // there's a problem.
  export let xlsxImporter:
    | ((buffer: ArrayBuffer) => Promise<StateType>)
    | null = null;

  let chosenFile = $currentFile;
  let fileList = files.getFileList();

  function loadChosenFile() {
    if (!chosenFile) {
      return;
    }
    openFile(chosenFile);
  }

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
      chosenFile = $currentFile;
      fileList = files.getFileList();
    }
  }

  function deleteFile() {
    // TODO Use a full Modal
    if (
      !window.confirm(
        `Really delete file ${$currentFile}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`,
      )
    ) {
      return;
    }

    let key = files.key($currentFile);
    downloadGeneratedFile(
      `${$currentFile}.json`,
      window.localStorage.getItem(key)!,
    );
    window.localStorage.removeItem(key);
    $currentFile = "";
    chosenFile = "";
    $state = files.emptyState();
    fileList = files.getFileList();

    // This is normally done in the LocalStorageFiles subscription, but it
    // ignores the case when this value is empty. Since the last opened
    // file is gone, we do need to clear this.
    window.localStorage.setItem(files.key("last-opened-file"), "");
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

  function newFile() {
    // TODO Handle overwriting
    let name = window.prompt("What do you want to name your new file?");
    if (!name) {
      return;
    }
    $currentFile = name;
    chosenFile = name;
    $state = files.emptyState();
    fileList = files.saveAndGetFileList($currentFile, $state);
  }

  function importJsonFile(rawFilename: string, contents: string) {
    // TODO Handle duplicate names
    let file = stripSuffix(rawFilename, ".json");

    try {
      let value = JSON.parse(contents);
      files.validate(value);
      fileList = files.saveAndGetFileList(file, value);
      openFile(file);
    } catch (err) {
      window.alert(`Couldn't load ${file}: ${err}`);
    }
  }

  function onXlsxImported(
    e: CustomEvent<{ filename: string; data: StateType }>,
  ) {
    let { filename, data } = e.detail;
    fileList = files.saveAndGetFileList(filename, data);
    openFile(filename);
  }

  function openFile(file: string) {
    try {
      let x = files.loadFile(file);
      chosenFile = file;
      $currentFile = file;
      $state = x;
    } catch (error) {
      window.alert(`Couldn't load ${file}: ${error}`);
    }
  }
</script>

<ServiceHeader {service} />

<div class="govuk-width-container">
  <AlphaBanner />

  <div class="govuk-heading-l" style="margin-top: 30px">Manage my schemes</div>

  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <slot name="description" />

      <p>
        All files are auto-saved in your browser's local storage. You can close
        your browser and resume later. You can export the file to your computer
        to share with someone else, and import from a file below.
      </p>

      {#if $currentFile}
        <p>
          <b>You are editing:</b>
          {$currentFile}
        </p>
        <StartButton on:click={() => goto(`${base}/${files.prefix}overview`)} />

        <ButtonGroup>
          <SecondaryButton on:click={exportFile}>
            <img src={downloadUrl} alt="Export .json" />
            Export .json
          </SecondaryButton>

          <slot name="export" />

          <SecondaryButton on:click={renameFile}>
            <img src={editUrl} alt="Rename file" />
            Rename file
          </SecondaryButton>
          <WarningButton on:click={deleteFile}>
            <img src={deleteUrl} alt="Delete file" />
            Delete file
          </WarningButton>
        </ButtonGroup>
      {/if}

      <h2>Create or import a file</h2>
      <SecondaryButton on:click={newFile}>New blank file</SecondaryButton>
      <hr />
      <FileInput label="Import from a .json file" onLoad={importJsonFile} />

      {#if xlsxImporter != null}
        <hr />
        <ImportXlsx {xlsxImporter} on:imported={onXlsxImported} />
      {/if}
    </div>
    <div class="govuk-grid-column-one-third">
      <h2 class="green-bar">Manage existing files</h2>

      {#if fileList.length > 0}
        <Radio
          label=""
          choices={pairs(fileList)}
          bind:value={chosenFile}
          on:change={loadChosenFile}
        />
      {:else}
        <p>No saved files</p>
      {/if}
    </div>
  </div>
</div>

<style>
  .green-bar {
    border-top: 0.3rem solid #007161;
    padding-top: 30px;
  }

  img {
    vertical-align: middle;
  }
</style>
