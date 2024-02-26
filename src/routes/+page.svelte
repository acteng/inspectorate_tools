<script lang="ts">
  import { SecondaryButton } from "govuk-svelte";

  let counter = 0;
</script>

<p class="govuk-prose">Counter is {counter}</p>
<SecondaryButton
  on:click={() => {
    counter++;
  }}
>
  Increment
</SecondaryButton>
