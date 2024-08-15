<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={3}
  cases={[
    [
      "2",
      "<p>All barriers are accessible by the cycle design vehicle referenced in LTN 1/20, with sufficient space to turn.</p><p>Or, there are no barriers.</p>",
    ],
    [
      "1",
      "<p>All barriers are accessible by wheelchair users, mobility scooters, and by users on solo upright cycles (as defined in LTN 1/20), with sufficient space to turn.</p>",
    ],
    [
      "0",
      "<p>Barriers are not accessible by wheelchair users and/or users on solo upright cycles (as defined in LTN 1/20) and/or mobility scooters.</p>",
    ],
  ]}
>
  <p>Presence and accessibility of barriers.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
