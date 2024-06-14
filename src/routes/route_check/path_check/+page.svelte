<script lang="ts">
  import { Radio, WarningText } from "govuk-svelte";
  import Progress from "./Progress.svelte";
  import { state } from "../data";
  import { ManualSectionModal } from "$lib";
  import {contents} from "../manual/content";
</script>

<ManualSectionModal
  title={"Path Check Manual"}
  section={contents[8]}
  link={"/route_check/manual"}
/>

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
