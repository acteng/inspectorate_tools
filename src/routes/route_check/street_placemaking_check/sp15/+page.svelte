<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={15}
  label="Cultural Significance"
  cases={[
    [
      "2",
      "The character of the street reflects its cultural significance to society.",
    ],
    [
      "1",
      "The street is culturally significant on a local level, but the character of the street does not reflect this.",
    ],
    [
      "0",
      "The street is culturally significant on a regional or national level, but the character of the street does not reflect this.",
    ],
  ]}
>
  <p>Cultural significance of the street to society.</p>
</Question>
