<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  label="Width of Walking and Wheeling Spaces"
  cases={[
    ["2", ">2m."],
    ["1", "1.5-2m."],
    ["0", "<1.5m."],
  ]}
>
  <p>Effective width of dedicated walking/wheeling spaces.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
