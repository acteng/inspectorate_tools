<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={24}
  label="Cycle Parking"
  cases={[
    [
      "2",
      "<p>Accessible and overlooked cycle parking provided, sufficient to meet present and future demand, including provision for a range of cycle vehicles and users.</p>",
    ],
    [
      "1",
      "<p>Some accessible and overlooked cycle parking provided but not enough to meet present demand.</p>",
    ],
    ["0", "<p>Insufficient or inappropriate cycle parking.</p>"],
  ]}
>
  <p>Ease of access to cycle parking at key points along path.</p>
  <p>Mode: Cycling</p>
</Question>
