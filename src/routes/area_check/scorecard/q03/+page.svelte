<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={3}
  label="Crossings - Walking and Wheeling"
  cases={[
    [
      4,
      "Crossing facilities for pedestrians on the perimeter of the area are controlled, and are present in all places where there are desire lines.",
    ],
    [
      3,
      "Crossing facilities for pedestrianson the perimeter of the area are controlled, and are present in most places where there are desire lines.",
    ],
    [
      2,
      "Crossing facilities for pedestrians on the perimeter of the area are controlled, and are present in some places where there are desire lines.",
    ],
    [
      1,
      "Crossing facilities for pedestrians on the perimeter of the area are uncontrolled.",
    ],
    [
      0,
      "There are no crossing facilities for pedestrians on the perimeter of the area",
    ],
  ]}
/>
