<script lang="ts">
  import Progress from "./Progress.svelte";
  import { ManualSectionModal } from "$lib";
  import { contents } from "../manual/content";

  // TODO Include bold in the choices
</script>

<ManualSectionModal
  title={"Area Scorecard Manual"}
  section={contents[4]}
  link={"/area_check/manual"}
/>

<div class="govuk-width-container">
  <Progress currentIdx={-1} />
</div>
