<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={18}
  cases={[
    [
      "2",
      "<p>Deviation factor against nearest alternative route less than 1.2.</p>",
    ],
    [
      "1",
      "<p>Deviation factor against nearest alternative route between 1.2-1.4.</p>",
    ],
    [
      "0",
      "<p>Deviation factor against nearest alternative route greater than 1.4.</p>",
    ],
  ]}
>
  <p>
    Extent to which the path deviates against the nearest alternative route open
    to motor traffic.
  </p>
  <p>Mode: All Active Modes</p>
</Question>
