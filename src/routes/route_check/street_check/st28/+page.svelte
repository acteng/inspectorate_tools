<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={12}
  label="Pedestrian Crossing Locations"
  cases={[
    [
      "2",
      "All crossings are located on desire lines, and all desire lines are provided for.",
    ],
    ["1", "Some crossings are located on desire lines."],
    ["0", "No crossings are located on desire lines."],
  ]}
>
  <p>Alignment of crossings with desire lines.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
