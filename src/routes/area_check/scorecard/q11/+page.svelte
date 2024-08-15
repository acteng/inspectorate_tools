<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  cases={[
    [
      12,
      "<p>There are at least five measures from the list of green infrastructure measures (per square km).</p>",
    ],
    [
      9,
      "<p>There are at least four measures from the list of green infrastructure measures (per square km).</p>",
    ],
    [
      6,
      "<p>There are at least three measures from the list of green infrastructure measures (per square km).</p>",
    ],
    [
      3,
      "<p>There are fewer than three measures from the list of green infrastructure measures (per square km)</p>",
    ],
    [
      0,
      "<p>There are no for green infrastructure measures or there will be an overall net loss in green infratructure.</p>",
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
