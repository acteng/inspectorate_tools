<script lang="ts">
  import { pairs } from "$lib";
  import { Radio } from "govuk-svelte";

  export let label: string;
  export let value: string;
  export let inlineSmall = false;
</script>

<Radio {label} choices={pairs(["Yes", "No"])} bind:value {inlineSmall} />
