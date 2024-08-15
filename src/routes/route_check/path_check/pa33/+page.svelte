<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={17}
  cases={[
    ["2", "<p>Deviation factor against straight line less than 1.2.</p>"],
    ["1", "<p>Deviation factor against straight line 1.2-1.4.</p>"],
    ["0", "<p>Deviation factor against straight line greater than 1.4.</p>"],
  ]}
>
  <p>Extent to which the path deviates against the straight line.</p>
  <p>Mode: All Active Modes</p>
</Question>
