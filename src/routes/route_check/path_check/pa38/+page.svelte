<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={22}
  label="Places to Shelter"
  cases={[
    ["2", "<p><50m.</p>"],
    ["1", "<p>50-150m.</p>"],
    ["0", "<p>>150m.</p>"],
  ]}
>
  <p>Distance between shelter points.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
