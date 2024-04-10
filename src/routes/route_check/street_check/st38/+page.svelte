<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={22}
  label="Impact of Cycling on Walking"
  cases={[
    ["2", "There are no shared use cycle tracks."],
    [
      "1",
      "In rural areas or motor traffic free environments, shared use cycle tracks pass the width requirements set out in Table 6-3 of LTN 1/20 and are designed in a way that minimises potential conflict between cyclists and pedestrians.",
    ],
    [
      "0",
      "On urban streets, cyclists are expected to use shared use cycle tracks and/or toucan crossings, bringing them into potential conflict with pedestrians.  In rural areas or motor traffic free environments, shared use cycle tracks fail the width requirements set out in Table 6-3 of LTN 1/20.",
    ],
  ]}
>
  <p>Presence of shared use cycle tracks and toucan crossings.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
