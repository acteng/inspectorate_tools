<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={25}
  label="Light Pollution"
  cases={[
    [
      "2",
      "Beams from street lighting are shielded, are no stronger than necessary and are warm-coloured.  Street layout mitigates the effect of vehicle headlights dazzling pedestrians and cyclists.",
    ],
    [
      "1",
      "Beams from street lighting are no stronger than necessary but are not sufficiently shielded.",
    ],
    [
      "0",
      "Beams from street lighting are excessively bright, excessively blue-violet and/or not shielded.   Or, the street layout means that vehicle headlights dazzle pedestrians and cyclists.",
    ],
  ]}
>
  <p>Effect of excessive lighting on the environment and user experience.</p>
</Question>
