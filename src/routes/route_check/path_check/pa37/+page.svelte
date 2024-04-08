<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={21}
  label="Places to Rest"
  cases={[
    ["0", ">150m."],
    ["1", "50-150m."],
    ["2", "<50m."],
  ]}
>
  <p>Distance between resting points.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
