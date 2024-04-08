<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={26}
  label="Ease of Navigation"
  cases={[
    [
      "0",
      "There are multiple points along the route where the way forward is unclear due to the path environment, design features, or poor/missing signage.",
    ],
    [
      "1",
      "There is one point along the route where the way forward is unclear due to the path environment, design features, or poor/missing signage.",
    ],
    [
      "2",
      "The way forward along the route is clear due to the path environment and design features. If signage is needed at decision points, it is present.",
    ],
  ]}
>
  <p>Ease of navigation when travelling along the route.</p>
  <p>Mode: All Active Modes</p>
</Question>
