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

  export let prefix: string;

  let fileList = getFileList();

  function deleteFile(file: string) {
    if ($currentFile == file) {
      window.alert("TODO: Can't delete current file yet");
      return;
    }

    // TODO Use a full Modal
    if (
      window.confirm(
        `Really delete file ${file.slice(prefix.length)}? You can't undo this.`,
      )
    ) {
      window.localStorage.removeItem(file);
      fileList = getFileList();
    }
  }

  function renameFile(file: string) {
    if ($currentFile == file) {
      window.alert("TODO: Can't rename current file yet");
      return;
    }

    let newName = window.prompt(
      `Rename file ${file.slice(prefix.length)} to what?`,
      file.slice(prefix.length),
    );
    if (newName) {
      let contents = window.localStorage.getItem(file)!;
      window.localStorage.setItem(`${prefix}${newName}`, contents);
      window.localStorage.removeItem(file);
      fileList = getFileList();
    }
  }

  function newFile() {
    $currentFile = newFilename();
    $state = emptyState();
    // Do this immediately, so we can refresh the fileList
    window.localStorage.setItem($currentFile, JSON.stringify($state));
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
</script>

<CollapsibleCard label="Files" open>
  <p>TODO: Export file, make a copy, load from file...</p>

  <SecondaryButton on:click={() => newFile()}>New file</SecondaryButton>

  <p>Load a saved file:</p>
  <ul class="govuk-list">
    {#each fileList as file (file)}
      <li>
        <span style="display: flex; justify-content: space-between;">
          <SecondaryButton
            on:click={() => setFile(file)}
            disabled={$currentFile == file}
          >
            {file.slice(prefix.length)}
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
