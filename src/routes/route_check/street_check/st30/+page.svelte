<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={14}
  label="Cyclist Delay on Links"
  cases={[
    [
      "2",
      "<p>Cyclists can always progress without being delayed by other vehicles.</p>",
    ],
    [
      "1",
      "<p>Cyclists have some opportunities to pass slower moving vehicles (including other cyclists).</p>",
    ],
    [
      "0",
      "<p>Cyclists have no opportunities to pass slower moving vehicles (including other cyclists).</p>",
    ],
  ]}
>
  <p>Delay to cyclists on links.</p>
  <p>Mode: Cycling</p>
</Question>
