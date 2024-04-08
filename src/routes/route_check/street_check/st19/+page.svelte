<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={3}
  label="Barriers"
  cases={[
    [
      "0",
      "Barriers are not accessible by wheelchair users and/or users on solo upright cycles (as defined in LTN 1/20) and/or mobility scooters.",
    ],
    [
      "1",
      "All barriers are accessible by wheelchair users, mobility scooters, and by users on solo upright cycles (as defined in LTN 1/20), with sufficient space to turn.",
    ],
    [
      "2",
      "All barriers are accessible by the cycle design vehicle referenced in LTN 1/20, with sufficient space to turn.  Or, there are no barriers.",
    ],
  ]}
>
  <p>Presence and accessibility of barriers.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
