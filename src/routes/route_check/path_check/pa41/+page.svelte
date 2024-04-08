<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={25}
  label="Impact of Users on Each Other"
  cases={[
    [
      "0",
      "In rural areas or motor traffic free environments, shared use cycle tracks fail the width requirements set out in Table 6-3 of LTN 1/20.  Or, horses share facilities with pedestrians and cyclists in a facility under 3m wide.",
    ],
    [
      "1",
      "Shared use facilities pass the width requirements set out in Table 6-3 of LTN 1/20 and are designed in a way that minimises potential conflict between cyclists and pedestrians.  Or, horses share facilities with pedestrians and cyclists in a facility over 3m wide.",
    ],
    [
      "2",
      "There are no shared use facilities.  If horse-riding is permitted, a separate trotting strip is provided.",
    ],
  ]}
>
  <p>Potential for interaction between modes.</p>
  <p>Mode: All Active Modes</p>
</Question>
