<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={25}
  label="Route Continuity "
  cases={[
    [
      "0",
      "Provisions for walking, wheeling and cycling along the route are discontinuous.",
    ],
    [
      "1",
      "Provisions for walking, wheeling and cycling along the route are continuous but may be indirect or have sections which are unintuitive to navigate.",
    ],
    [
      "2",
      "Provisions for walking, wheeling and cycling along the route are direct, continuous, intuitive and legible.",
    ],
  ]}
>
  <p>Continuity of walking, wheeling and cycling routes.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
