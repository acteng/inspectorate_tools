<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={16}
  cases={[
    [
      "2",
      "<p>Many street features to encourage and enhance active travel journeys.</p>",
    ],
    [
      "1",
      "<p>One street feature to encourage and enhance active travel journeys.</p>",
    ],
    [
      "0",
      "<p>No specific street features to encourage and enhance active travel journeys.</p>",
    ],
  ]}
>
  <p>
    Description: Street features to encourage and enhance active travel
    journeys, such as:
  </p>
  <ul>
    <li>Benches or other seating</li>
    <li>Water fountains</li>
    <li>Public tool stands</li>
    <li>Cycle pumps</li>
    <li>Cycle counters</li>
    <li>Interpretation boards</li>
    <li>Tactile maps or interactive pedestrian features</li>
  </ul>
</Question>
