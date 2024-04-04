<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={10}
  label="Pedestrian Crossing Speed"
  cases={[
    [
      "C",
      "Pedestrians who start crossing at the end of the 'invitation to cross' must cross at a speed of over 1.2m/s to get across the whole crossing in time.",
    ],
    [
      "0",
      "There are no detectors to extend crossing times, but pedestrians who start crossing at the end of the 'invitation to cross' can cross at a speed of 1.2m/s and get across the whole crossing in time.",
    ],
    [
      "1",
      "There are detectors present on the crossing which extend crossing times based on a crossing speed of 1.2m/s.",
    ],
    [
      "2",
      "There are detectors present on the crossing which extend crossing times based on a crossing speed of 1m/s.",
    ],
  ]}
>
  <p>
    Required crossing speed at signal crossings (risk of pedestrians coming into
    conflict with traffic).
  </p>
</Question>
