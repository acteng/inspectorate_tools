<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={12}
  label="Effective Width next to Tram Lines"
  cases={[
    ["2", "<p>Physical protection is provided for cyclists.</p>"],
    ["1", "<p>>2.4m from tramline edge to kerb.</p>"],
    ["0", "<p>2.4m from tramline edge to kerb.</p>"],
    [
      "C",
      "<p><2.4m from tramline edge to kerb on a straight run.</p><p>Insufficient clearance on a curve.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Effective width next to tram line on a straight run or a curve</p>
  <p>Mode: Cycling</p>
</Question>
