<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={20}
  label="Lighting"
  cases={[
    [
      "2",
      "Route lit thoroughly, including any public transport waiting areas.",
    ],
    ["1", "Short stretches of darkness.  Or, bat-friendly lighting."],
    ["0", "Long stretches of darkness.  Or, no lighting."],
  ]}
>
  <p>Extent of lighting.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
