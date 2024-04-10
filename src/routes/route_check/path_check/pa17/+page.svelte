<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={1}
  label="Barriers"
  cases={[
    [
      "2",
      "No public access points to the path have barriers that would inhibit legitimate users.",
    ],
    [
      "1",
      "Key public access points (e.g. interfaces with public highway) do not have barriers, but other public access points have barriers that would inhibit legitimate users.",
    ],
    [
      "0",
      "Key public access points (e.g. interfaces with public highway) to the path are restricted by barriers that would inhibit legitimate users.  Or, there are barriers along the path that inhibit legitimate users.",
    ],
  ]}
>
  <p>Presence and accessibility of barriers.</p>
  <p>Mode: All Active Modes</p>
</Question>
