<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={9}
  cases={[
    [
      "2",
      "<p>More than 3.5m (excluding pinch points where an absolute minimum width of 2.0m is maintained over a short distance).</p>",
    ],
    [
      "1",
      "<p>3.0-3.5m (excluding pinch points where an absolute minimum width of 2.0m is maintained over a short distance).</p>",
    ],
    [
      "0",
      "<p>Less than 3.0m (excluding pinch points where an absolute minimum width of 2.0m is maintained over a short distance).</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Description: Effective width of dedicated equestrian spaces.</p>
  <p>Mode: Horse Riding</p>
</Question>
