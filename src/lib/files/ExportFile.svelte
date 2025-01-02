<script lang="ts" generics="StateType">
  import downloadUrl from "$lib/assets/images/download.svg?url";
  import { ButtonGroup, SecondaryButton } from "govuk-svelte";
  import { type Writable } from "svelte/store";
  import { downloadGeneratedFile } from "./index";

  export let currentFile: Writable<string>;
  // eslint-disable-next-line no-undef
  export let state: Writable<StateType>;

  function exportFile() {
    downloadGeneratedFile($currentFile + ".json", JSON.stringify($state));
  }
</script>

<p><b>You are editing: {$currentFile}</b></p>
<p>Export the file to send to someone else or use on another computer.</p>

<ButtonGroup>
  <SecondaryButton on:click={exportFile}>
    <img src={downloadUrl} alt="" />
    Export .json
  </SecondaryButton>
  <slot />
</ButtonGroup>

<style>
  img {
    vertical-align: middle;
  }
</style>
