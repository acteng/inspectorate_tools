<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={3}
  label="Diversity of Activities"
  cases={[
    [
      "2",
      "Different activities encouraged on the street at different times of day.",
    ],
    ["1", "Multiple activity street."],
    ["0", "Single activity street."],
  ]}
>
  <p>
    Suitability of the street for different activities, creating conditions for
    positive interactions.
  </p>
</Question>
