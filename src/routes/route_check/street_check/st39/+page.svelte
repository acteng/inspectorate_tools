<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={23}
  label="Impact of Motor Traffic on Pedestrians and Cyclists"
  cases={[
    [
      "0",
      "There are no measures to manage motor traffic that benefit active modes.",
    ],
    [
      "1",
      "There are some measures to manage motor traffic that benefit active modes.",
    ],
    [
      "2",
      "There are measures to manage motor traffic which prioritise active modes.  Or, the route is completely separate from motor traffic.",
    ],
  ]}
>
  <p>
    Measures taken to manage motor traffic in a way that benefits active modes.
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
