<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={1}
  cases={[
    ["2", "<p>Less than 3%.</p>"],
    ["1", "<p>3-5%.</p>"],
    ["0", "<p>More than 5%.</p>"],
  ]}
>
  <p>Description: Steepest gradient due to underlying terrain.</p>
  <p>
    (For gradients at ramps, dropped kerbs and cambers, see metrics SA14 and
    SA15).
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
