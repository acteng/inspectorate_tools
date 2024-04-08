<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={24}
  label="Cycle Parking"
  cases={[
    ["0", "Insufficient or inappropriate cycle parking."],
    [
      "1",
      "Some accessible and overlooked cycle parking provided but not enough to meet present demand.",
    ],
    [
      "2",
      "Accessible and overlooked cycle parking provided, sufficient to meet present and future demand, including provision for a range of cycle vehicles and users.",
    ],
  ]}
>
  <p>Ease of access to cycle parking at key points along path.</p>
  <p>Mode: Cycling</p>
</Question>
