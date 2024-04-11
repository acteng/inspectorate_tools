<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={9}
  label="Visual Interest"
  cases={[
    [
      "2",
      "<p>Lots of variety in the path environment (e.g. visually interesting or unique features).</p>",
    ],
    ["1", "<p>Some variety in the path's environment.</p>"],
    [
      "0",
      "<p>Uniform, monotonous, boring (e.g. consistently in a cutting or between high fences).</p>",
    ],
  ]}
>
  <p>Visual distinctiveness of the path environmenty.</p>
</Question>
