<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={15}
  cases={[
    ["2", "<p>No defects.</p>"],
    ["1", "<p>Few minor defects.</p>"],
    ["0", "<p>Many minor defects.</p>"],
    ["C", "<p>Major defects.</p>"],
  ]}
>
  <p>Description: Walking/wheeling surface and maintenance defects:</p>
  <ul>
    <li>steep camber (horizontal gradient &gt;2.5% )</li>
    <li>
      steep longitudinal gradients (&ge;8% if under 1m, &ge;5% if 1m or over)
    </li>
    <li>missing dropped kerbs</li>
    <li>non flush tables</li>
    <li>misleading tactile information</li>
    <li>loose/cracked surfaces</li>
    <li>poor drainage or slip risks</li>
    <li>overgrown vegetation</li>
    <p>Mode: Walking / Wheeling</p>
  </ul>
</Question>
