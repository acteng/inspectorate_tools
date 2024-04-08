<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={1}
  label="Gradient"
  cases={[
    ["0", ">5%."],
    ["1", "3-5%."],
    ["2", "<3%."],
  ]}
>
  <p>
    Steepest gradient due to underlying terrain. (For gradients at ramps,
    dropped kerbs and cambers, see metrics SA14 and SA15).
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
