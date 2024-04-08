<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={15}
  label="Pedestrian Delay at Junctions"
  cases={[
    ["0", "Maximum waiting time over 60 seconds."],
    ["1", "Maximum waiting time 40-60 seconds."],
    ["2", "Maximum waiting time up to 40 seconds."],
  ]}
>
  <p>Delay to pedestrians at signal controlled junctions.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
