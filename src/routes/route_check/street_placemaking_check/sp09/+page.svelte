<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={9}
  label="Place and Movement"
  cases={[
    [
      "0",
      "The form of the street clashes with its intended functions.  There are issues with navigation and movement or the street is an unpleasant place to be.",
    ],
    [
      "1",
      "The layout of the street is functional and serves its intended purpose in terms of movement and place.",
    ],
    [
      "2",
      "The form of the street is in full harmony with its intended functions.  Users can find their way without a need for maps or signage and the street is a pleasant place to be.",
    ],
  ]}
>
  <p>
    Extent to which the form of the street matches its intended place and
    movement functions.
  </p>
</Question>
