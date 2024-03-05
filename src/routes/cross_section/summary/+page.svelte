<script lang="ts">
  import { WarningButton, TextArea, CollapsibleCard } from "govuk-svelte";
  import { base } from "$app/paths";
  import { state } from "../data";
</script>

<div class="govuk-prose">
  <div class="govuk-breadcrumbs">
    <ol class="govuk-breadcrumbs__list">
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/">Tools</a>
      </li>
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/cross_section">
          Route cross-section
        </a>
      </li>
      <li class="govuk-breadcrumbs__list-item">Summary of Scheme</li>
    </ol>
  </div>
</div>
