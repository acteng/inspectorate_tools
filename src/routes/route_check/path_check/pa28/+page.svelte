<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={12}
  cases={[
    ["2", "<p>Machine-laid asphalt or smooth and firm blocks.</p>"],
    ["1", "<p>Hand-laid asphalt or smooth blocks.</p>"],
    ["0", "<p>Unsurfaced/unbound or unstable blocks/sets.</p>"],
    ["N/A", ""],
  ]}
>
  <p>Description: Type of cycling surface material.</p>
  <p>Mode: Cycling</p>
</Question>
