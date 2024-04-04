<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  label="Provision of Crossings"
  cases={[
    [
      "C",
      "On very busy streets (>8,000vpd) controlled crossings (including zebra crossings) are not present or more than 400m apart.  On quieter streets (<8,000vpd), desire lines are blocked by parking and loading. ",
    ],
    [
      "0",
      "On very busy streets (>8,000vpd), controlled crossings (including zebra crossings) are provided every 200-400m.  On quieter streets (<8,000vpd), loading/parking is formalised with gaps for pedestrians to cross.",
    ],
    [
      "1",
      "On very busy streets (>8,000vpd), controlled crossings (including zebra crossings) are provided every 100-200m.  On quieter streets (<8,000vpd), loading/parking is formalised with gaps for pedestrians to cross on desire lines.",
    ],
    [
      "2",
      "On very busy streets (>8,000vpd), controlled crossings (including zebra crossings) are provided every 50-100m.   On quieter streets (<8,000vpd), there are controlled crossings or only one lane of traffic to cross.",
    ],
  ]}
>
  <p>Ability of pedestrians to cross the street safely on desire lines</p>
</Question>
