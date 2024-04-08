<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={2}
  label="Social Space"
  cases={[
    ["0", ">800m."],
    ["1", "400-800m."],
    ["2", "<400m."],
  ]}
>
  <p>Proximity to places where people might stop and have a conversation.</p>
</Question>
