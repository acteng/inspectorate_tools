<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={22}
  label="Places to Shelter"
  cases={[
    ["2", "<50m."],
    ["1", "50-150m."],
    ["0", ">150m."],
  ]}
>
  <p>Distance between shelter points.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
