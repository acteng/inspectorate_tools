<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  label="Width of Walking and Wheeling Spaces"
  cases={[
    ["2", "<p>>2m.</p>"],
    ["1", "<p>1.5-2m.</p>"],
    ["0", "<p><1.5m.</p>"],
    ["N/A", ""],
  ]}
>
  <p>Effective width of dedicated walking/wheeling spaces.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
