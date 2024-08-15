<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  cases={[
    [
      "2",
      "<p>There are multiple trees, with canopies spaced less than 15m apart on average.</p><p></p><p>If assessing a design proposal, all existing trees are to be retained, with the overall number of trees maintained or increased.</p>",
    ],
    [
      "1",
      "<p>There are multiple trees, with canopies spaced more than 15m apart on average.</p><p></p><p>If assessing a design proposal, most existing trees are to be retained, with the overall number of trees maintained or increased.</p>",
    ],
    [
      "0",
      "<p>There are no trees, or only one tree.</p><p></p><p>If assessing a design proposal, there are no trees, or the number of trees has been reduced.</p>",
    ],
  ]}
>
  <p>
    Effect of trees on user experience, biodiversity, and climate resilience.
  </p>
</Question>
