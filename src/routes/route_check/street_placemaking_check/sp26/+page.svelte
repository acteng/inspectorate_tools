<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={26}
  label="Sunlight"
  cases={[
    ["2", "<p>>2 hours direct sunlight on shortest day of year.</p>"],
    ["1", "<p><2 hours direct sunlight on shortest day of year.</p>"],
    ["0", "<p>No sunlight penetration.</p>"],
  ]}
>
  <p>How much sunlight the street receives.</p>
</Question>
