<script lang="ts">
  import "../style/main.css";
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";

  initAll();
</script>

<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>
    This is an experimental tool. Use only for internal testing.
  </strong>
</div>

<slot />
