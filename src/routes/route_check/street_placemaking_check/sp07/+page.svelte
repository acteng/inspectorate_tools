<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  cases={[
    [
      "2",
      "<p>Well maintained streetscape: vegetation is well managed and there are no issues with littering. Route is well maintained throughout winter.</p><p>The streetscape has been designed in a way that is easy to maintain.</p>",
    ],
    ["1", "<p>Elements of the streetscape are well maintained.</p>"],
    [
      "0",
      "<p>Poorly maintained streetscape: overgrown vegetation or significant littering. No winter maintenance.</p><p>The streetscape has been designed in a way that is hard to maintain.</p>",
    ],
  ]}
>
  <p>Description: Condition of the streetscape.</p>
</Question>
