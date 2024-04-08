<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  label="Wheelchair Access"
  cases={[
    [
      "0",
      "Pedestrian facilities (including any crossings, connections and public transport interchange facilities) are not wheelchair accessible.",
    ],
    [
      "1",
      "All pedestrian facilities (including any crossings, connections and public transport interchange facilities) are step-free and accessible for wheelchair users, but some interaction with cyclists is possible.",
    ],
    [
      "2",
      "All pedestrian facilities (including crossings, connections and public transport interchange facilities) are step-free and accessible for wheelchair users, and there is no potential for interaction with cyclists.",
    ],
  ]}
>
  <p>Accessibility of pedestrian facilities by wheelchair.</p>
  <p>Mode: Wheeling</p>
</Question>
