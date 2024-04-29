<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  label="Kerbside Activity"
  cases={[
    [
      "2",
      "<p>Kerbside activity is well-managed with no or minimal conflict with cyclists.</p>",
    ],
    [
      "1",
      "<p>Less frequent kerbside activity, and conflict with cyclists is well-managed.</p>",
    ],
    [
      "0",
      "<p>Frequent kerbside activity for cyclists to contend with. Conflict with cyclists is not well-managed.</p>",
    ],
    [
      "C",
      "<p>Cycle facility next to parking/loading facility, without a buffer of at least 0.5m.</p><p>Or, an unprotected cycle lane is next to a frequently-used bus layby.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Cyclist conflict with kerbside activity, including risk of 'dooring'</p>
  <p>Mode: Cycling</p>
</Question>
