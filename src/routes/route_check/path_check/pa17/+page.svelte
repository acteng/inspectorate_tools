<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={1}
  cases={[
    [
      "2",
      "<p>No public access points to the path have barriers that would inhibit legitimate users.</p>",
    ],
    [
      "1",
      "<p>Key public access points (e.g. interfaces with public highway) do not have barriers, but other public access points have barriers that would inhibit legitimate users.</p>",
    ],
    [
      "0",
      "<p>Key public access points (e.g. interfaces with public highway) to the path are restricted by barriers that would inhibit legitimate users.</p><p>Or, there are barriers along the path that inhibit legitimate users.</p>",
    ],
  ]}
>
  <p>Description: Presence and accessibility of barriers.</p>
  <p>Mode: All Active Modes</p>
</Question>
