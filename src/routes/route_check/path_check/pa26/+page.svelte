<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={10}
  label="Shared Use Surface"
  cases={[
    ["2", "<p>Bound and porous surface (e.g. Flexipave).</p>"],
    [
      "1",
      "<p>Bound, sealed surface such as tarmac (including tar, spray and chip).</p>",
    ],
    ["0", "<p>Unbound or unsealed surface.</p>"],
    ["N/A", ""],
  ]}
>
  <p>Surface of shared use facilities.</p>
  <p>Mode: All Active Modes</p>
</Question>
