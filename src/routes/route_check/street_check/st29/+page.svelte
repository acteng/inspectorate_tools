<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={13}
  cases={[
    [
      "2",
      "<p>Delay is shorter than for motor vehicles or cyclists are not required to stop at junctions (e.g. bypass at signals).</p>",
    ],
    [
      "1",
      "<p>Delay for cyclists at junctions is similar to delay for motor vehicles.</p>",
    ],
    [
      "0",
      "<p>Delay for cyclists at junctions is greater than for motor vehicles.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Delay to cyclists at junctions.</p>
  <p>Mode: Cycling</p>
</Question>
