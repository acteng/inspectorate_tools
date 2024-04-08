<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={16}
  label="Pedestrian Delay at Standalone Signal Crossings"
  cases={[
    [
      "0",
      "After pressing the button, pedestrians must wait over 10 seconds for an invitation to cross.",
    ],
    [
      "1",
      "After pressing the button, pedestrians must wait up to 10 seconds for an invitation to cross.",
    ],
    [
      "2",
      "Crossings rest on the green for pedestrians.  Or, the time between pressing the button and the invitation to cross has been minimised as much as is safe to do so.",
    ],
  ]}
>
  <p>Delay to pedestrians at standalone signal crossings.</p>
  <p>Mode: Walking / Wheeling</p>
</Question>
