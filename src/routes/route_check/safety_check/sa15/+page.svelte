<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={15}
  label="Walking/Wheeling Surface and Maintenance Defects"
  cases={[
    ["2", "No defects."],
    ["1", "Few minor defects."],
    ["0", "Many minor defects."],
    ["C", "Major defects."],
  ]}
>
  <p>
    Walking/wheeling surface and maintenance defects: • steep camber (horizontal
    gradient >2.5% ) • steep longitudinal gradients (≥8% if under 1m, ≥5% if 1m
    or over) • missing dropped kerbs • non flush tables • misleading tactile
    information • loose/cracked surfaces • poor drainage or slip risks •
    overgrown vegetation
  </p>
  <p>Mode: Walking / Wheeling</p>
</Question>
