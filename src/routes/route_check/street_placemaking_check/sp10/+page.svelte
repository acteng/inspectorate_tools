<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={10}
  label="Impact of Street Design on Behaviour"
  cases={[
    [
      "2",
      "The highways layout encourages civilised behaviour, negotiation and forgiveness, which makes the street a pleasant place to be.  E.g. side road treatments, minimised junction radii and carriageway width.",
    ],
    ["1", "The street layout controls user behaviour throughout."],
    [
      "0",
      "The street layout encourages aggressive behaviour, which makes the street an unpleasant place to be.  E.g. central hatching, guard railing, wide flared side roads and right-turn pockets.",
    ],
  ]}
>
  <p>
    Extent to which the street layout influences different types of user
    behaviour.
  </p>
</Question>
