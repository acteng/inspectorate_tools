<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={14}
  cases={[
    ["2", "<p>No defects.</p>"],
    ["1", "<p>Few minor defects.</p>"],
    ["0", "<p>Many minor defects.</p>"],
    ["C", "<p>Major defects.</p>"],
  ]}
>
  <p>Description: Cycling surface and maintenance defects:</p>
  <ul>
    <li>sharp gradients (&ge;12.5%)</li>
    <li>non cycle friendly ironworks</li>
    <li>raised/sunken covers or gullies</li>
    <li>potholes</li>
    <li>loose/cracked surfaces</li>
    <li>poor drainage or slip risks</li>
    <li>overgrown vegetation</li>
    <p>Mode: Cycling</p>
  </ul>
</Question>
