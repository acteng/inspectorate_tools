<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={4}
  label="Bus Stops"
  cases={[
    [
      "0",
      "At bus stops, cyclists regularly have to wait behind buses or overtake them in general traffic lanes.  Or, there are likely to be high-level interactions between pedestrians and cyclists.",
    ],
    [
      "1",
      "At bus stops, cyclists are protected from buses and traffic, but there are likely to be medium-level interactions between pedestrians and cyclists.",
    ],
    [
      "2",
      "At bus stops, cyclists are protected from buses and traffic and interactions between pedestrians and cyclists are likely to be low-level.",
    ],
  ]}
>
  <p>Interactions at bus stops.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
