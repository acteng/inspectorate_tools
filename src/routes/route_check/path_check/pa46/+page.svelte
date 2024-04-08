<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={30}
  label="Connectivity with Other Horse Riding Routes"
  cases={[
    [
      "0",
      "The route does not link to other routes appropriate for horse riding.",
    ],
    ["1", "The route links to one other route appropriate for horse riding."],
    [
      "2",
      "The route links to two or more other routes appropriate for horse riding.",
    ],
  ]}
>
  <p>Connectivity with other routes appropriate for horse riding.</p>
  <p>Mode: Horse Riding</p>
</Question>
