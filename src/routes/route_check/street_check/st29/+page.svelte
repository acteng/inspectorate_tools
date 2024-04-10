<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={13}
  label="Cyclist Delay at Junctions"
  cases={[
    [
      "2",
      "Delay is shorter than for motor vehicles or cyclists are not required to stop at junctions (e.g. bypass at signals).",
    ],
    [
      "1",
      "Delay for cyclists at junctions is similar to delay for motor vehicles.",
    ],
    [
      "0",
      "Delay for cyclists at junctions is greater than for motor vehicles.",
    ],
  ]}
>
  <p>Delay to cyclists at junctions.</p>
  <p>Mode: Cycling</p>
</Question>
