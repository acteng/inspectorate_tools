<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={12}
  label="Crossing Angle of Tram/Train Rails"
  cases={[
    ["C", "Crossing angle less than 60 degrees."],
    ["0", "Crossing angle between 60 and 80 degrees."],
    [
      "1",
      "Crossing angle between 80 and 90 degrees (or between 60 and 80 degrees with track filler creating a smooth crossing for cyclists).",
    ],
    [
      "2",
      "Crossing angle between 80 and 90 degrees with track filler creating a smooth crossing for cyclists.",
    ],
  ]}
>
  <p>Crossing angle (between cyclist desire line and tram or train rails).</p>
</Question>
