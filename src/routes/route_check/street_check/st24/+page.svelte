<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={8}
  cases={[
    [
      "2",
      "<p>Machine-laid asphalt or smooth and firm blocks undisturbed by turning vehicles.</p>",
    ],
    ["1", "<p>Hand-laid asphalt or smooth blocks.</p>"],
    ["0", "<p>Unsurfaced/unbound or unstable blocks/sets.</p>"],
  ]}
>
  <p>Description: Type of cycling surface material.</p>
  <p>Mode: Cycling</p>
</Question>
