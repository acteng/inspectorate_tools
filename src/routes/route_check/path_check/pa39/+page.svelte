<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={23}
  cases={[
    [
      "2",
      "<p>Appropriate lighting throughout the path.</p><p>Any public transport waiting areas at access points to the path are lit.</p>",
    ],
    ["1", "<p>Short stretches of darkness or inappropriate lighting.</p>"],
    ["0", "<p>Long stretches of darkness or no lighting.</p>"],
  ]}
>
  <p>Extent of lighting.</p>
  <p>Mode: All Active Modes</p>
</Question>
