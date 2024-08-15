<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={17}
  cases={[
    [
      "2",
      "<p>Route is well signed for pedestrians and cyclists with signs and road markings located at all decision points and junctions.</p><p>Signs and road markings are clear, easily visible and legible.</p>",
    ],
    [
      "1",
      "<p>Some cycle and pedestrian specific direction signing. There are gaps in signage and road markings which could be improved.</p>",
    ],
    [
      "0",
      "<p>Route signing is poor with signs missing at key decision points. Pedestrians and cyclists follow signs and road markings intended for motor traffic.</p><p>Or, signs and road markings are faded or unclear.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Effectiveness of signage and road markings on wayfinding.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
