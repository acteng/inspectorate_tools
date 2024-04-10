<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={6}
  label="Access to Taxis and Blue Badge Parking"
  cases={[
    [
      "2",
      "Where people meet, wait, or spend time in numbers, it is less than 50m to nearest accessible pick-up, drop-off or hailing points, or blue badge parking facilities.",
    ],
    [
      "1",
      "Where people meet, wait, or spend time in numbers, it is less than 150m to the nearest accessible pick-up, drop-off or hailing points, or blue badge parking facilities.",
    ],
    [
      "0",
      "Where people meet, wait, or spend time in numbers, it is over 150m to the nearest accessible pick-up, drop-off or hailing points, or blue badge parking facilities.",
    ],
  ]}
>
  <p>
    Distance to accessible pick-up, drop-off or hailing points, or blue badge
    parking facilities.
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
