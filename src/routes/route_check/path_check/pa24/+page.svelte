<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={8}
  label="Width of Cycling Spaces"
  cases={[
    ["2", "<p>>3m.</p>"],
    ["1", "<p>2.5-3m</p>"],
    ["0", "<p><2.5m.</p>"],
    ["N/A", ""],
  ]}
>
  <p>Effective width of dedicated cycling spaces.</p>
  <p>Mode: Cycling</p>
</Question>
