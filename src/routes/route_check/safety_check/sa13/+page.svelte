<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={13}
  cases={[
    [
      "2",
      "<p>Crossing angle between 80 and 90 degrees with track filler creating a smooth crossing for cyclists.</p>",
    ],
    [
      "1",
      "<p>Crossing angle between 80 and 90 degrees (or between 60 and 80 degrees with track filler creating a smooth crossing for cyclists).</p>",
    ],
    ["0", "<p>Crossing angle between 60 and 80 degrees.</p>"],
    ["C", "<p>Crossing angle less than 60 degrees.</p>"],
    ["N/A", ""],
  ]}
>
  <p>Crossing angle (between cyclist desire line and tram or train rails).</p>
  <p>Mode: Cycling</p>
</Question>
