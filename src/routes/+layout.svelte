<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { WarningText } from "$lib";

  initAll();
</script>

<WarningText>
  This is an experimental tool. Use only for internal testing.
</WarningText>

<slot />
