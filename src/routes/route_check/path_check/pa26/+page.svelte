<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={10}
  cases={[
    ["2", "<p>Bound and porous surface (e.g. Flexipave).</p>"],
    [
      "1",
      "<p>Bound, sealed bituminous surface (including spray and chip or resin bound)</p>",
    ],
    ["0", "<p>Unbound or unsealed surface.</p>"],
    ["N/A", ""],
  ]}
>
  <p>Description: Surface of shared use facilities.</p>
  <p>Mode: All Active Modes</p>
</Question>
