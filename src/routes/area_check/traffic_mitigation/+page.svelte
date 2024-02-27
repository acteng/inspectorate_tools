<script lang="ts">
  import { base } from "$app/paths";
  import { Select } from "govuk-svelte";
  import { pairs, WarningText } from "$lib";

  let q1 = "";
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

  <Select
    label="Is the scheme expected to reduce traffic?"
    emptyOption
    choices={pairs(["Yes", "No"])}
    bind:value={q1}
  />

  {#if q1 == "No"}
    <WarningText>Stop. Redesign scheme to reduce traffic.</WarningText>
  {/if}
</div>
