<script lang="ts">
  import { Radio, WarningText } from "govuk-svelte";
  import { state } from "../data";
  import Progress from "./Progress.svelte";
</script>

<div class="govuk-width-container">
  <Radio
    label="Are horse riders expected on this route?"
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
