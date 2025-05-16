<script lang="ts">
  import { FormElement } from "govuk-svelte";
  import { v4 as uuidv4 } from "uuid";

  export let label: string;
  export let value: string;
  export let showImportWarning: boolean = false;

  let id = uuidv4();
</script>

<FormElement {label} {id}>
  {#if showImportWarning}
    <div class="govuk-warning-text">
      <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
      <strong class="govuk-warning-text__text">
        <span class="govuk-visually-hidden">Warning</span>
        NB. This date isn't imported from the excel version
      </strong>
    </div>
  {/if}
  <input type="date" bind:value />
</FormElement>
