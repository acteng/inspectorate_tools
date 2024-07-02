<script lang="ts">
  import { SecondaryButton } from "govuk-svelte";
  import Section from "./Section.svelte";
  import Modal from "../Modal.svelte";
  import { type ManualSection } from "./data";

  export let title: string;
  export let section: ManualSection;
  export let link: string = "";
  let displayManual = false;
</script>

<SecondaryButton
  on:click={() => {
    displayManual = true;
  }}
>
  Show Manual
</SecondaryButton>

<Modal {title} open={displayManual}>
  <Section {section} {link} />
</Modal>
