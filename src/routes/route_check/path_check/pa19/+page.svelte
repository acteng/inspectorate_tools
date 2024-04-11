<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={3}
  label="Gradient"
  cases={[
    ["2", "<p><3%.</p>"],
    ["1", "<p>3-5%.</p>"],
    ["0", "<p>>5%.</p>"],
  ]}
>
  <p>Steepest gradient due to underlying terrain.</p>
  <p>
    (For gradients at ramps, dropped kerbs and cambers, see metrics SA14 and
    SA15).
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
