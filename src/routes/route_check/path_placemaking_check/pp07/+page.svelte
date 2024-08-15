<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  cases={[
    [
      "2",
      "<p>Well maintained environment: vegetation is well-managed and there are no issues with littering. Route is well-maintained throughout winter.</p><p>The path has been designed in a way that is easy to maintain.</p>",
    ],
    ["1", "<p>Elements of the path environment are well maintained.</p>"],
    [
      "0",
      "<p>Poorly maintained path environment: overgrown vegetation or significant littering. No winter maintenance.</p><p>The path has been designed in a way that is hard to maintain.</p>",
    ],
  ]}
>
  <p>Condition of the path environment.</p>
</Question>
