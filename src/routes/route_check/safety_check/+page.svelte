<script lang="ts">
  import Progress from "./Progress.svelte";
  import { ManualSectionModal } from "$lib";
  import { contents } from "../manual/content";
</script>

<ManualSectionModal
  title={"Safety Check Manual"}
  section={contents[4]}
  link={"/route_check/manual"}
/>

<div class="govuk-width-container">
  <Progress currentIdx={-1} />
</div>
