<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={15}
  label="Accessibility of Access Points"
  cases={[
    [
      "0",
      "Path access points are not protected, meaning there is a risk that they could be blocked by parking or loading, impeding access for some or all path users.",
    ],
    [
      "1",
      "Path access points are suitably protected to maintain access for all path users.  Or, there is adequate marked loading and parking provision near access points.",
    ],
    [
      "2",
      "Path access points are suitably protected to maintain access for all path users, and there is adequate marked loading and parking provision near access points.",
    ],
  ]}
>
  <p>Potential for access points to be blocked by parking or loading.</p>
  <p>Mode: All Active Modes</p>
</Question>
