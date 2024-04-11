<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={6}
  label="Provision of Crossings"
  cases={[
    [
      "2",
      "<p>On very busy streets (>8,000vpd), controlled crossings (including zebra crossings) are provided every 50-100m.</p><p>On quieter streets (<8,000vpd), there are controlled crossings or only one lane of traffic to cross.</p>",
    ],
    [
      "1",
      "<p>On very busy streets (>8,000vpd), controlled crossings (including zebra crossings) are provided every 100-200m.</p><p>On quieter streets (<8,000vpd), loading/parking is formalised with gaps for pedestrians to cross on desire lines.</p>",
    ],
    [
      "0",
      "<p>On very busy streets (>8,000vpd), controlled crossings (including zebra crossings) are provided every 200-400m.</p><p>On quieter streets (<8,000vpd), loading/parking is formalised with gaps for pedestrians to cross.</p>",
    ],
    [
      "C",
      "<p>On very busy streets (>8,000vpd) controlled crossings (including zebra crossings) are not present or more than 400m apart.</p><p>On quieter streets (<8,000vpd), desire lines are blocked by parking and loading.</p>",
    ],
  ]}
>
  <p>Ability of pedestrians to cross the street safely on desire lines</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
