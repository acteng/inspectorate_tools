<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  label="Maintenance and Upkeep"
  cases={[
    [
      "0",
      "Poorly maintained streetscape: overgrown vegetation or significant littering. No winter maintenance.  The streetscape has been designed in a way that is hard to maintain.",
    ],
    ["1", "Elements of the streetscape are well maintained."],
    [
      "2",
      "Well maintained streetscape: vegetation is well-managed and there are no issues with littering. Route is well-maintained throughout winter.  The streetscape has been designed in a way that is easy to maintain.",
    ],
  ]}
>
  <p>Condition of the streetscape.</p>
</Question>
