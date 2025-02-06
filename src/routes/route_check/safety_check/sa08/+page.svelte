<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={8}
  cases={[
    [
      "2",
      "<p>85th percentile speed is under 20mph.</p><p>Or, cyclists are protected from motor traffic or off-road entirely and controlled crossings are provided for pedestrians wherever needed.</p>",
    ],
    ["1", "<p>85th percentile speed is between 20mph and 25mph.</p>"],
    ["0", "<p>85th percentile speed is between 25mph and 30mph.</p>"],
    ["C", "<p>85th percentile speed is over 30mph.</p>"],
  ]}
>
  <p>
    Description: 85th percentile speed of motor traffic (where cyclists are not
    protected or pedestrians cross uncontrolled).
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
