<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={22}
  label="Air Pollution - Exposure"
  cases={[
    [
      "0",
      "The NO2 concentration is greater than 40µg/m3.  If assessing a design proposal, the NO2 concentration is greater than 40µg/m3 and there are no proposals to reduce local traffic volume.",
    ],
    [
      "1",
      "The NO2 concentration is 32-40µg/m3.   Or, the existing NO2 concentration is greater than 40µg/m3 but local traffic volume reduction measures are proposed. ",
    ],
    [
      "2",
      "The NO2 concentration is less than 32µg/m3.   Or, the NO2 concentration is 32-40µg/m3 but local traffic volume reduction measures are proposed.",
    ],
  ]}
>
  <p>Exposure to NOX concentration.</p>
</Question>
