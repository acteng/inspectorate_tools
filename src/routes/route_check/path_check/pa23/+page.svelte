<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  cases={[
    ["2", "<p>More than 2.0m.</p>"],
    ["1", "<p>1.5-2.0m.</p>"],
    ["0", "<p>Less than 1.5m.</p>"],
    ["N/A", ""],
  ]}
>
  <p>Description: Effective width of dedicated walking/wheeling spaces.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
