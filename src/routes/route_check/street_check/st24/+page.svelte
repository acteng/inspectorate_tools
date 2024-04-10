<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={8}
  label="Cycling Surface Material"
  cases={[
    [
      "2",
      "Machine-laid asphalt or smooth and firm blocks undisturbed by turning vehicles.",
    ],
    ["1", "Hand-laid asphalt or smooth blocks."],
    ["0", "Unsurfaced/unbound or unstable blocks/sets."],
  ]}
>
  <p>Type of cycling surface material.</p>
  <p>Mode: Cycling</p>
</Question>
