<script lang="ts">
  import { Radio } from "govuk-svelte";
  import { pairs } from "$lib";

  export let label: string;
  export let value: string;
</script>

<Radio legend={label} choices={pairs(["Yes", "No"])} bind:value />
