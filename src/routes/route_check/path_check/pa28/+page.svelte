<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={12}
  label="Cycling Surface"
  cases={[
    ["0", "Unsurfaced/unbound or unstable blocks/sets."],
    ["1", "Hand-laid asphalt or smooth blocks."],
    ["2", "Machine-laid asphalt or smooth and firm blocks."],
  ]}
>
  <p>Type of cycling surface material.</p>
  <p>Mode: Cycling</p>
</Question>
