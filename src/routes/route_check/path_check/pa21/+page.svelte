<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  label="Ability to Turn Around"
  cases={[
    [
      "2",
      "The path is at least 4m wide.  Or, turning points are less than 1km apart and provided between all public access points.",
    ],
    ["1", "Turning points are approximately 1km apart. "],
    [
      "0",
      "There are no turning points.  Or, turning points are over 1km apart or not provided between all public access points.",
    ],
  ]}
>
  <p>
    Presence and frequency of turning points (open and flat areas of at 4m x
    4m).
  </p>
  <p>Mode: All Active Modes</p>
</Question>
