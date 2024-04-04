<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={15}
  label="Guard Railing"
  cases={[
    [
      "C",
      "Guard railing used as standard without consideration of inherent safety risks.",
    ],
    ["0", "Guard railing used to control behaviour in complex environments."],
    [
      "1",
      "Minimal guard railing, used to address a clear safety issue such as a level difference.",
    ],
    ["2", "No guard railing anywhere on the route."],
  ]}
>
  <p>Presence of guard railing</p>
</Question>
