<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  label="Access to Toilets"
  cases={[
    [
      "0",
      "Where people meet, wait or spend time in numbers, it is over 150m to the nearest accessible sanitary facilities.",
    ],
    [
      "1",
      "Where people meet, wait or spend time in numbers, it is less than 150m to the nearest accessible sanitary facilities.",
    ],
    [
      "2",
      "Where people meet, wait or spend time in numbers, it is less than 50m to the nearest accessible sanitary facilities.",
    ],
  ]}
>
  <p>
    Provision of sanitary facilities. E.g. toilets and/or baby change
    facilities.
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
