<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={2}
  label="Social Space"
  cases={[
    ["2", "<400m."],
    ["1", "400-800m."],
    ["0", ">800m."],
  ]}
>
  <p>Proximity to places where people might stop and have a conversation.</p>
</Question>
