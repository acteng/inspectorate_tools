<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={17}
  cases={[
    ["2", "<p>Comfortable noise levels (&lt;65dB).</p>"],
    ["1", "<p>Slightly noisy (65-78dB).</p>"],
    ["0", "<p>Excessively noisy (&gt;78dB).</p>"],
  ]}
>
  <p>Description: Effect of noise pollution from traffic on user experience.</p>
</Question>
