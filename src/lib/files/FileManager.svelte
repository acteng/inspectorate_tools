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

  function renameChosenFile() {
    if (!chosenFile) {
      return;
    }
    let isCurrent = chosenFile == $currentFile;
    // TODO Handle overwriting
    let newName = window.prompt(
      `Rename file ${chosenFile} to what?`,
      chosenFile,
    );
    if (newName) {
      let oldKey = files.key(chosenFile);
      let contents = window.localStorage.getItem(oldKey)!;
      window.localStorage.setItem(files.key(newName), contents);
      window.localStorage.removeItem(oldKey);
      if (isCurrent) {
        $currentFile = newName;
      }
      chosenFile = newName;
      fileList = files.getFileList();
    }
  }

  function deleteChosenFile() {
    if (!chosenFile) {
      return;
    }
    // TODO Use a full Modal
    if (
      !window.confirm(
        `Really delete file ${chosenFile}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`,
      )
    ) {
      return;
    }

    let key = files.key(chosenFile);
    downloadGeneratedFile(
      `${chosenFile}.json`,
      window.localStorage.getItem(key)!,
    );
    window.localStorage.removeItem(key);
    if (chosenFile == $currentFile) {
      $currentFile = "";
      $state = files.emptyState();
    }
    chosenFile = "";
    fileList = files.getFileList();
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

  <div class="govuk-heading-l">Manage my schemes</div>

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
        <SecondaryButton on:click={loadChosenFile} disabled={chosenFile == ""}>
          Load saved file
        </SecondaryButton>
        <SecondaryButton
          on:click={renameChosenFile}
          disabled={chosenFile == ""}
        >
          <img src={editUrl} alt="Rename saved file" />
          Rename saved file
        </SecondaryButton>
        <WarningButton on:click={deleteChosenFile} disabled={chosenFile == ""}>
          <img src={deleteUrl} alt="Delete saved file" />
          Delete saved file
        </WarningButton>

        <Radio
          label="Manage existing file"
          choices={pairs(fileList)}
          bind:value={chosenFile}
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
