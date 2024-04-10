<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={6}
  label="Visibility of Others"
  cases={[
    [
      "2",
      "Lighting that does not create high contrast areas with shadows. Street furniture does not create hiding or loitering places.",
    ],
    [
      "1",
      "Inadequate lighting, or bright lighting that creates high contrast areas with shadows. ",
    ],
    [
      "0",
      "No lighting. Street furniture that creates potential ambush points.",
    ],
  ]}
>
  <p>
    Effect of lighting and street furniture on perceived and actual risk of
    crime.
  </p>
</Question>
