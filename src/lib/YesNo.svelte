<script lang="ts">
  import { Select } from "govuk-svelte";
  import { pairs } from "$lib";

  export let label: string;
  export let value: string;
</script>

<Select {label} emptyOption choices={pairs(["Yes", "No"])} bind:value />
