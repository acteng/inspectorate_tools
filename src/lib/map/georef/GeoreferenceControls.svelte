<script lang="ts">
  import {
    SecondaryButton,
    ButtonGroup,
    DefaultButton,
    FormElement,
    WarningButton,
  } from "govuk-svelte";
  import {
    topLeft,
    bottomRight,
    settingImage,
    imgSrc,
    opacity,
  } from "./stores";

  let fileInput: HTMLInputElement;

  async function fileLoaded(_: Event) {
    deleteImage();
    let buffer = await fileInput.files![0].arrayBuffer();
    let blob = new Blob([new Uint8Array(buffer)]);
    $imgSrc = URL.createObjectURL(blob);
    $topLeft = { lng: 0, lat: 0 };
    $bottomRight = { lng: 0, lat: 0 };

    let filename = fileInput.files![0].name.toLowerCase();
    if (
      ![".gif", ".jpg", ".jpeg", ".png"].some((ext) => filename.endsWith(ext))
    ) {
      window.alert(
        "You can only georeference image files (GIF, JPEG, PNG). If you don't see anything on the map, try a different file type.",
      );
    }
  }

  function deleteImage() {
    $imgSrc = null;
    $opacity = 100;
  }

  function onKeyDown(e: KeyboardEvent) {
    if ($settingImage && e.key == "Escape") {
      e.stopPropagation();
      $settingImage = false;
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

{#if $settingImage}
  <div style="border: 1px solid black; padding: 4px;">
    <h2>Georeference an image</h2>
    <ButtonGroup>
      <DefaultButton on:click={() => ($settingImage = false)}>
        Save
      </DefaultButton>
      <WarningButton on:click={deleteImage} disabled={!$imgSrc}>
        Delete
      </WarningButton>
    </ButtonGroup>

    <FormElement label="Load an image" id="load-image">
      <input
        bind:this={fileInput}
        on:change={fileLoaded}
        class="govuk-file-upload"
        id="load-image"
        type="file"
      />
    </FormElement>

    {#if $imgSrc}
      <div>
        <label>
          <input type="range" min="0" max="100" bind:value={$opacity} />
          Opacity: {$opacity}%
        </label>
      </div>
    {/if}

    <p>
      Note this image isn't saved as part of this scheme. When you close this
      page, it'll be lost.
    </p>
  </div>
{:else}
  <SecondaryButton on:click={() => ($settingImage = true)}>
    Georeference an image
  </SecondaryButton>
{/if}
