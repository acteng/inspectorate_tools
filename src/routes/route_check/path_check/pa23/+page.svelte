<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  cases={[
    ["2", "<p>&gt;2m.</p>"],
    ["1", "<p>1.5-2m.</p>"],
    ["0", "<p>&lt;1.5m.</p>"],
    ["N/A", ""],
  ]}
>
  <p>Effective width of dedicated walking/wheeling spaces.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
