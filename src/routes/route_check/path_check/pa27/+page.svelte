<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  cases={[
    [
      "2",
      "<p>The surface is high-grip (i.e. PTV of 35 or higher).</p><p>If paved, the joints are mortared.</p>",
    ],
    [
      "1",
      "<p>The surface is medium-grip (i.e. PTV of between 25 and 35).</p><p>If paved, the joints are 5mm or less.</p>",
    ],
    [
      "0",
      "<p>The surface is low-grip (i.e. PTV of 25 or lower).</p><p>If paved, the joints are wider than 5mm.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Type of walking/wheeling surface material.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
