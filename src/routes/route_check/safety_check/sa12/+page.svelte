<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={12}
  label="Effective Width next to Tram Lines"
  cases={[
    [
      "C",
      "<2.4m from tramline edge to kerb on a straight run.  Insufficient clearance on a curve.",
    ],
    ["0", "2.4m from tramline edge to kerb."],
    ["1", ">2.4m from tramline edge to kerb."],
    ["2", "Physical protection is provided for cyclists."],
  ]}
>
  <p>Effective width next to tram line on a straight run or a curve</p>
</Question>
