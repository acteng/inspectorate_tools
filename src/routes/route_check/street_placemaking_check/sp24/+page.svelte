<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={24}
  label="Noise Pollution"
  cases={[
    ["2", "Comfortable noise levels (<65dB)."],
    ["1", "Slightly noisy (65-78dB)."],
    ["0", "Excessively noisy (>78dB)."],
  ]}
>
  <p>Effect of noise pollution from traffic on user experience.</p>
</Question>
