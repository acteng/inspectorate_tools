<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={14}
  label="Sustainable Materials"
  cases={[
    ["0", "No low carbon, sustainable or recycled materials used."],
    ["1", "Some low carbon, sustainable or recycled materials used."],
    [
      "2",
      "Full integration of low carbon, sustainable and/or recycled materials.",
    ],
  ]}
>
  <p>
    Incorporation of low carbon, sustainable or recycled materials into the
    design.
  </p>
</Question>
