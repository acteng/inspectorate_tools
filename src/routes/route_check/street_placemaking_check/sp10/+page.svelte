<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={10}
  cases={[
    [
      "2",
      "<p>The highways layout encourages civilised behaviour, negotiation and forgiveness, which makes the street a pleasant place to be.</p><p>E.g. side road treatments, minimised junction radii and carriageway width.</p>",
    ],
    ["1", "<p>The street layout controls user behaviour throughout.</p>"],
    [
      "0",
      "<p>The street layout encourages aggressive behaviour, which makes the street an unpleasant place to be.</p><p>E.g. central hatching, guard railing, wide flared side roads and right-turn pockets.</p>",
    ],
  ]}
>
  <p>
    Description: Extent to which the street layout influences different types of
    user behaviour.
  </p>
</Question>
