<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={3}
  label="Diversity of Activities"
  cases={[
    [
      "2",
      "<p>Different activities encouraged on the street at different times of day.</p>",
    ],
    ["1", "<p>Multiple activity street.</p>"],
    ["0", "<p>Single activity street.</p>"],
  ]}
>
  <p>
    Suitability of the street for different activities, creating conditions for
    positive interactions.
  </p>
</Question>
