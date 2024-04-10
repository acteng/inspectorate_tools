<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={23}
  label="Lighting"
  cases={[
    [
      "2",
      "Appropriate lighting throughout the path.  Any public transport waiting areas at access points to the path are lit.",
    ],
    ["1", "Short stretches of darkness or inappropriate lighting."],
    ["0", "Long stretches of darkness or no lighting."],
  ]}
>
  <p>Extent of lighting.</p>
  <p>Mode: All Active Modes</p>
</Question>
