<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={14}
  label="Cyclist Delay on Links"
  cases={[
    [
      "2",
      "Cyclists can always progress without being delayed by other vehicles.",
    ],
    [
      "1",
      "Cyclists have some opportunities to pass slower moving vehicles (including other cyclists).",
    ],
    [
      "0",
      "Cyclists have no opportunities to pass slower moving vehicles (including other cyclists).",
    ],
  ]}
>
  <p>Delay to cyclists on links.</p>
  <p>Mode: Cycling</p>
</Question>
