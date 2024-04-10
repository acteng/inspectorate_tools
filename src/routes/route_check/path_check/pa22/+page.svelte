<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={6}
  label="Width of Shared Use Spaces"
  cases={[
    [
      "2",
      "Where pedestrians and cyclists are in a shared facility without horses, the width requirements set out in Table 6-3 of LTN 1/20 are exceeded.  Where horses are in a shared facility with pedestrians and/or cyclists, the width is greater than 4m.",
    ],
    [
      "1",
      "Where pedestrians and cyclists are in a shared facility without horses, the width requirements set out in Table 6-3 of LTN 1/20 are met.  Where horses are in a shared facility with pedestrians and/or cyclists, the width is 4m.",
    ],
    [
      "0",
      "Where pedestrians and cyclists are in a shared facility without horses, the width requirements set out in Table 6-3 of LTN 1/20 are not met.  Where horses are in a shared facility with pedestrians and/or cyclists, the width is less than 4m.",
    ],
  ]}
>
  <p>Effective width of shared use spaces.</p>
  <p>Mode: All Active Modes</p>
</Question>
