<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={16}
  cases={[
    ["2", "<p>No guard railing anywhere on the route.</p>"],
    [
      "1",
      "<p>Minimal guard railing, used to address a clear safety issue such as a level difference.</p>",
    ],
    [
      "0",
      "<p>Guard railing used to control behaviour in complex and sensitive environments.</p>",
    ],
    [
      "C",
      "<p>Guard railing used as standard without consideration of inherent safety risks.</p>",
    ],
  ]}
>
  <p>Description: Presence of guard railing.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
