<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={15}
  cases={[
    [
      "2",
      "<p>The character of the street reflects its cultural significance to society.</p>",
    ],
    [
      "1",
      "<p>The street is culturally significant on a local level, but the character of the street does not reflect this.</p>",
    ],
    [
      "0",
      "<p>The street is culturally significant on a regional or national level, but the character of the street does not reflect this.</p>",
    ],
  ]}
>
  <p>Description: Cultural significance of the street to society.</p>
</Question>
