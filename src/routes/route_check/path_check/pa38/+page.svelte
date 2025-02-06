<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={22}
  cases={[
    ["2", "<p>Less than 50m.</p>"],
    ["1", "<p>50-150m.</p>"],
    ["0", "<p>More than 150m.</p>"],
  ]}
>
  <p>Description: Distance between shelter points.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
