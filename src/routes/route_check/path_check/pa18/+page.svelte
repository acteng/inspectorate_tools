<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={2}
  cases={[
    [
      "2",
      "<p>A step-free route is possible at all public access points and along the path.</p>",
    ],
    [
      "1",
      "<p>A step-free route is possible at key public access points (e.g. interfaces with public highway) and along the path, but steps are present at other public access points.</p>",
    ],
    [
      "0",
      "<p>Steps are unavoidable at key public access points (e.g. interfaces with public highway).</p><p>Or, there are unavoidable steps along the path.</p>",
    ],
  ]}
>
  <p>Description: Presence of steps.</p>
  <p>Mode: All Active Modes</p>
</Question>
