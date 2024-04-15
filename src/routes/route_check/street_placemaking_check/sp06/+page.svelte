<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={6}
  label="Visibility of Others"
  cases={[
    [
      "2",
      "<p>Lighting that does not create high contrast areas with shadows. Street furniture does not create hiding or loitering places.</p>",
    ],
    [
      "1",
      "<p>Inadequate lighting, or bright lighting that creates high contrast areas with shadows.</p>",
    ],
    [
      "0",
      "<p>No lighting. Street furniture that creates potential ambush points.</p>",
    ],
  ]}
>
  <p>
    Effect of lighting and street furniture on perceived and actual risk of
    crime.
  </p>
</Question>
