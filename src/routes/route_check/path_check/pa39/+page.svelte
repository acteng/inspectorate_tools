<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={23}
  label="Lighting"
  cases={[
    ["0", "Long stretches of darkness or no lighting."],
    ["1", "Short stretches of darkness or inappropriate lighting."],
    [
      "2",
      "Appropriate lighting throughout the path.  Any public transport waiting areas at access points to the path are lit.",
    ],
  ]}
>
  <p>Extent of lighting.</p>
  <p>Mode: All Active Modes</p>
</Question>
