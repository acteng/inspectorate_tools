<script lang="ts">
  import { pairs, YesNo } from "$lib";
  import { Radio, TextArea, WarningText } from "govuk-svelte";
  import { state } from "../data";
  import Confirmation from "./Confirmation.svelte";
  import MajorRoutes from "./MajorRoutes.svelte";
  import MinorRoutes from "./MinorRoutes.svelte";
</script>

<div class="govuk-width-container">
  <YesNo
    label="Is the scheme expected to reduce traffic?"
    bind:value={$state.trafficMitigationCheck.q1}
  />

  {#if $state.trafficMitigationCheck.q1 == "No"}
    <WarningText>Stop. Redesign scheme to reduce traffic.</WarningText>
  {:else if $state.trafficMitigationCheck.q1 == "Yes"}
    <Radio
      label="Is it expected to reduce traffic both within the scheme and elsewhere?"
      choices={[
        [
          "Yes",
          "Yes, traffic is expected to reduce due to modal shift and trip reduction",
        ],
        ["No", "No, some traffic is expected to be displaced to other roads"],
      ]}
      bind:value={$state.trafficMitigationCheck.q2}
    />

    {#if $state.trafficMitigationCheck.q2 == "Yes"}
      <Confirmation />
    {:else if $state.trafficMitigationCheck.q2 == "No"}
      <Radio
        label="Where will displaced traffic go?"
        choices={pairs([
          "Major routes (e.g. scheme eliminates a rat run)",
          "Minor streets (e.g. residential)",
        ])}
        bind:value={$state.trafficMitigationCheck.q3}
      />

      {#if $state.trafficMitigationCheck.q3 == "Major routes (e.g. scheme eliminates a rat run)"}
        <MajorRoutes />
      {:else if $state.trafficMitigationCheck.q3 == "Minor streets (e.g. residential)"}
        <MinorRoutes />
      {/if}
    {/if}
  {/if}

  <hr />

  <TextArea
    label="Results & Commentary"
    bind:value={$state.trafficMitigationCheck.notes}
  />
</div>
