<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={22}
  label="Air Pollution - Exposure"
  cases={[
    [
      "2",
      "<p>The NO2 concentration is less than 32µg/m3.</p><p>Or, the NO2 concentration is 32-40µg/m3 but local traffic volume reduction measures are proposed.</p>",
    ],
    [
      "1",
      "<p>The NO2 concentration is 32-40µg/m3.</p><p>Or, the existing NO2 concentration is greater than 40µg/m3 but local traffic volume reduction measures are proposed.</p>",
    ],
    [
      "0",
      "<p>The NO2 concentration is greater than 40µg/m3.</p><p>If assessing a design proposal, the NO2 concentration is greater than 40µg/m3 and there are no proposals to reduce local traffic volume.</p>",
    ],
  ]}
>
  <p>Exposure to NOX concentration.</p>
</Question>
