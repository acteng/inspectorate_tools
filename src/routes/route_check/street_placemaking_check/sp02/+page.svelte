<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={2}
  label="Social Space"
  cases={[
    ["2", "<p><400m.</p>"],
    ["1", "<p>400-800m.</p>"],
    ["0", "<p>>800m.</p>"],
  ]}
>
  <p>Proximity to places where people might stop and have a conversation.</p>
</Question>
