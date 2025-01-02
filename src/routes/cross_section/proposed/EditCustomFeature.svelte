<script lang="ts">
  import { Modal } from "$lib";
  import {
    DecimalInput,
    DefaultButton,
    ErrorMessage,
    SecondaryButton,
    TextInput,
  } from "govuk-svelte";
  import { createEventDispatcher } from "svelte";
  import { state, streetFeatureTypes } from "../data";

  export let initialName: string;
  export let initialWidth: number;

  let dispatch = createEventDispatcher<{
    confirm: { name: string; width: number };
    cancel: void;
  }>();

  let name = initialName;
  let width = initialWidth;

  $: errors = validate(name, width);

  // TODO Group error messages by each box. Rethink validations per input
  // element, and have a way to expose if the value is valid or not.
  function validate(name: string, width: number): string {
    if (name == "") {
      return "Name must be specified";
    }
    if (
      name != initialName &&
      Object.values($state.proposed.customFeatures).some(
        (obj) => obj.name == name,
      )
    ) {
      return "That name is already used by another custom feature";
    }
    // @ts-expect-error TS gets confused about mutability
    if ((streetFeatureTypes as string[]).includes(name)) {
      return "That name is the same as one of the built-in features";
    }

    if (isNaN(width)) {
      return "Enter a valid width";
    }
    if (width <= 0) {
      return "Enter a positive width";
    }

    return "";
  }
</script>

<Modal
  title="Editing custom street feature"
  open
  displayEscapeButton={false}
  canCloseByClickingBackground={false}
>
  <TextInput label="Name" bind:value={name} />
  <DecimalInput
    label="Minimum width (m)"
    width={4}
    min={0}
    bind:value={width}
  />

  <ErrorMessage errorMessage={errors} />

  <DefaultButton
    disabled={errors != ""}
    on:click={() => dispatch("confirm", { name, width })}
  >
    Confirm
  </DefaultButton>
  <SecondaryButton on:click={() => dispatch("cancel")}>Cancel</SecondaryButton>
</Modal>
