<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={18}
  cases={[
    [
      "2",
      "<p>Beams from path lighting are shielded, are no stronger than necessary and are warm-coloured.</p><p>Path environment and/or layout mitigates the effect of vehicle headlights dazzling pedestrians and cyclists.</p>",
    ],
    [
      "1",
      "<p>Beams from path lighting are no stronger than necessary but are not sufficiently shielded.</p>",
    ],
    [
      "0",
      "<p>Beams from path lighting are excessively bright, excessively blue-violet and/or not shielded.</p><p>Or, parts of the path are positioned so that vehicle headlights dazzle pedestrians and cyclists.</p>",
    ],
  ]}
>
  <p>Effect of excessive lighting on the environment and user experience.</p>
</Question>
