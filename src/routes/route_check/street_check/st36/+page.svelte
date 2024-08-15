<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={20}
  cases={[
    [
      "2",
      "<p>Route lit thoroughly, including any public transport waiting areas.</p>",
    ],
    [
      "1",
      "<p>Short stretches of darkness.</p><p>Or, bat-friendly lighting.</p>",
    ],
    ["0", "<p>Long stretches of darkness.</p><p>Or, no lighting.</p>"],
  ]}
>
  <p>Description: Extent of lighting.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
