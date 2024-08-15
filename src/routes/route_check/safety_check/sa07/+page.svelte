<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  cases={[
    [
      "2",
      "<p>On very busy streets (&gt;8,000vpd), signal crossings rest on green for pedestrians or have rapid response.</p><p>On quieter streets (&lt;8,000vpd), crossing points are controlled crossings.</p>",
    ],
    [
      "1",
      "<p>On very busy streets (&gt;8,000vpd), signal crossings are provided for pedestrians.</p><p>On quieter streets (&lt;8,000vpd), crossing points have effective implied priority for pedestrians.</p>",
    ],
    [
      "0",
      "<p>On very busy streets (&gt;8,000vpd), there are uncontrolled crossings or zebra/parallel crossings.</p><p>On quieter streets (&lt;8,000vpd), crossing points have no implied priority or there are no crossing points.</p>",
    ],
    [
      "C",
      "<p>On very busy streets (&gt;8,000vpd), there are uncontrolled crossings of two or more lanes with no gaps in traffic.</p><p>At signal junctions there are arms with dropped kerbs and tactile paving but no green pedestrian symbol.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Suitability of pedestrian crossings in context</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
