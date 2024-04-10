<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={19}
  label="Sunlight"
  cases={[
    ["2", ">2 hours direct sunlight on shortest day of year."],
    ["1", "<2 hours direct sunlight on shortest day of year."],
    ["0", "No sunlight penetration."],
  ]}
>
  <p>How much sunlight the street receives.</p>
</Question>
