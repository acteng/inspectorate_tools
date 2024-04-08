<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={9}
  label="Walking/Wheeling Surface Material"
  cases={[
    [
      "0",
      "The surface is low-grip (i.e. PTV of 25 or lower).  If paved, the joints are wider than 5mm.",
    ],
    [
      "1",
      "The surface is medium-grip (i.e. PTV of between 25 and 35).  If paved, the joints are 5mm or less.  ",
    ],
    [
      "2",
      "The surface is high-grip (i.e. PTV of 35 or higher).  If paved, the joints are mortared.",
    ],
  ]}
>
  <p>Type of walking/wheeling surface material.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
