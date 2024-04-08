<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={19}
  label="Places to Shelter"
  cases={[
    ["0", ">150m."],
    ["1", "50-150m."],
    ["2", "<50m."],
  ]}
>
  <p>Distance between shelter points.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
