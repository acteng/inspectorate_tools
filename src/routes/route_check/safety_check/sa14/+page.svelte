<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={14}
  label="Cycling Surface and Maintenance Defects"
  cases={[
    ["2", "No defects."],
    ["1", "Few minor defects."],
    ["0", "Many minor defects."],
    ["C", "Major defects."],
  ]}
>
  <p>
    Cycling surface and maintenance defects: • sharp gradients (≥12.5%) • non
    cycle friendly ironworks • raised/sunken covers or gullies • potholes •
    loose/cracked surfaces • poor drainage or slip risks • overgrown vegetation
  </p>
  <p>Mode: Cycling</p>
</Question>
