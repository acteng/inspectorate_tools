<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={26}
  cases={[
    [
      "2",
      "<p>The way forward along the route is clear due to the path environment and design features. If signage is needed at decision points, it is present.</p>",
    ],
    [
      "1",
      "<p>There is one point along the route where the way forward is unclear due to the path environment, design features, or poor/missing signage.</p>",
    ],
    [
      "0",
      "<p>There are multiple points along the route where the way forward is unclear due to the path environment, design features, or poor/missing signage.</p>",
    ],
  ]}
>
  <p>Ease of navigation when travelling along the route.</p>
  <p>Mode: All Active Modes</p>
</Question>
