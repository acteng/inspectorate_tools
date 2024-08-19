<script lang="ts" generics="StateType">
  import { base } from "$app/paths";
  import { LocalStorageFiles, downloadGeneratedFile } from "./index";
  import {
    FileInput,
    WarningButton,
    SecondaryButton,
    AlphaBanner,
  } from "govuk-svelte";
  import { stripSuffix, ServiceHeader } from "$lib";
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

  let fileList = files.getFileList();

  function renameFile(filename: string) {
    // TODO Handle overwriting
    let newName = window.prompt(`Rename file ${filename} to what?`, filename);
    if (newName) {
      let oldKey = files.key(filename);
      let contents = window.localStorage.getItem(oldKey)!;
      window.localStorage.setItem(files.key(newName), contents);
      window.localStorage.removeItem(oldKey);
      fileList = files.getFileList();
      if ($currentFile == filename) {
        $currentFile = newName;
      }
    }
  }

  function deleteFile(filename: string) {
    // TODO Use a full Modal
    if (
      !window.confirm(
        `Really delete file ${filename}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`,
      )
    ) {
      return;
    }

    let key = files.key(filename);
    downloadGeneratedFile(
      `${filename}.json`,
      window.localStorage.getItem(key)!,
    );
    window.localStorage.removeItem(key);

    if ($currentFile == filename) {
      $currentFile = "";
      $state = files.emptyState();
      // This is normally done in the LocalStorageFiles subscription, but it
      // ignores the case when this value is empty. Since the last opened
      // file is gone, we do need to clear this.
      window.localStorage.setItem(files.key("last-opened-file"), "");
    }
    fileList = files.getFileList();
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
    goto(`${base}/${files.prefix}overview`);
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

  function openFile(file: string): boolean {
    try {
      let x = files.loadFile(file);
      $currentFile = file;
      $state = x;
      goto(`${base}/${files.prefix}overview`);
    } catch (error) {
      window.alert(`Couldn't load ${file}: ${error}`);
    }

    // So this can be a callback on an <a>
    return false;
  }
</script>

<ServiceHeader {service} />

<div class="govuk-width-container">
  <AlphaBanner />

  <h1 style="margin-top: 30px">Manage my schemes</h1>

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
          <a href={`${base}/${files.prefix}overview`}>{$currentFile}</a>
        </p>
      {/if}

      {#if fileList.length > 0}
        <h2>Manage existing files</h2>
        <table>
          <thead>
            <tr>
              <th>File name</th>
              <th>Scheme name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {#each fileList as filename}
              <tr>
                <td>
                  <!-- svelte-ignore a11y-invalid-attribute -->
                  <a
                    href="#"
                    on:click|preventDefault={() => openFile(filename)}
                  >
                    {filename}
                  </a>
                </td>
                <td>{files.describeFile(filename)}</td>
                <td>
                  <div class="govuk-button-group" style="flex-wrap: nowrap">
                    <SecondaryButton on:click={() => renameFile(filename)}>
                      Rename
                    </SecondaryButton>
                    <WarningButton on:click={() => deleteFile(filename)}>
                      Delete
                    </WarningButton>
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      {:else}
        <p>No saved files</p>
      {/if}
    </div>

    <div class="govuk-grid-column-one-third">
      <h2 class="green-bar">Create or import a file</h2>
      <SecondaryButton on:click={newFile}>
        New blank scheme file
      </SecondaryButton>
      <hr />
      <FileInput label="Import from a .json file" onLoad={importJsonFile} />

      {#if xlsxImporter != null}
        <hr />
        <ImportXlsx {xlsxImporter} on:imported={onXlsxImported} />
      {/if}
    </div>
  </div>
</div>

<style>
  .green-bar {
    border-top: 0.3rem solid #007161;
    padding-top: 30px;
  }
</style>
