<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  label="Other Internal Treatment Design"
  cases={[
    [
      16,
      "There are at least five measures from the list of internal treatments (per square km). Residents involved in the design of one or more of these measures.",
    ],
    [
      12,
      "There are at least three measures from the list of internal treatments (per square km). Residents involved in the design of one or more of these measures.",
    ],
    [
      8,
      "There are at least three measures from the list of internal treatments (per square km). Residents not involved in the design of the measures.",
    ],
    [
      4,
      "There are fewer than three measures from the list of internal treatments (per square km).",
    ],
    [0, "There are no internal treatments."],
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
