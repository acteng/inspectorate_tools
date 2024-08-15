<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={25}
  cases={[
    [
      "2",
      "<p>Provisions for walking, wheeling and cycling along the route are direct, continuous, intuitive and legible.</p>",
    ],
    [
      "1",
      "<p>Provisions for walking, wheeling and cycling along the route are continuous but may be indirect or have sections which are unintuitive to navigate.</p>",
    ],
    [
      "0",
      "<p>Provisions for walking, wheeling and cycling along the route are discontinuous.</p>",
    ],
  ]}
>
  <p>Description: Continuity of walking, wheeling and cycling routes.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
