<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={8}
  label="Width of Cycling Spaces"
  cases={[
    ["2", ">3m."],
    ["1", "2.5-3m "],
    ["0", "<2.5m."],
  ]}
>
  <p>Effective width of dedicated cycling spaces.</p>
  <p>Mode: Cycling</p>
</Question>
