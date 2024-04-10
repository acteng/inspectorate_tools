<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={16}
  label="Guard Railing"
  cases={[
    ["2", "No guard railing anywhere on the route."],
    [
      "1",
      "Minimal guard railing, used to address a clear safety issue such as a level difference.",
    ],
    ["0", "Guard railing used to control behaviour in complex environments."],
    [
      "C",
      "Guard railing used as standard without consideration of inherent safety risks.",
    ],
  ]}
>
  <p>Presence of guard railing</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
