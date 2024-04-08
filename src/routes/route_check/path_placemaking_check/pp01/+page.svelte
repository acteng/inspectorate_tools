<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={1}
  label="Engagement for Children"
  cases={[
    ["0", "None."],
    ["1", "Some access to formal/natural play spaces for children."],
    [
      "2",
      "Access to formal/natural play spaces for children and features that can engage children.",
    ],
  ]}
>
  <p>Presence of features which children can engage with.</p>
</Question>
