<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={18}
  label="Light Pollution"
  cases={[
    [
      "0",
      "Beams from path lighting are excessively bright, excessively blue-violet and/or not shielded.   Or, parts of the path are positioned so that vehicle headlights dazzle pedestrians and cyclists.",
    ],
    [
      "1",
      "Beams from path lighting are no stronger than necessary but are not sufficiently shielded.",
    ],
    [
      "2",
      "Beams from path lighting are shielded, are no stronger than necessary and are warm-coloured.  Path environment and/or layout mitigates the effect of vehicle headlights dazzling pedestrians and cyclists.",
    ],
  ]}
>
  <p>Effect of excessive lighting on the environment and user experience.</p>
</Question>
