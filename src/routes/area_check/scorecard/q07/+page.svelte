<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  cases={[
    [4, "<p>The area has an average mesh density of 100m</p>"],
    [3, "<p>The area has an average mesh density of 101-250m</p>"],
    [2, "<p>The area has an average mesh density of 251m-400m</p>"],
    [1, "<p>The area has an average mesh density of 401m-500m.</p>"],
    [0, "<p>The area has an average mesh density which exceeds 500m.</p>"],
  ]}
>
  <p>
    (How tight or loose the pedestrian network is. This is measured by the
    average distance between streets that have suitable pedestrian facilities as
    defined in the permability metric above).
  </p>
</Question>
