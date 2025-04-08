<script lang="ts">
  import { FormElement } from "govuk-svelte";
  import { v4 as uuidv4 } from "uuid";

  export let label: string;
  export let value: string;

  let id = uuidv4();
</script>

<FormElement {label} {id}>
  <div class="govuk-hint">NB. This doesn't import from the excel version</div>
  <input type="date" bind:value />
</FormElement>
