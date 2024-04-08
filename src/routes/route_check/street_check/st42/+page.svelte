<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={26}
  label="Consistency of Route"
  cases={[
    ["0", "Multiple changes of provision on the route."],
    ["1", "Some changes of provision on the route."],
    ["2", "Provision is consistent throughout the route."],
  ]}
>
  <p>Consistency of provision for pedestrians and cyclists.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
