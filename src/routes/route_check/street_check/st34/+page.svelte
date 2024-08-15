<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={18}
  cases={[
    ["2", "<p>&lt;50m.</p>"],
    ["1", "<p>50-150m.</p>"],
    ["0", "<p>&gt;150m.</p>"],
  ]}
>
  <p>Distance between resting points.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
