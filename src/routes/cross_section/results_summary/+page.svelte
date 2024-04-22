<script lang="ts">
  import { TextArea } from "govuk-svelte";
  import { state } from "../data";
</script>

<TextArea
  label="Commentary on Cross-Sections Check and Results"
  bind:value={$state.resultsCommentary}
/>
