<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  label="Standard of Crossings"
  cases={[
    [
      "C",
      "On very busy streets (>8,000vpd), there are uncontrolled crossings of two or more lanes with no gaps in traffic.  At signal junctions there are arms with dropped kerbs and tactile paving but no green pedestrian symbol.",
    ],
    [
      "0",
      "On very busy streets (>8,000vpd), there are uncontrolled crossings or zebra/parallel crossings.  On quieter streets (<8,000vpd), crossing points have no implied priority or there are no crossing points.",
    ],
    [
      "1",
      "On very busy streets (>8,000vpd), signal crossings are provided for pedestrians.  On quieter streets (<8,000vpd), crossing points have effective implied priority for pedestrians.",
    ],
    [
      "2",
      "On very busy streets (>8,000vpd), signal crossings rest on green for pedestrians or have rapid response.  On quieter streets (<8,000vpd), crossing points are controlled crossings.",
    ],
  ]}
>
  <p>Suitability of pedestrian crossings in context</p>
</Question>
