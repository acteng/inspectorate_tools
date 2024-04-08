<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={7}
  label="Maintenance and Upkeep"
  cases={[
    [
      "0",
      "Poorly maintained path environment: overgrown vegetation or significant littering. No winter maintenance.  The path has been designed in a way that is hard to maintain.",
    ],
    ["1", "Elements of the path environment are well maintained."],
    [
      "2",
      "Well maintained environment: vegetation is well-managed and there are no issues with littering. Route is well-maintained throughout winter.  The path has been designed in a way that is easy to maintain.",
    ],
  ]}
>
  <p>Condition of the path environment.</p>
</Question>
