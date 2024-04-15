<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={26}
  label="Consistency of Route"
  cases={[
    ["2", "<p>Provision is consistent throughout the route.</p>"],
    ["1", "<p>Some changes of provision on the route.</p>"],
    ["0", "<p>Multiple changes of provision on the route.</p>"],
  ]}
>
  <p>Consistency of provision for pedestrians and cyclists.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
