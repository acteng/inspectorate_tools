<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={2}
  cases={[
    ["2", "<p>Less than 400m.</p>"],
    ["1", "<p>400-800m.</p>"],
    ["0", "<p>More than 800m.</p>"],
  ]}
>
  <p>
    Description: Proximity to places where people might stop and have a
    conversation.
  </p>
</Question>
