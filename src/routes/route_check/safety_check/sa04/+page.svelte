<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={4}
  label="Trip Hazards"
  cases={[
    [
      "C",
      "There are level differences of greater than 13mm with no tactile information and colour contrast to help identify them.",
    ],
    ["0", "Many trip hazards."],
    ["1", "Few trip hazards."],
    ["2", "No trip hazards, level clear surface."],
  ]}
>
  <p>Risk of pedestrians tripping due to hazards</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
