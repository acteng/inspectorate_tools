<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={19}
  cases={[
    ["2", "<p>&gt;2 hours direct sunlight on shortest day of year.</p>"],
    ["1", "<p>&lt;2 hours direct sunlight on shortest day of year.</p>"],
    ["0", "<p>No sunlight penetration.</p>"],
  ]}
>
  <p>How much sunlight the street receives.</p>
</Question>
