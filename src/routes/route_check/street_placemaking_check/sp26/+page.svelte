<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={26}
  label="Sunlight"
  cases={[
    ["0", "No sunlight penetration."],
    ["1", "<2 hours direct sunlight on shortest day of year."],
    ["2", ">2 hours direct sunlight on shortest day of year."],
  ]}
>
  <p>How much sunlight the street receives.</p>
</Question>
