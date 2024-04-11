<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={9}
  label="Width of Horse Riding Spaces"
  cases={[
    [
      "2",
      "<p>>3.5m (excluding pinch points where an absolute minimum width of 2m is maintained over a short distance).</p>",
    ],
    [
      "1",
      "<p>3-3.5m (excluding pinch points where an absolute minimum width of 2m is maintained over a short distance).</p>",
    ],
    [
      "0",
      "<p><3m (excluding pinch points where an absolute minimum width of 2m is maintained over a short distance).</p>",
    ],
  ]}
>
  <p>Effective width of dedicated equestrian spaces.</p>
  <p>Mode: Horse Riding</p>
</Question>
