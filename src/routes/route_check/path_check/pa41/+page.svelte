<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={25}
  cases={[
    [
      "2",
      "<p>There are no shared use facilities.</p><p>If horse-riding is permitted, a separate trotting strip is provided.</p>",
    ],
    [
      "1",
      "<p>Shared use facilities pass the width requirements set out in Table 6-3 of LTN 1/20 and are designed in a way that minimises potential conflict between cyclists and pedestrians.</p><p>Or, horses share facilities with pedestrians and cyclists in a facility over 3.0m wide.</p>",
    ],
    [
      "0",
      "<p>In rural areas or motor traffic free environments, shared use cycle tracks fail the width requirements set out in Table 6-3 of LTN 1/20.</p><p>Or, horses share facilities with pedestrians and cyclists in a facility under 3.0m wide.</p>",
    ],
  ]}
>
  <p>Description: Potential for interaction between modes.</p>
  <p>Mode: All Active Modes</p>
</Question>
