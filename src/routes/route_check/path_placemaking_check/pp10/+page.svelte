<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={10}
  cases={[
    [
      "2",
      "<p>Many features to encourage and enhance active travel journeys.</p>",
    ],
    [
      "1",
      "<p>One feature to encourage and enhance active travel journeys.</p>",
    ],
    [
      "0",
      "<p>No specific features to encourage and enhance active travel journeys.</p>",
    ],
  ]}
>
  <p>Features to encourage and enhance active travel journeys, such as:</p>
  <ul>
    <li>Benches or other seating</li>
    <li>Water fountain</li>
    <li>Public tool stand</li>
    <li>Cycle pump</li>
    <li>Cycle counter</li>
    <li>Tactile maps</li>
  </ul>
</Question>
