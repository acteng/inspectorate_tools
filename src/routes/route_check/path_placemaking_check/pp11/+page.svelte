<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  label="Trees"
  cases={[
    [
      "0",
      "There are no trees, or only one tree.    If assessing a design proposal, there are no trees, or the number of trees has been reduced. ",
    ],
    [
      "1",
      "There are multiple trees, with canopies spaced more than 15m apart on average.    If assessing a design proposal, most existing trees are to be retained, with the overall number of trees maintained or increased. ",
    ],
    [
      "2",
      "There are multiple trees, with canopies spaced less than 15m apart on average.    If assessing a design proposal, all existing trees are to be retained, with the overall number of trees maintained or increased.",
    ],
  ]}
>
  <p>
    Effect of trees on user experience, biodiversity, and climate resilience.
  </p>
</Question>
