<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={2}
  label="Tactile Information and Signal Equipment"
  cases={[
    [
      "2",
      "<p>Guidance on tactile paving has been considered and the area is fully legible.</p>",
    ],
    [
      "1",
      "<p>Guidance on tactile paving has been considered, but the area is not fully legible.</p>",
    ],
    [
      "0",
      "<p>Guidance on tactile paving has not been considered.</p><p>Or, there is signal equipment which is incorrectly situated, inaccessible or faulty (for example in terms of rotating cones).</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>
    Adherence of tactile paving to recommended layouts and colours in 'Guidance
    on the Use of Tactile Paving Surfaces' and accessibility of signal
    equipment.
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
