<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={25}
  cases={[
    [
      "2",
      "<p>Beams from street lighting are shielded, are no stronger than necessary and are warm-coloured.</p><p>Street layout mitigates the effect of vehicle headlights dazzling pedestrians and cyclists.</p>",
    ],
    [
      "1",
      "<p>Beams from street lighting are no stronger than necessary but are not sufficiently shielded.</p>",
    ],
    [
      "0",
      "<p>Beams from street lighting are excessively bright, excessively blue-violet and/or not shielded.</p><p>Or, the street layout means that vehicle headlights dazzle pedestrians and cyclists.</p>",
    ],
  ]}
>
  <p>Effect of excessive lighting on the environment and user experience.</p>
</Question>
