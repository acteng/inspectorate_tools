<script lang="ts">
  import YesNo from "./YesNo.svelte";
  import MajorRoutes from "./MajorRoutes.svelte";
  import MinorRoutes from "./MinorRoutes.svelte";
  import { base } from "$app/paths";
  import { Select } from "govuk-svelte";
  import { pairs, WarningText } from "$lib";

  let q1 = "";
  let q2 = "";
  let q3 = "";
</script>

<div class="govuk-prose">
  <div class="govuk-breadcrumbs">
    <ol class="govuk-breadcrumbs__list">
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/">Tools</a>
      </li>
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/area_check">
          Area check tool
        </a>
      </li>
      <li class="govuk-breadcrumbs__list-item">Traffic Mitigation Check</li>
    </ol>
  </div>
  <hr />

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
      <div class="govuk-panel govuk-panel--confirmation">
        <div class="govuk-panel__body">Proceed with the scheme</div>
      </div>
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
</div>
