<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={4}
  cases={[
    ["2", "<p>No trip hazards, level clear surface.</p>"],
    ["1", "<p>Few trip hazards.</p>"],
    ["0", "<p>Many trip hazards.</p>"],
    [
      "C",
      "<p>There are level differences of greater than 13mm with no tactile information and colour contrast to help identify them.</p>",
    ],
  ]}
>
  <p>Description: Risk of pedestrians tripping due to hazards.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
