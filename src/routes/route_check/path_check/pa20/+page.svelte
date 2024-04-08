<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={4}
  label="Tactile Information and Signal Equipment"
  cases={[
    [
      "0",
      "Guidance on tactile paving has not been considered.  Or, there is signal equipment which is incorrectly situated, inaccessible or faulty (for example in terms of rotating cones).",
    ],
    [
      "1",
      "Guidance on tactile paving has been considered, but the area is not fully legible.",
    ],
    [
      "2",
      "Guidance on tactile paving has been considered and the area is fully legible.",
    ],
  ]}
>
  <p>
    Adherence of tactile paving to recommended layouts and colours in 'Guidance
    on the Use of Tactile Paving Surfaces' and accessibility of signal
    equipment.
  </p>
  <p>Mode: All Active Modes</p>
</Question>
