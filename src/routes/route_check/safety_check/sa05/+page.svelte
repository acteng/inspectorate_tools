<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  label="Kerbside Activity"
  cases={[
    [
      "2",
      "Kerbside activity is well-managed with no or minimal conflict with cyclists. ",
    ],
    [
      "1",
      "Less frequent kerbside activity, and conflict with cyclists is well-managed.",
    ],
    [
      "0",
      "Frequent kerbside activity for cyclists to contend with. Conflict with cyclists is not well-managed.",
    ],
    [
      "C",
      "Cycle facility next to parking/loading facility, without a buffer of at least 0.5m.  Or, an unprotected cycle lane is next to a frequently-used bus layby.",
    ],
  ]}
>
  <p>Cyclist conflict with kerbside activity, including risk of 'dooring'</p>
  <p>Mode: Cycling</p>
</Question>
