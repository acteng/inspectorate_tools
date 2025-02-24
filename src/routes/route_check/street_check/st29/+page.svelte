<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={13}
  cases={[
    [
      "2",
      "<p>Delay for cyclists is shorter than that of motor vehicles or cyclists are not required to stop at junctions (e.g. bypass at signals).</p>",
    ],
    [
      "1",
      "<p>Delay for cyclists at junctions is similar to that of motor vehicles.</p>",
    ],
    [
      "0",
      "<p>Delay for cyclists at junctions is greater than the delay to motor vehicles.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Description: Delay to cyclists at junctions.</p>
  <p>Mode: Cycling</p>
</Question>
