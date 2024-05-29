<script lang="ts">
  import { Radio, WarningText } from "govuk-svelte";
  import Progress from "./Progress.svelte";
  import { state } from "../data";
</script>

<div class="govuk-width-container">
  <Radio
    legend="Are horse riders expected on this route?"
    choices={[
      ["", "Unanswered"],
      ["Yes", "Yes"],
      ["No", "No"],
    ]}
    bind:value={$state.horseRiders}
  />

  <hr />

  {#if $state.horseRiders == ""}
    <WarningText>
      You must answer the question above to start the Path Check
    </WarningText>
  {:else}
    <Progress currentIdx={-1} />
  {/if}
</div>
