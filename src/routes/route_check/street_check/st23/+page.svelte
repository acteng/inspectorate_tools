<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  cases={[
    [
      "2",
      "<p>Where people meet, wait or spend time in numbers, it is less than 50m to the nearest accessible sanitary facilities.</p>",
    ],
    [
      "1",
      "<p>Where people meet, wait or spend time in numbers, it is less than 150m to the nearest accessible sanitary facilities.</p>",
    ],
    [
      "0",
      "<p>Where people meet, wait or spend time in numbers, it is over 150m to the nearest accessible sanitary facilities.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>
    Description: Provision of sanitary facilities.
    <br />
    E.g. toilets and/or baby change facilities.
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
