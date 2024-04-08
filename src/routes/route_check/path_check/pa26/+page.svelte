<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={10}
  label="Shared Use Surface"
  cases={[
    ["0", "Unbound or unsealed surface."],
    [
      "1",
      "Bound, sealed surface such as tarmac (including tar, spray and chip).",
    ],
    ["2", "Bound and porous surface (e.g. Flexipave)."],
  ]}
>
  <p>Surface of shared use facilities.</p>
  <p>Mode: All Active Modes</p>
</Question>
