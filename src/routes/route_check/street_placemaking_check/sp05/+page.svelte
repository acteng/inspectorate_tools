<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  label="Forward Visibility and Escape Routes"
  cases={[
    [
      "0",
      "Poor sight lines or potential ambush points due to buildings, walls, vegetation, corners or topography etc.  Enclosed spaces; no or few escape routes.",
    ],
    [
      "1",
      "Streetscape is mostly open with few visibility issues.  Some escape routes.",
    ],
    [
      "2",
      "Streetscape is open with good visibility and clear sight lines.  Frequent escape routes.",
    ],
  ]}
>
  <p>
    Effect of topography, vegetation and built environment on perceived and
    actual risk of crime.
  </p>
</Question>
