<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={8}
  cases={[
    ["2", "<p>&gt;3m.</p>"],
    ["1", "<p>2.5-3m</p>"],
    ["0", "<p>&lt;2.5m.</p>"],
    ["N/A", ""],
  ]}
>
  <p>Description: Effective width of dedicated cycling spaces.</p>
  <p>Mode: Cycling</p>
</Question>
