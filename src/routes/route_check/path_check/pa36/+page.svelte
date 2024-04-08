<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={20}
  label="Delay at Crossings"
  cases={[
    ["0", "Maximum waiting time over 60 seconds."],
    ["1", "Maximum waiting time 40-60 seconds."],
    ["2", "Maximum waiting time up to 40 seconds."],
  ]}
>
  <p>Delay to path users at signal crossings.</p>
  <p>Mode: All Active Modes</p>
</Question>
