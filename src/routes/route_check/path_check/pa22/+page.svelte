<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={6}
  cases={[
    [
      "2",
      "<p>Where pedestrians and cyclists are in a shared facility without horses, the width requirements set out in Table 6-3 of LTN 1/20 are exceeded.</p><p>Where horses are in a shared facility with pedestrians and/or cyclists, the width is greater than 4m.</p>",
    ],
    [
      "1",
      "<p>Where pedestrians and cyclists are in a shared facility without horses, the width requirements set out in Table 6-3 of LTN 1/20 are met.</p><p>Where horses are in a shared facility with pedestrians and/or cyclists, the width is 4m.</p>",
    ],
    [
      "0",
      "<p>Where pedestrians and cyclists are in a shared facility without horses, the width requirements set out in Table 6-3 of LTN 1/20 are not met.</p><p>Where horses are in a shared facility with pedestrians and/or cyclists, the width is less than 4m.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Effective width of shared use spaces.</p>
  <p>Mode: All Active Modes</p>
</Question>
