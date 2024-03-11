<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  label="Green Infrastructure Design"
  cases={[
    [
      12,
      "There are at least five measures from the list of green infrastructure measures (per square km).",
    ],
    [
      9,
      "There are at least four measures from the list of green infrastructure measures (per square km).",
    ],
    [
      6,
      "There are at least three measures from the list of green infrastructure measures (per square km).",
    ],
    [
      3,
      "There are fewer than three measures from the list of green infrastructure measures (per square km)",
    ],
    [
      0,
      "There are no for green infrastructure measures or there will be an overall net loss in green infratructure.",
    ],
  ]}
>
  <p>List of green infrastructure measures</p>
  <ul>
    <li>Sustainable drainage systems (SuDS)</li>
    <li>Planters</li>
    <li>Parklets or pocket parks</li>
    <li>Trees</li>
    <li>Soft landscaping e.g. planting of wildflowers/hedges/shrubs</li>
    <li>Community gardens</li>
    <li>Green roofs e.g. on bus stops</li>
    <li>Green walls or screens</li>
    <li>Bug hotels</li>
  </ul>
</Question>
