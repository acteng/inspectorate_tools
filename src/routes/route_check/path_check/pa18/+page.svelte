<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={2}
  label="Steps"
  cases={[
    [
      "2",
      "A step-free route is possible at all public access points and along the path.",
    ],
    [
      "1",
      "A step-free route is possible at key public access points (e.g. interfaces with public highway) and along the path, but steps are present at other public access points.",
    ],
    [
      "0",
      "Steps are unavoidable at key public access points (e.g. interfaces with public highway).  Or, there are unavoidable steps along the path.",
    ],
  ]}
>
  <p>Presence of steps.</p>
  <p>Mode: All Active Modes</p>
</Question>
