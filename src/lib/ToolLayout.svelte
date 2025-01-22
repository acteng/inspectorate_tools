<script lang="ts" generics="StateType">
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import folderUrl from "$lib/assets/images/folder.svg?url";
  import { canonicalizePath, getTitle, NavFooter, NavHeader } from "$lib/nav";
  import { AlphaBanner } from "govuk-svelte";
  import { type Writable } from "svelte/store";
  import { ServiceHeader } from "./";
  import { LocalStorageFiles } from "./files";

  export let state: Writable<StateType>;
  export let currentFile: Writable<string>;
  export let files: LocalStorageFiles<StateType>;
  export let tool: string;
  export let service: string;
  export let routeCheckType: "street" | "path" | "";

  $: if (
    $currentFile == "" &&
    canonicalizePath($page.url.pathname) != `/${tool}`
  ) {
    console.log("On a content page without any file loaded; redirecting");
    goto(`${base}/${tool}`);
  }

  function storageChange(ev: StorageEvent) {
    let key = files.key($currentFile);
    if (key == ev.key) {
      // If it's null, then the file was deleted in another tab
      if (ev.newValue) {
        try {
          console.log(`${key} changed in another tab; applying the data here`);
          $state = JSON.parse(ev.newValue);
        } catch (err) {
          console.error(
            `${key} changed in another tab, but the new value is broken: ${err}`,
          );
        }
      } else {
        window.alert(
          `You deleted ${$currentFile} from another tab. If you continue editing it here, it'll be saved again.`,
        );
      }
    }
  }
</script>

<svelte:window on:storage={storageChange} />

<div class="tool-layout">
  <div class="govuk-width-container">
    <div class="do-not-print">
      <ServiceHeader {service} />

      <AlphaBanner />

      <div style="margin-bottom: 30px">
        <img src={folderUrl} alt="" style="vertical-align: middle;" />
        <a href="{base}/{tool}">Manage my files</a>
        <span class="govuk-body" style="margin-left: 8px;">
          You are editing: {$currentFile}
        </span>
      </div>

      <NavHeader {routeCheckType} />
    </div>
  </div>

  <div class="govuk-width-container do-not-print">
    <h1>{getTitle($page.url.pathname)}</h1>
  </div>

  <slot />

  <div class="do-not-print">
    <NavFooter {routeCheckType} />
  </div>
</div>
