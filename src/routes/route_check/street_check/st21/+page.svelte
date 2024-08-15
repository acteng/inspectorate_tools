<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  cases={[
    [
      "2",
      "<p>All pedestrian facilities (including crossings, connections and public transport interchange facilities) are step-free and accessible for wheelchair users, and there is no potential for interaction with cyclists.</p>",
    ],
    [
      "1",
      "<p>All pedestrian facilities (including any crossings, connections and public transport interchange facilities) are step-free and accessible for wheelchair users, but some interaction with cyclists is possible.</p>",
    ],
    [
      "0",
      "<p>Pedestrian facilities (including any crossings, connections and public transport interchange facilities) are not wheelchair accessible.</p>",
    ],
  ]}
>
  <p>Description: Accessibility of pedestrian facilities by wheelchair.</p>
  <p>Mode: Wheeling</p>
</Question>
