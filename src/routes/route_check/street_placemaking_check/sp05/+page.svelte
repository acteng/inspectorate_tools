<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  cases={[
    [
      "2",
      "<p>Streetscape is open with good visibility and clear sight lines.</p><p>Frequent escape routes.</p>",
    ],
    [
      "1",
      "<p>Streetscape is mostly open with few visibility issues.</p><p>Some escape routes.</p>",
    ],
    [
      "0",
      "<p>Poor sight lines or potential ambush points due to buildings, walls, vegetation, corners or topography etc.</p><p>Enclosed spaces; no or few escape routes.</p>",
    ],
  ]}
>
  <p>
    Effect of topography, vegetation and built environment on perceived and
    actual risk of crime.
  </p>
</Question>
