<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={4}
  cases={[
    [
      "2",
      "<p>At bus stops, cyclists are protected from buses and traffic and interactions between pedestrians and cyclists are likely to be low-level.</p>",
    ],
    [
      "1",
      "<p>At bus stops, cyclists are protected from buses and traffic, but there are likely to be medium-level interactions between pedestrians and cyclists.</p>",
    ],
    [
      "0",
      "<p>At bus stops, cyclists regularly have to wait behind buses or overtake them in general traffic lanes.</p><p>Or, there are likely to be high-level interactions between pedestrians and cyclists.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Description: Interactions at bus stops.</p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
