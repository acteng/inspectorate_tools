<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={12}
  label="Pedestrian Crossing Locations"
  cases={[
    [
      "2",
      "<p>All crossings are located on desire lines, and all desire lines are provided for.</p>",
    ],
    ["1", "<p>Some crossings are located on desire lines.</p>"],
    ["0", "<p>No crossings are located on desire lines.</p>"],
  ]}
>
  <p>Alignment of crossings with desire lines.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
