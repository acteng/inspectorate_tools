<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  label="Ability to Turn Around"
  cases={[
    [
      "2",
      "<p>The path is at least 4m wide.</p><p>Or, turning points are less than 1km apart and provided between all public access points.</p>",
    ],
    ["1", "<p>Turning points are approximately 1km apart.</p>"],
    [
      "0",
      "<p>There are no turning points.</p><p>Or, turning points are over 1km apart or not provided between all public access points.</p>",
    ],
  ]}
>
  <p>
    Presence and frequency of turning points (open and flat areas of at 4m x
    4m).
  </p>
  <p>Mode: All Active Modes</p>
</Question>
