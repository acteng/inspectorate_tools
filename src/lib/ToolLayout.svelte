<script lang="ts" generics="StateType">
  import { type Writable } from "svelte/store";
  import { base } from "$app/paths";
  import { NavHeader, NavFooter, getTitle, canonicalizePath } from "$lib/nav";
  import { page } from "$app/stores";
  import folderUrl from "$lib/assets/images/folder.svg?url";
  import { goto } from "$app/navigation";
  import { LocalStorageFiles } from "./files";
  import { AlphaBanner } from "govuk-svelte";
  import { ServiceHeader } from "./";

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

<ServiceHeader {service} />

<div class="govuk-width-container">
  <AlphaBanner />

  <div style="margin-bottom: 30px">
    <img src={folderUrl} alt="" style="vertical-align: middle;" />
    <a href="{base}/{tool}">Manage my schemes</a>
    <span class="govuk-body" style="margin-left: 8px;">
      You are editing: {$currentFile}
    </span>
  </div>

  <NavHeader {routeCheckType} />
</div>

<div class="govuk-width-container">
  <h1>{getTitle($page.url.pathname)}</h1>
</div>

<slot />

<NavFooter {routeCheckType} />
