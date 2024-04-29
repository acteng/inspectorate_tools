<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={30}
  label="Connectivity with Other Horse Riding Routes"
  cases={[
    [
      "2",
      "<p>The route links to two or more other routes appropriate for horse riding.</p>",
    ],
    [
      "1",
      "<p>The route links to one other route appropriate for horse riding.</p>",
    ],
    [
      "0",
      "<p>The route does not link to other routes appropriate for horse riding.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Connectivity with other routes appropriate for horse riding.</p>
  <p>Mode: Horse Riding</p>
</Question>
