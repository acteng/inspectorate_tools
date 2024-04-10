<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={18}
  label="Places to Rest"
  cases={[
    ["2", "<50m."],
    ["1", "50-150m."],
    ["0", ">150m."],
  ]}
>
  <p>Distance between resting points.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
