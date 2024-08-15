<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={9}
  cases={[
    [
      "2",
      "<p>&gt;3.5m (excluding pinch points where an absolute minimum width of 2m is maintained over a short distance).</p>",
    ],
    [
      "1",
      "<p>3-3.5m (excluding pinch points where an absolute minimum width of 2m is maintained over a short distance).</p>",
    ],
    [
      "0",
      "<p>&lt;3m (excluding pinch points where an absolute minimum width of 2m is maintained over a short distance).</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Description: Effective width of dedicated equestrian spaces.</p>
  <p>Mode: Horse Riding</p>
</Question>
