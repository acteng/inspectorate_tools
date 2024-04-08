<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={17}
  label="Deviation of Path Against Straight Line"
  cases={[
    ["0", "Deviation factor against straight line greater than 1.4."],
    ["1", "Deviation factor against straight line 1.2-1.4."],
    ["2", "Deviation factor against straight line less than 1.2."],
  ]}
>
  <p>Extent to which the path deviates against the straight line.</p>
  <p>Mode: All Active Modes</p>
</Question>
