<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={3}
  label="Crossings - Walking and Wheeling"
  cases={[
    [
      4,
      "<p>Crossing facilities for pedestrians on the perimeter of the area are controlled, and are present in all places where there are desire lines.</p>",
    ],
    [
      3,
      "<p>Crossing facilities for pedestrianson the perimeter of the area are controlled, and are present in most places where there are desire lines.</p>",
    ],
    [
      2,
      "<p>Crossing facilities for pedestrians on the perimeter of the area are controlled, and are present in some places where there are desire lines.</p>",
    ],
    [
      1,
      "<p>Crossing facilities for pedestrians on the perimeter of the area are uncontrolled.</p>",
    ],
    [
      0,
      "<p>There are no crossing facilities for pedestrians on the perimeter of the area</p>",
    ],
  ]}
></Question>
