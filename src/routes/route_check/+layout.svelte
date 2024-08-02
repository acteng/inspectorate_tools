<script lang="ts">
  import { state, currentFile, files } from "./data";
  import { base } from "$app/paths";
  import { NavHeader, NavFooter, getTitle, canonicalizePath } from "$lib/nav";
  import { page } from "$app/stores";
  import folderUrl from "$lib/assets/images/folder.svg?url";
  import { goto } from "$app/navigation";

  $: if (
    $currentFile == "" &&
    canonicalizePath($page.url.pathname) != "/route_check"
  ) {
    console.log("On a content page without any file loaded; redirecting");
    goto(`${base}/route_check`);
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

<div>
  <img src={folderUrl} alt="Manage files" style="vertical-align: middle;" />
  <a href="{base}/route_check">Manage files</a>
  <span class="govuk-body" style="margin-left: 8px;">
    Editing file <u>{$currentFile}</u>
  </span>
</div>

<NavHeader routeCheckType={$state.summary.checkType} />

<hr />

<h1 style="text-align: center">{getTitle($page.url.pathname)}</h1>

<slot />

<hr />

<NavFooter routeCheckType={$state.summary.checkType} />
