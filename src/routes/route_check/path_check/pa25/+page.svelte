<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={9}
  label="Width of Horse Riding Spaces"
  cases={[
    [
      "2",
      ">3.5m (excluding pinch points where an absolute minimum width of 2m is maintained over a short distance).",
    ],
    [
      "1",
      "3-3.5m (excluding pinch points where an absolute minimum width of 2m is maintained over a short distance).",
    ],
    [
      "0",
      "<3m (excluding pinch points where an absolute minimum width of 2m is maintained over a short distance).",
    ],
  ]}
>
  <p>Effective width of dedicated equestrian spaces.</p>
  <p>Mode: Horse Riding</p>
</Question>
