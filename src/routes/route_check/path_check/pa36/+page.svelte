<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={20}
  label="Delay at Crossings"
  cases={[
    ["2", "<p>Maximum waiting time up to 40 seconds.</p>"],
    ["1", "<p>Maximum waiting time 40-60 seconds.</p>"],
    ["0", "<p>Maximum waiting time over 60 seconds.</p>"],
  ]}
>
  <p>Delay to path users at signal crossings.</p>
  <p>Mode: All Active Modes</p>
</Question>
