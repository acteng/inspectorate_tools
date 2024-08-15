<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={20}
  cases={[
    ["2", "<p>Multiple features.</p>"],
    ["1", "<p>One feature.</p>"],
    ["0", "<p>No features.</p>"],
  ]}
>
  <p>
    Effect of ancillary features on user experience, biodiversity and climate
    resilience. Such as:
  </p>
  <ul>
    <li>Bug hotels</li>
    <li>Water features</li>
    <li>Wildlife corridors</li>
  </ul>
</Question>
