<script lang="ts">
  import MajorRoutes from "./MajorRoutes.svelte";
  import MinorRoutes from "./MinorRoutes.svelte";
  import Confirmation from "./Confirmation.svelte";
  import { TextArea, Select, WarningText } from "govuk-svelte";
  import { state } from "../data";
  import { YesNo, Breadcrumbs, pairs } from "$lib";

  let q1 = "";
  let q2 = "";
  let q3 = "";
</script>

<Breadcrumbs
  links={[
    ["Tools", "/"],
    ["Area check tool", "/area_check"],
  ]}
  current="Traffic Mitigation Check"
/>

<YesNo label="Is the scheme expected to reduce traffic?" bind:value={q1} />

{#if q1 == "No"}
  <WarningText>Stop. Redesign scheme to reduce traffic.</WarningText>
{:else if q1 == "Yes"}
  <Select
    label="Is it expected to reduce traffic both within the scheme and elsewhere?"
    emptyOption
    choices={[
      [
        "Yes",
        "Yes, traffic is expected to reduce due to modal shift and trip reduction",
      ],
      ["No", "No, some traffic is expected to be displaced to other roads"],
    ]}
    bind:value={q2}
  />

  {#if q2 == "Yes"}
    <Confirmation />
  {:else if q2 == "No"}
    <Select
      label="Where will displaced traffic go?"
      emptyOption
      choices={pairs([
        "Major routes (e.g. scheme eliminates a rat run)",
        "Minor streets (e.g. residential)",
      ])}
      bind:value={q3}
    />

    {#if q3 == "Major routes (e.g. scheme eliminates a rat run)"}
      <MajorRoutes />
    {:else if q3 == "Minor streets (e.g. residential)"}
      <MinorRoutes />
    {/if}
  {/if}
{/if}

<hr />

<TextArea
  label="Results & Commentary"
  bind:value={$state.trafficMitigationCheck.notes}
/>
