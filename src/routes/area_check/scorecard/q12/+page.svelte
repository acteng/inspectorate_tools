<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={12}
  cases={[
    [
      16,
      "<p>There are at least five measures from the list of internal treatments (per square km).</p><p>Residents involved in the design of one or more of these measures.</p>",
    ],
    [
      12,
      "<p>There are at least three measures from the list of internal treatments (per square km).</p><p>Residents involved in the design of one or more of these measures.</p>",
    ],
    [
      8,
      "<p>There are at least three measures from the list of internal treatments (per square km).</p><p>Residents not involved in the design of the measures.</p>",
    ],
    [
      4,
      "<p>There are fewer than three measures from the list of internal treatments (per square km).</p>",
    ],
    [0, "<p>There are no internal treatments.</p>"],
  ]}
>
  <p>List of internal treatments</p>
  <ul>
    <li>Play streets</li>
    <li>School streets</li>
    <li>Cycle parking/hangars</li>
    <li>Resting places e.g. seating</li>
    <li>Raised tables/entries or continuous footways</li>
    <li>New social spaces</li>
    <li>Parklets or pocket parks</li>
    <li>Wayfinding</li>
    <li>Art</li>
    <li>Other (please specify in the scoring justification box)</li>
  </ul>
</Question>
