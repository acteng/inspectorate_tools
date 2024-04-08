<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={17}
  label="Wayfinding"
  cases={[
    [
      "0",
      "Route signing is poor with signs missing at key decision points. Pedestrians and cyclists follow signs and road markings intended for motor traffic.  Or, signs and road markings are faded or unclear.",
    ],
    [
      "1",
      "Some cycle and pedestrian specific direction signing. There are gaps in signage and road markings which could be improved.",
    ],
    [
      "2",
      "Route is well signed for pedestrians and cyclists with signs and road markings located at all decision points and junctions.  Signs and road markings are clear, easily visible and legible.",
    ],
  ]}
>
  <p>Effectiveness of signage and road markings on wayfinding.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
