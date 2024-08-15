<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={10}
  cases={[
    [
      "2",
      "<p>There are detectors present on the crossing which extend crossing times based on a crossing speed of 1m/s.</p>",
    ],
    [
      "1",
      "<p>There are detectors present on the crossing which extend crossing times based on a crossing speed of 1.2m/s.</p>",
    ],
    [
      "0",
      "<p>There are no detectors to extend crossing times, but pedestrians who start crossing at the end of the 'invitation to cross' can cross at a speed of 1.2m/s and get across the whole crossing in time.</p>",
    ],
    [
      "C",
      "<p>Pedestrians who start crossing at the end of the 'invitation to cross' must cross at a speed of over 1.2m/s to get across the whole crossing in time.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>
    Description: Required crossing speed at signal crossings (risk of
    pedestrians coming into conflict with traffic).
  </p>
  <p>Mode: Walking / Wheeling</p>
</Question>
