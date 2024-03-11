<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  label="Mesh Density - Cycling"
  cases={[
    [4, "The area has an average mesh density of 250m"],
    [3, "The area has an average mesh density of 251-400m"],
    [2, "The area has an average mesh density of 401-800"],
    [1, "The area has an average mesh density of 801-1400m"],
    [0, "The area has an average mesh density which exceeds 1400m."],
  ]}
>
  <p>
    (How tight or loose the pedestrian network is. This is measured by the
    average distance between streets that have suitable pedestrian facilities as
    defined in the permability metric above).
  </p>
</Question>
